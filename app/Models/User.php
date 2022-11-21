<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    use FiltersRecords;

    public function ebooks()
    {
        return $this->morphedByMany(Ebook::class, 'userable', 'user_has_items');
    }

    public function courses()
    {
        return $this->morphedByMany(Course::class, 'userable', 'user_has_items')->withPivot('expire');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'users_has_roles');
    }
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    protected $fillable = [
        'name',
        'email',
        'password',
        'token'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
