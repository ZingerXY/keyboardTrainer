<?php

namespace App\Http\Controllers\Api;
use App\Models\Tasks;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\TasksResource;
use Illuminate\Support\Facades\DB;
use Spatie\QueryBuilder\QueryBuilder;

class TasksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    // GET api/tasks?filter[difficulty]=1&filter[task_type]=Слова
    // GET api/tasks?filter[lang]=eng&filter[task_type]=База
    //composer require spatie/laravel-query-builder

    public function index()
    {
        $filter = QueryBuilder::for(Tasks::class)
        ->allowedFilters(['difficulty','task_type','lang'])
        ->get();
        return TasksResource::collection($filter);
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
        return new TasksResource(Tasks::findOrFail($id)) ;
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
