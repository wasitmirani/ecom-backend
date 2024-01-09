<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\api\order\OrderController;
use App\Http\Controllers\backend\product\ProductController;
use App\Http\Controllers\backend\product\CategoryController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::prefix('users')->group(function () {
    Route::resource('user', UserController::class);
});







Route::prefix('/app')->middleware('auth:sanctum')->group(function () {

    // auth 
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');
    
    Route::resource('product', ProductController::class);
    Route::get('/categories-list', [CategoryController::class,'categoriesList']);
    Route::get('/orders',[OrderController::class,'orders']);
    Route::get('/order/{uuid}',[OrderController::class,'orderDetails']);

});

// Route::get('/me', static fn () => response()->json(['user_name'=>"wasitmirani"]));






