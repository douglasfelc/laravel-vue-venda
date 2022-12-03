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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Routes v1
Route::prefix('v1')->group(function() {
    // Routes that do NOT require authorization
    Route::post('login', 'App\Http\Controllers\AuthController@login');

    // Routes with some methods that need authorization
    Route::apiResource('user', 'App\Http\Controllers\UserController');

    // Routes that require authentication
    Route::middleware('jwt.auth')->group(function() {
        Route::post('logout', 'App\Http\Controllers\AuthController@logout')->middleware('jwt.auth');
        Route::post('refresh', 'App\Http\Controllers\AuthController@refresh')->middleware('jwt.auth');
        Route::post('me', 'App\Http\Controllers\AuthController@me')->middleware('jwt.auth');

        Route::apiResource('client', 'App\Http\Controllers\ClientController');
        Route::apiResource('product', 'App\Http\Controllers\ProductController');
        Route::apiResource('payment-method', 'App\Http\Controllers\PaymentMethodController');
        Route::apiResource('postal-code', 'App\Http\Controllers\PostalCodeController');
        Route::apiResource('sale', 'App\Http\Controllers\SaleController');
        Route::apiResource('sale-item', 'App\Http\Controllers\SaleItemController');
    });
});
