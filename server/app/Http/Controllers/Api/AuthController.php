<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $this->validateData($request);
        return $credentials;
    }

    public function register(Request $request)
    {
        $credentials = $this->validateData($request);
        return $credentials;
    }

    public function logout()
    {

    }

    public function validateData($request): array
    {
        return $request->validate([
            'email' => 'required',
            'password' => 'required|min:8',
        ]);
    }
}
