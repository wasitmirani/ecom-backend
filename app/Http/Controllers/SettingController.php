<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    //

    public function updateTimestamp(Request $request){

        $setting=Setting::updateOrCreate([

                'start_time'=>$request->start_time,
                'end_time'=>$request->end_time,
                'user_id'=>$request->user()->id,
            ]);
            
        return response()->json(['message' => 'time updated successfully']);
    }
}
