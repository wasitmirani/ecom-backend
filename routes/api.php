<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\product\ProductController;
use App\Http\Controllers\backend\product\CategoryController;

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


// Route::get('/products',)



Route::prefix('/app')->group(function () {

    Route::resource('product', ProductController::class);
    Route::get('/categories-list', [CategoryController::class,'categoriesList']);

});







