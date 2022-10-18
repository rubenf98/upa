<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Mail\RegistrationEmail;
use App\Models\User;
use App\Models\UserHasItem;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return UserResource::collection(User::paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        $validator = $request->validated();
        $validator["token"] = uniqid();
        $record = User::create($validator);
        $record->roles()->attach(2);

        UserHasItem::create([
            'user_id' => $record->id,
            'userable_id' => 1,
            'userable_type' => "App\Models\Course",
            'expire' => Carbon::now()->addYears(100)->toDateString(),
        ]);

        UserHasItem::create([
            'user_id' => $record->id,
            'userable_id' => 1,
            'userable_type' => "App\Models\Ebook",
        ]);

        Mail::to($validator["email"])->queue(new RegistrationEmail($validator["token"]));


        return new UserResource($record);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, User $user)
    {
        $validator = $request->validated();
        $user->update($validator);
        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();

        return response()->json(null, 204);
    }
}
