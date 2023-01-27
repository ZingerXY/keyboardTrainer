<?php

namespace App\Http\Controllers\Api;
use App\Models\Statistics;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\StatsResource;


class StatsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $stats = StatsResource::collection( Statistics::orderBy('dial_speeds','DESC')->get() );
        $avg_dial_speeds = Statistics::avg('dial_speeds') ;
        $avg_accuracy = Statistics::avg('accuracy') ;
        $avg_number_of_errors = Statistics::avg('number_of_errors') ;

        return response()->json([
            'status' => true,
            'avg_dial_speeds' => round($avg_dial_speeds),
            'avg_accuracy' => round($avg_accuracy),
            'avg_number_of_errors' => round($avg_number_of_errors),
            'stats' => $stats,
        ]);
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new StatsResource(Statistics::findOrFail($id)); 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
