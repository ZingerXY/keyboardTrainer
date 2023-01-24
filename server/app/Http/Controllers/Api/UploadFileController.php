<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\File;

class UploadFileController extends Controller
{
    private $userAvatarsDir = 'user_avatar';

    public function saveFile(Request $request) {
        $file = $request->file('image');
        $user_id = $request->user_id;

        if (!$file) {
            return new Response('file not sended', 502);
        }

        try {
            $file->move(public_path() . "/{$this->userAvatarsDir}", "avatar_$user_id.png");
        } catch (\Throwable $e){
            return new Response($e->getMessage());
        }

        return new Response('ok');
    }


    public function getUrlFile(Request $request) {
        $user_id = $request->user_id;

        return (File::exists(public_path() . "/$this->userAvatarsDir/avatar_$user_id.png"))
            ? json_encode(new Response(url("/{$this->userAvatarsDir}/avatar_$user_id.png")))
            : json_encode('./img/avatar_default.png');
    }
}