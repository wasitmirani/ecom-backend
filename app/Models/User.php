<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Activitylog\Models\Activity;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Models\Permission;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable,HasRoles, SoftDeletes;
    protected array $guard_name = ['api', 'web'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function getPermissions($request=null){
        return Permission::orderBy('name','asc')->get();
    }

    public function getRoles($request=null){

        return Role::orderBy('name','asc')->get();
    }
    public function generateUserName($name){
        $username = Str::lower(Str::slug($name));
        if(User::where('user_name', '=', $username)->exists()){
            $uniqueUserName = $username.'-'.Str::lower(Str::random(4));
            $username = $this->generateUserName($uniqueUserName);
        }
        return $username;
    }

    public function getUsers($request,$is_paginate=true){
        $query=request('query');
        $users= User::latest();
        $users= $users->with('client','roles','permissions')->withTrashed();

        if(!empty( $query)){
            $users= $users->where('email', 'like', '%'.$query. '%');
        }

        if($is_paginate){
            $users=$users->paginate($request->per_page ?? (int)env('PER_PAGE'));
        }else {
            $users=$users->get();
        }

      return $users;
    }
    public function activity()
    {
        return $this->morphMany(Activity::class, 'causer');
    }


}
