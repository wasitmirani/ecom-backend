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
use Illuminate\Support\Facades\Password;


class AuthController extends Controller
{
    //

    public function register(Request $request)
    {
        $request->validate([
            'first_name' => ['required', 'string', 'max:255'],
            'last_name'=> ['string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'phone'=> ['string','unique:'.User::class],
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

        return response(['status'=>true,'message'=>'user has been register successfuly','user' => $user, 'token' => $token]);
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

    return response(['status'=>true,'message'=>'user login successfuly','user' => $user, 'token' => $token]);
 }

 public function resetPassword(Request $request){
    $request->validate([
        'token' => 'required',
        'email' => 'required|email',
        'password' => ['required', 'confirmed', Rules\Password::defaults()],
    ]);

    // Here we will attempt to reset the user's password. If it is successful we
    // will update the password on an actual user model and persist it to the
    // database. Otherwise we will parse the error and return the response.
    $status = Password::reset(
        $request->only('email', 'password', 'password_confirmation', 'token'),
        function ($user) use ($request) {
            $user->forceFill([
                'password' => Hash::make($request->password),
                'remember_token' => Str::random(60),
            ])->save();

            event(new PasswordReset($user));
        }
    );

    // If the password was successfully reset, we will redirect the user back to
    // the application's home authenticated view. If there is an error we can
    // redirect them back to where they came from with their error message.
    if ($status == Password::PASSWORD_RESET) {
        return redirect()->route('login')->with('status', __($status));
    }

    throw ValidationException::withMessages([
        'email' => [trans($status)],
    ]);
 }


 public function forgotPassword(Request $request){
    $request->validate([
        'email' => 'required|email',
    ]);

    // We will send the password reset link to this user. Once we have attempted
    // to send the link, we will examine the response then see the message we
    // need to show to the user. Finally, we'll send out a proper response.
    $status = Password::sendResetLink(
        $request->only('email')
    );

    if ($status == Password::RESET_LINK_SENT) {
        // 'status', __($status)
        return response()->json(['message'=>'We have emailed your password reset link.']);
    }

    return response()->json(['message'=>'failed response','email' => [trans($status)]]);
 }
}
