<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ExportController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\backend\user\UserController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\backend\order\OrderController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\backend\product\ProductController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\backend\product\CategoryController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;

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
    Route::post('/upload-products',[ProductController::class,'uploadProduct']);
    Route::get('/categories-list', [CategoryController::class,'categoriesList']);
    Route::get('/orders',[OrderController::class,'index']);
    Route::post('/order',[OrderController::class,'store']);
    Route::get('/order/{uuid}',[OrderController::class,'orderDetails']);
    Route::get('/order-status/{uuid}',[OrderController::class,'updateStatus']);
    Route::post('/order-cancel/{uuid}',[OrderController::class,'cancelOrder']);
    Route::get('/order-details/{uuid}', [OrderController::class, 'orderDetails']);
    Route::put('/update-address/{uuid}', [OrderController::class, 'updateAddress']);

    Route::get('/orders-pick-list', [OrderController::class, 'ordersPickList']);

    Route::get('/customers',[UserController::class,'customers']);
    Route::put('/customer/{id}/toggle-status', [UserController::class, 'toggleUserStatus']);
    Route::get('/users', [UserController::class, 'index']);
    Route::delete('/user/{id}/delete', [UserController::class, 'destroy']);
    Route::post('/user/{id}/update', [UserController::class, 'update']);
    Route::post('/user', [UserController::class,'store']);
    Route::get('/auth-user', [UserController::class,'authUser']);
    Route::post('/update-password', [UserController::class,'updatePassword']);
    Route::post('/update-timestamp',[SettingController::class,'updateTimestamp']);

    Route::get('/export-orders',[ExportController::class,'exportOrders']);
    Route::get('/export-by-order-items',[ExportController::class,'exportByOrderItems']);







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


Route::prefix('auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
});

Route::prefix('v1')->group(function () {

    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/order',[OrderController::class, 'store']);
        Route::get('/my-orders',[OrderController::class, 'myOrders']); 
        Route::get('/order/{uuid}',[OrderController::class, 'orderDetails']);
        Route::get('/me',[UserController::class,'currentUser']);

    });

    // Route::get('/orders',[OrderController::class, 'index']);

  
    Route::get('/products', [ProductController::class,'getProductsList']);

    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('forgot-password', [AuthController::class, 'forgotPassword']);

    Route::post('reset-password', [AuthController::class, 'resetPassword']);
       

});




