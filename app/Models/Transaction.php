<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    protected $fillable = [
        'price',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function transactionable()
    {
        return $this->morphTo();
    }


    public function ebooks()
    {
        return $this->morphedByMany(Ebook::class, 'transactionable', 'transaction_has_items');
    }

    public function courses()
    {
        return $this->morphedByMany(Course::class, 'transactionable', 'transaction_has_items');
    }

    public function statuses()
    {
        return $this->belongsToMany(Status::class, 'transaction_has_statuses', 'transaction_id')->withTimestamps();
    }
}
