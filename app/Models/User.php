<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'users_has_roles');
    }
    public function transactions()
    {
        return $this->belongsTo(Transaction::class);
    }
    public function courses()
    {
        return $this->belongsToMany(Course::class, 'users_has_courses');
    }
}