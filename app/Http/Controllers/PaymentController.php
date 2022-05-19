<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

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

        //Data gera erro interno servidor
        // $date = Carbon::now();
        // $end_date = $date->addDays(2);

        $response = Http::acceptJson()->withHeaders([
            'Content-Type' => 'application/json',
        ])->post('https://sandbox.eupago.pt/clientes/rest_api/multibanco/create', [
            'chave' => env('EUPAGO_APIKEY', false),
            'valor' => $value,
            'per_dup' => '0',
            // 'data_fim' => $end_date->toDateString(),

        ]);

        return $response;
    }

    //Paypal
    public function paypalProcessTransaction(Request $request)
    {
        $value = 2;

        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $paypalToken = $provider->getAccessToken();

        $response = $provider->createOrder([
            "intent" => "CAPTURE",
            "application_context" => [
                "return_url" => route('successTransaction'),
                "cancel_url" => route('cancelTransaction'),
            ],
            "purchase_units" => [
                0 => [
                    "amount" => [
                        "currency_code" => "EUR",
                        "value" => $value
                    ]
                ]
            ]
        ]);

        if (isset($response['id']) && $response['id'] != null) {

            // redirect to approve href
            foreach ($response['links'] as $links) {
                if ($links['rel'] == 'approve') {
                    return redirect()->away($links['href']);
                }
            }
            return response()->json(['error' => 'Something went wrong.']);

            return redirect('/')
                ->with('error', 'Something went wrong.');

        } else {
            return response()->json(['error' => $response['message'] ?? 'Something went wrong.']);
            return redirect('/')
                ->with('error', $response['message'] ?? 'Something went wrong.');
        }
    }

    public function paypalSuccessTransaction(Request $request)
    {
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $provider->getAccessToken();
        $response = $provider->capturePaymentOrder($request['token']);

        if (isset($response['status']) && $response['status'] == 'COMPLETED') {
            return redirect('/')
                ->with('success', 'Transaction complete.');
        } else {
            return redirect('/')
                ->with('error', $response['message'] ?? 'Something went wrong.');
        }
    }

    /**
     * cancel transaction.
     *
     * @return \Illuminate\Http\Response
     */
    public function paypalCancelTransaction(Request $request)
    {
        return redirect('/')
            ->with('error', $response['message'] ?? 'You have canceled the transaction.');
    }
}
