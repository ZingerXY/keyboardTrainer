<?php

namespace App\Models;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Statistics extends Model
{
    use HasFactory;

    protected $fillable = [
        'player_id',
        'time',
        'typed_characters',
        'number_of_errors',
        'task_id',
        
    ];
   
}
