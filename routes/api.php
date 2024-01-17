<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\user\UserController;
use App\Http\Controllers\backend\order\OrderController;
use App\Http\Controllers\backend\product\ProductController;
use App\Http\Controllers\backend\product\CategoryController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;

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
    Route::get('/orders',[OrderController::class,'index']);
    Route::get('/order/{uuid}',[OrderController::class,'orderDetails']);
    Route::get('/order-status/{uuid}',[OrderController::class,'updateStatus']);
    Route::post('/order-cancel/{uuid}',[OrderController::class,'cancelOrder']);
    Route::get('/order-details/{uuid}', [OrderController::class, 'orderDetails']);
    Route::put('/update-address/{uuid}', [OrderController::class, 'updateAddress']);
    Route::get('/customers',[UserController::class,'customers']);
    Route::put('/customer/{id}/toggle-status', [UserController::class, 'toggleUserStatus']);
    Route::get('/users', [UserController::class, 'index']);
    Route::delete('/user/{id}/delete', [UserController::class, 'deleteUser']);



    Route::get('register', [RegisteredUserController::class, 'create'])
    ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');

});

// Route::get('/me', static fn () => response()->json(['user_name'=>"wasitmirani"]));






