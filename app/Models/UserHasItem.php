<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserHasItem extends Model
{
    protected $fillable = ['user_id', 'userable_id', 'userable_type', 'expire'];
    use HasFactory;
}
