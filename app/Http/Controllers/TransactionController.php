<?php

namespace App\Http\Controllers;

use App\Http\Requests\TransactionRequest;
use App\Http\Resources\TransactionResource;
use App\Mail\TransactionMail;
use App\Models\Transaction;
use App\Models\TransactionHasItem;
use App\Models\UserHasItem;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\Console\Output\ConsoleOutput;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->header('Authorization')) {
            $role = auth()->user()->roles()->first();
            if ($role->name === 'admin') {
                return TransactionResource::collection(Transaction::latest()->paginate(10));
            } else if ($role->name === 'client') {
                return TransactionResource::collection(Transaction::where('user_id', auth()->user()->id)->latest()->paginate(5));
            }
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TransactionRequest $request)
    {

        $validator = $request->validated();

        DB::beginTransaction();
        try {
            $record = Transaction::create($validator);

            $record->statuses()->attach(1);

            foreach ($validator['items'] as $item) {

                $existingItem = UserHasItem::where('user_id', $validator['user_id'])
                    ->where('userable_id', $item['id'])->where('userable_type', $item['type'])
                    ->where('expire', '>', Carbon::now())->get();


                if (!$existingItem->count()) {
                    TransactionHasItem::create([
                        'transaction_id' => $record->id,
                        'transactionable_id' => $item['id'],
                        'transactionable_type' => $item['type'],
                    ]);
                }


                // UserHasItem::create([
                //     'user_id' => $validator['user_id'],
                //     'userable_id' => $item['id'],
                //     'userable_type' => $item['type'],
                //     'expire' => $item['type'] == "App\Models\Course" ? Carbon::now()->addYear()->toDateString() : null,
                // ]);

                DB::commit();
            }

            return new TransactionResource($record);
        } catch (\Throwable $th) {
            DB::rollBack();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function show(Transaction $transaction)
    {
        return new TransactionResource($transaction);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Transaction $transaction)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $storagePath = Storage::disk('local')->put("proof/", $file);
            $storageName = basename($storagePath);

            $transaction->proof = $storageName;
            $transaction->save();
            $transaction->statuses()->attach(2);
        }

        Mail::to("geral@unidospelaatividade.pt")->queue(new TransactionMail());
        return new TransactionResource($transaction);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transaction $transaction)
    {
        $transaction->delete();

        return response()->json(null, 204);
    }
}
