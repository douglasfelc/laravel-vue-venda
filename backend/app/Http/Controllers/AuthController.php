<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request){

        $token = auth('api')->attempt(
            $request->all(['email', 'password'])
        );

        // Authenticated
        if( $token ){
            return response()->json(['token' => $token]);
        }else{
            return response()->json(['error' => 'Invalid username or password'], 403);
        }

    }

    public function logout(){
        auth('api')->logout();
        return response()->json( ['msg' => 'Successfully logged out'] );
    }

    public function refresh(){
        $token = auth('api')->refresh();
        return response()->json( ['token' => $token] );
    }

    public function me(){
        return response()->json( auth()->user() );
    }
}
