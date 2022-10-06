<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'price' => $this->price,
            'proof' => $this->proof,
            'user' => $this->user,
            'statuses' => $this->statuses()->orderBy('pivot_created_at', 'desc')->get(),
            'items' => $this->courses->toBase()->merge($this->ebooks),
            'created_at' => (string) $this->created_at
        ];
    }
}
