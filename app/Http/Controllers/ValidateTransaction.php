<?php

namespace App\Http\Controllers;

use App\Http\Resources\TransactionResource;
use App\Mail\ValidationEmail;
use App\Models\Transaction;
use App\Models\TransactionHasItem;
use App\Models\User;
use App\Models\UserHasItem;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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
        
        $user = User::find($transaction->user_id);
        Mail::to($user->email)->queue(new ValidationEmail());

        return new TransactionResource($transaction);
    }
}
