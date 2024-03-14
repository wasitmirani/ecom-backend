<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;


class AuthController extends Controller
{
    //

    public function register(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name ?? $request->first_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'user_type'=>'customer',
            'phone'=>$request->phone,
            'first_name'=>$request->first,
            'last_name'=>$request->last,

        ]);

        event(new Registered($user));


        $user->sendEmailVerificationNotification();

        $token = $user->createToken(Str::uuid())->plainTextToken;

        return response(['user' => $user, 'token' => $token]);
    }

public function login(Request $request)
{
    $request->validate([
        'email' => 'required|string|email',
        'password' => 'required|string',
    ]);


    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }


    $token = $user->createToken(Str::uuid())->plainTextToken;

    return response(['user' => $user, 'token' => $token]);
 }
}
