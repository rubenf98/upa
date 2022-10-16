<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\EbookController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ValidateTransaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('login', 'App\Http\Controllers\AuthController@login');
Route::post('logout', 'App\Http\Controllers\AuthController@logout');
Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
Route::post('forgotPassword', 'App\Http\Controllers\AuthController@forgotPassword');
Route::put('recoverPassword', 'App\Http\Controllers\AuthController@recoverPassword');
Route::get('me', 'App\Http\Controllers\AuthController@me');

Route::get('download/proof/{proof}', 'App\Http\Controllers\MediaController@proof');
Route::get('download/ebook/{ebook}', 'App\Http\Controllers\EbookController@download');
Route::get('download/instructions/{filename}', 'App\Http\Controllers\MediaController@instructions');
Route::get('download/audio/{filename}', 'App\Http\Controllers\MediaController@audio');

Route::put('transaction/validate/{transaction}', ValidateTransaction::class);

Route::apiResource('contact', ContactController::class);
Route::apiResource('content', ContentController::class);
Route::apiResource('course', CourseController::class);
Route::apiResource('ebook', EbookController::class);
Route::apiResource('role', RoleController::class);
Route::apiResource('transaction', TransactionController::class);
Route::apiResource('user', UserController::class);

Route::get('thumbnail/{filename}', 'App\Http\Controllers\MediaController@thumbnail');
Route::get('video/{filename}', 'App\Http\Controllers\MediaController@video');
