<?php

namespace App\Http\Controllers;

use App\Models\Media;

use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;

class MediaController extends Controller
{
    public function instructions(Request $request,  $filename)
    {
        return $request->header('Authorization');
        if ($request->header('Authorization'))
            if (auth()->user()->id) {
                $path = storage_path('app/courses/pdf/' . $filename . ".pdf");

                return Media::returnMediaFile($path);
            }
    }

    public function audio(Request $request,  $filename)
    {
        return $request->header('Authorization');
        if ($request->header('Authorization'))
            if (auth()->user()->id) {
                $path = storage_path('app/courses/mp3/' . $filename . ".mp3");

                return Media::returnMediaFile($path);
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
