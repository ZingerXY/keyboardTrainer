<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\StatsController;
use App\Http\Controllers\Api\TasksController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\UploadFileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout']);
Route::post('register', [AuthController::class, 'register']);

Route::apiResources([
    'users' => UserController::class,
    'tasks' => TasksController::class,
    'stats' => StatsController::class,
]);

Route::post('/saveAvatar', [UploadFileController::class, 'saveFile']);
Route::get('/showAvatar', [UploadFileController::class, 'getUrlFile']);
