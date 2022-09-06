<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ebook extends Model
{
    use HasFactory;

    public function users()
    {
        return $this->morphToMany(User::class, 'user_has_items');
    }
}
