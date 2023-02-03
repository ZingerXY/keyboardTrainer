<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StatsResource extends JsonResource
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
            'player_id' => $this->player_id,
            'task_id' => $this->task_id,
            'time' => $this->time,
            'typed_characters' => $this->typed_characters,
            'number_of_errors' => $this->number_of_errors,
            'Accuracy' => $this->Accuracy,
            'dial_speeds' => $this->dial_speeds,
            'created_at' => $this->created_at,
        ];
    }
}
