


<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\backend\BackendController;
use App\Http\Controllers\backend\order\OrderController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


require __DIR__.'/auth.php';


Route::get('logout', [AuthenticatedSessionController::class, 'destroy'])
->name('logout');
Route::get('/{any?}',fn()=> redirect('/app/home'));

Route::get('/print/order/{uuid}',[OrderController::class,'orderPrint'])->name('order.print');
Route::get('/app/{any?}', [BackendController::class, 'index'])
    ->where('any', '.*')
    ->middleware('auth')
    ->name('backend.index');
