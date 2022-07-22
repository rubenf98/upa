<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Course extends Model
{
    use HasFactory;

    protected $appends = ['bought'];

    public function getBoughtAttribute($user)
    {

        return auth()->user()->courses->contains($this->id);
    }

    public function contents()
    {
        return $this->hasMany(Content::class);
    }
    public function users()
    {
        return $this->belongsToMany(User::class, 'user_has_courses');
    }
    protected $fillable = [
        'title',
        'thumbnail'
    ];
}
