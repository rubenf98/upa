<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;

class PaymentController extends Controller
{
    public function MBWay(Request $request)
    {
        //Ir buscar o valor do serviço à BD
        $value = 2;

        $response = Http::acceptJson()->withHeaders([
            'Content-Type' => 'application/json',
        ])->post('https://sandbox.eupago.pt/clientes/rest_api/mbway/create', [
            'chave' => env('EUPAGO_APIKEY', false),
            'valor' => $value,
            'alias' => $request->payer
        ]);

        return $response;
    }

    public function Multibanco(Request $request)
    {
        //Ir buscar o valor do serviço à BD
        $value = 2;
        $user_email = "aalalmeida13@gmail.com";

        $date = Carbon::now();
        $end_date = $date->addDays(2);

        $response = Http::acceptJson()->withHeaders([
            'Content-Type' => 'application/json',
        ])->post('https://sandbox.eupago.pt/clientes/rest_api/multibanco/create', [
            'chave' => env('EUPAGO_APIKEY', false),
            'valor' => $value,
            'per_dup' => '0',
            'data_fim' => $end_date->toDateString(),
            'email' => $user_email,

        ]);

        return $response;
    }
}
