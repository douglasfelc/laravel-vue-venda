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
    Route::apiResource('client', 'App\Http\Controllers\ClientController');
    Route::apiResource('product', 'App\Http\Controllers\ProductController');
    Route::apiResource('payment-method', 'App\Http\Controllers\PaymentMethodController');
    Route::apiResource('postal-code', 'App\Http\Controllers\PostalCodeController');
    Route::apiResource('sale', 'App\Http\Controllers\SaleController');
    Route::apiResource('sale-item', 'App\Http\Controllers\SaleItemController');
});
