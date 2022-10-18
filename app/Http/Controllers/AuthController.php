<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Mail\ForgotEmail;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */


    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = request(['email', 'password']);

        $user = User::where('email', $credentials['email'])->first();

        if (!$user) {
            return response()->json(['error' => 'Não existe a uma conta associada a este email.'], 401);
        }

        if (!$user->password) {
            $user->password = bcrypt($credentials['password']);
            $user->save();
        }


        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Credenciais incorretas'], 401);
        }

        $user = User::find(auth()->user()->id);

        if (!$user->email_verified_at) {
            if ($request->token && $request->token == $user->token) {
                $user->email_verified_at = Carbon::now();
                $user->save();
            } else {
                return response()->json(['error' => 'Esta conta ainda não se encontra validada. Por favor verifique o seu email.'], 401);
            }
        }

        return $this->respondWithToken($token);
    }

    public function forgotPassword(Request $request)
    {
        $user = User::where('email', $request->only('email'))->first();

        if (!$user) {
            $error_message = "Não existe nenhuma conta associada a esse email";
            return response()->json(['errors' => ['email' => $error_message]], 404);
        }

        Mail::to($user->email)->queue(new ForgotEmail($user->token));

        return response()->json([
            'success' => true, 'data' => ['message' => 'Foi enviado um email de recuperação, por favor verifique o seu email']
        ], 200);
    }

    public function recoverPassword(Request $request)
    {
        $user = User::where('token', $request->token)->first();
        $newPassword = $request->password;


        if (!$user) {
            $error_message = "Ocorreu um erro, por favor entre em contacto connosco";
            return response()->json(['error' => ['email' => $error_message]], 401);
        }

        $user->password = bcrypt($newPassword);
        $user->save();


        return response()->json([
            'success' => true, 'data' => ['message' => 'Password alterada com sucesso']
        ], 200);
    }


    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return new UserResource(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
