<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\File;

class UploadFileController extends Controller
{
    private $userAvatarsDir = '\user_avatar';

    public function saveFile(Request $request) {
        $file = $request->file('image');

        if (!$file) {
            return new Response('file not sended', 502);
        }

        // Здесь в последующем добавится id пользователя
        try {
            $file->move(public_path() . $this->userAvatarsDir, "avatar.png");
        } catch (\Throwable $e){
            return new Response($e->getMessage());
        }

        return new Response('ok');
    }


    public function getUrlFile(Request $request) {
        return (File::exists(public_path() . $this->userAvatarsDir .'/avatar.png'))
            ? new Response(url('user_avatar/avatar.png'))
            : './img/avatar_default.png';
    }

}