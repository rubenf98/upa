<?php

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

Route::post('mbway', [App\Http\Controllers\PaymentController::class, 'MBWay']);
Route::post('multibanco', [App\Http\Controllers\PaymentController::class, 'Multibanco']);

Route::post('process-transaction', [App\Http\Controllers\PaymentController::class, 'paypalProcessTransaction'])->name('processTransaction');
Route::post('success-transaction', [App\Http\Controllers\PaymentController::class, 'paypalSuccessTransaction'])->name('successTransaction');
Route::post('cancel-transaction', [App\Http\Controllers\PaymentController::class, 'paypalCancelTransaction'])->name('cancelTransaction');