<?php

namespace App\Http\Controllers;

use App\Models\Media;

use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;

class MediaController extends Controller
{
    public function proof($proof)
    {
        $headers = [
            'Content-Type' => 'application/pdf',
        ];

        return response()->download(storage_path("app/proof/" . $proof), 'filename.pdf', $headers);
    }

    public function instructions(Request $request,  $filename)
    {
        if ($request->header('Authorization'))
            if (auth()->user()->id) {
                $headers = [
                    'Content-Type' => 'application/pdf',
                ];

                return response()->download(storage_path("app/courses/pdf/" . $filename . '.pdf'), 'filename.pdf', $headers);
            }
    }

    public function audio(Request $request,  $filename)
    {
        if ($request->header('Authorization'))
            if (auth()->user()->id) {
                $headers = [
                    'Content-Type' => 'application/mp3',
                ];

                return response()->download(storage_path("app/courses/mp3/" . $filename . '.mp3'), 'filename.mp3', $headers);
            }
    }

    public function video(Request $request,  $filename)
    {
        $request->headers->set('Authorization', 'Bearer ' . $request->token);
        $user = auth()->user();

        if ($request->header('Authorization'))
            if ($user) {
                $path = storage_path('app/courses/mp4/' . $filename . ".mp4");

                return Media::returnMediaFile($path);
            }
    }
}
