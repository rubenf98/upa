<?php

namespace App\Http\Controllers;

use App\Http\Resources\TransactionResource;
use App\Models\Transaction;
use App\Models\TransactionHasItem;
use App\Models\UserHasItem;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ValidateTransaction extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, Transaction $transaction)
    {
        $transaction->statuses()->attach(3);

        $items = TransactionHasItem::where('transaction_id', $transaction->id)->get();

        foreach ($items as $item) {
            UserHasItem::create([
                'user_id' => $transaction->user_id,
                'userable_id' => $item->transactionable_id,
                'userable_type' => $item->transactionable_type,
                'expire' => $item->transactionable_type == "App\Models\Course" ? Carbon::now()->addYear()->toDateString() : null,
            ]);
        }

        return new TransactionResource($transaction);
    }
}
