<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    public function contents()
    {
        return $this->hasMany(Content::class);
    }
    public function users()
    {
        return $this->belongsToMany(User::class, 'users_has_courses');
    }
    protected $fillable = [
        'title',
        'thumbnail'
    ];
}