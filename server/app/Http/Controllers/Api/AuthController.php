<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $this->validateLogin($request);
        $user = User::whereEmail($request['email'])->first();
        if ($user) {
            if (Hash::check($request['password'], $user->password)) {
                return $user;
            }
        }
        return ['err' => 'Пароль или почта введены неверно'];
    }

    public function register(Request $request)
    {
        $this->validateRegister($request);
        try {
            return User::create([
                'name' => $request['name'],
                'email' => $request['email'],
                'password' => Hash::make($request['password']),
            ]);
        } catch (\Illuminate\Database\QueryException $exception) {
            if ($exception->errorInfo[1] === 1062) {
                return ['err' => 'Пользователь с этой почтой уже существует, попробуйте войти в аккаунт'];
            }
        }
        return ['err' => 'Что-то пошло не так..'];
    }

    public function logout()
    {

    }

    public function validateRegister($request): array
    {
        return $request->validate([
            'name' => 'required|min:3',
            'email' => 'required',
            'password' => 'required|min:8|confirmed',
            'password_confirmation' => 'required|min:8'
        ]);
    }

    public function validateLogin($request): array
    {
        return $request->validate([
            'email' => 'required',
            'password' => 'required|min:8',
        ]);
    }
}
