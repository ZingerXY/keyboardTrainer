<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tasks extends Model
{
    use HasFactory;

    protected $fillable = [
        'task',
        'difficulty',
        'task_description',
        'stats_id',
    ];
   
    public function stats()
    {
        return $this->hasMany(Statistics::class,'task_id'); 
    }
}
