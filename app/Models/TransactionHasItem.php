<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransactionHasItem extends Model
{
    protected $fillable = ['transaction_id', 'transactionable_id', 'transactionable_type'];
    use HasFactory;
}
