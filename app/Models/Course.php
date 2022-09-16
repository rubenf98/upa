<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Course extends Model
{
    use HasFactory;

    protected $appends = ['bought', 'type'];

    public function getBoughtAttribute()
    {
        return UserHasItem::where('userable_id', $this->id)
            ->where('userable_type', 'App\Models\Course')
            ->where('user_id', auth()->user()->id)
            ->count() > 0;
    }

    public function getTypeAttribute()
    {
        return "course";
    }

    public function contents()
    {
        return $this->hasMany(Content::class);
    }

    public function users()
    {
        return $this->morphToMany(User::class, 'userable', 'user_has_items');
    }

    public function transactions()
    {
        return $this->morphToMany(Transaction::class, 'transactionable', 'transaction_has_items');
    }

    protected $fillable = [
        'title',
        'thumbnail'
    ];
}
