<?php

namespace App\Http\Controllers\backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class BackendController extends Controller
{
    //

    public function index(Request $request){

        if(Auth::user()->user_type == 'admin'){
            
            return view('backend.pages.app');
        }
        else {
            
            Auth::guard('web')->logout();

            $request->session()->invalidate();

            $request->session()->regenerateToken();
            return response()->json(['message'=>'welcome to '.config('app.name')]);
        }
       
    }
}
