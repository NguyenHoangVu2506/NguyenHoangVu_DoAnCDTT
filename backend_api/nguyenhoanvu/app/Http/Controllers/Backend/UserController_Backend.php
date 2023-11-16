<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class UserController_Backend extends Controller
{

    // public function login_admin(Request $request)
    // {
    //     if ($request->email_login) {
    //         $check_email = User::where([['email', '=', $request->email_login], ['roles', '=', 'admin'], ['password', '=', $request->password_login]])->get();

    //         if (count($check_email) === 0) {
    //             return response()->json(
    //                 ['kiemtra' => false, 'message' => 'Email này chưa từng được đăng ký trước đây!'],
    //                 200
    //             );
    //         } else {

    //             return response()->json(
    //                 ['kiemtra' => true, 'message' => 'Đăng nhập thành công !', "admin" => $check_email],
    //                 200
    //             );


    //         }
    //     } else {
    //         return response()->json(
    //             ['kiemtra' => false, 'message' => 'email null !', "admin" => null],
    //             200
    //         );
    //     }
    // }
    // public function check_email_admin(Request $request)
    // {
    //     $users = DB::table('user')->where([['email','=', $request->email],['roles','=','nv']])->get();
    //     if (count($users) > 0) {
    //         return response()->json(
    //             ['kiemtra' => true, 'message' => 'Đăng nhập thành công !', "admin" => $users],
    //             200
    //         );
    //     } else {
    //         return response()->json(
    //             ['kiemtra' => false, 'message' => 'Email này chưa từng được đăng ký !', "admin" => null],
    //             200
    //         );
    //     }
    // }

    // public function reset_password_admin(Request $request)
    // {
    //     if ($request->email === null || $request->password_update === null) {
    //         return response()->json(
    //             ['kiemtra' => false, 'message' => 'Đổi mật khẩu không thành công !'],
    //             200
    //         );
    //     } else {
    //         $reset_password = DB::table('user')
    //             ->where('email', $request->email)
    //             ->update(['password' => $request->password_update]);
    //         return response()->json(
    //             ['kiemtra' => true, 'message' => 'Đổi mật khẩu thành công !', "reset_password" => $reset_password],
    //             200
    //         );
    //     }

    // }
    public function login_admin(Request $request){
        $arg = [
            ['email','=',$request->email],
            ['password','=',$request->password],
            ['status','=',1],
            ['roles','=','admin']
        ];
        $user = User::where($arg) -> first();
        if(($user) !=null){
            return response()->json(['success' => true,'message'=>'Đăng nhập thành công', 'data' => $user],200);
        }
        else{
            return response()->json(['success' => false,'message'=>'Đăng nhập thất bại', 'data' => null],404);
        }
    }
}