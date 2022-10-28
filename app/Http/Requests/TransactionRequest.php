<?php

namespace App\Http\Requests;

use App\Models\Course;
use App\Models\Ebook;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class TransactionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if ($this->header('Authorization'))
            return auth()->user()->id;
    }

    protected function prepareForValidation()
    {
        $price = 0;
        foreach ($this->items as $item) {
            if ($item['type'] == "App\Models\Ebook") {
                $ebook = Ebook::find($item['id']);
                $price += $ebook->price;
            } else if ($item['type'] == "App\Models\Course") {
                $course = Course::find($item['id']);
                $price += $course->price;
            }
        }

        $this->merge([
            'user_id' => auth()->user()->id,
            'price' => $price,
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => 'required|integer|exists:users,id',
            'price' => 'required|integer|min:2',
            'items' => 'required|array|min:1',
            'items.*.type' => 'required|string',
            'items.*.id' => 'required|integer',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'errors' => $validator->errors()
        ], 422));
    }
}
