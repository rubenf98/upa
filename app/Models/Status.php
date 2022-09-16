<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    use HasFactory;
    protected $fillable = ["name"];

    public function transactions()
    {
        return $this->belongsToMany(Transaction::class, 'transaction_has_statuses', 'status_id')->latest();
    }
}
