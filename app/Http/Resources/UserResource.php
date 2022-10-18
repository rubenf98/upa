<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'email' => $this->email,
            'name' => $this->name,
            'courses' => $this->courses()->wherePivot('expire', '>', Carbon::now())->get(),
            'ebooks' => $this->ebooks,
            'roles' => $this->roles,
            'created_at' => (string) $this->created_at,
            'email_verified_at' => (string) $this->email_verified_at
        ];
    }
}
