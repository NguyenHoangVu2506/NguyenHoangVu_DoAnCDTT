<?php

namespace App\Http\Controllers\Api;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\support\Str;

// const{}=require()
use App\Http\Middleware\jwt;

class UserController extends Controller
{
public function index($roles){
    $arg = [
        ['roles','=',$roles],
        ['status','!=',0]
    ];
    $users = User::where($arg)->orderBy('created_at','desc')->get();
    $count_user = count($users);
    $arg1 = [
        ['roles','=',$roles],
        ['status','=',0]
    ];
    $count_trash = User::where($arg1)->count();
    return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'users'=>$users,'count_trash'=>$count_trash,'count_user'=>$count_user],200);
}

public function show($id)
{

    $User = User::find($id);

    return response()->json(

        ['success' => true, 'message' => 'tai du lieu thanh cong', 'user' => $User],

        200

    );
}
//Post- them store
public function store(Request $request)
{
    $User = new User();
    $User->name = $request->name; 
    $User->email = $request->email; 
    $User->phone = $request->phone; 
    $User->gender = $request->gender; 
    $files = $request->image;
    if ($files != null) {
        $extension = $files->getClientOriginalExtension();
        if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
            $filename = $User->name . '.' . $extension;
            $User->image = $filename;
            $files->move(public_path('images/user'), $filename);
        }
    }
    $User->username = $request->username; 
    $User->password = $request->password; 
    $User->address = $request->address; 
    $User->roles = $request->roles; 
    $User->created_at = date('Y-m-d H:i:s');
    $User->created_by = 1;
    $User->status = $request->status; //form
    $User->save(); //lưu vào Csdl
    return response()->json(
        ['success' => true, 'message' => 'Thanh cong', 'users' => $User],
        201
    );
}
//User-update
public function update(Request $request, $id)
{

    $User = User::find($id);
    $User->name = $request->name; 
    $User->email = $request->email; 
    $User->phone = $request->phone; 
    $User->gender = $request->gender; 

    $files = $request->image;
    if ($files != null) {
        $extension = $files->getClientOriginalExtension();
        if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
            $filename = $User->name . '.' . $extension;
            $User->image = $filename;
            $files->move(public_path('images/user'), $filename);
        }
    }
    $User->username = $request->username; 
    $User->password = $request->password; 
    $User->address = $request->address; 
    $User->roles = $request->roles; 
    $User->created_at = date('Y-m-d H:i:s');
    $User->created_by = 1;
    $User->status = $request->status; //form
    $User->save(); //lưu vào Csdl

    return response()->json(

        ['success' => true, 'message' => 'Thanh cong', 'users' => $User],

        200

    );
}
//xoa
public function destroy($id)
{
    $User = User::find($id);
    if ($User == null) {
        return response()->json(
            ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'users' => null],
            404
        );
    }
    $User->delete();
    return response()->json(['message' => 'Thanh cong', 'success' => true, 'users' => $User], 200);

}
public function AddUser(Request $request){
    $User = new User();
    $User->name = $request->name; 
    $User->email = $request->email; 
    $User->phone = $request->phone; 
    $User->gender = $request->gender; 
    // $files = $request->image;
    // if ($files != null) {
    //     $extension = $files->getClientOriginalExtension();
    //     if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
    //         $filename = $User->name . '.' . $extension;
    //         $User->image = $filename;
    //         $files->move(public_path('images/user'), $filename);
    //     }
    // }
    $User->username = $request->username; 

    $User->password = $request->password; 
    $User->address = $request->address; 
    $User->image = $request -> image;
    $User->roles = $request->roles;
    $User->created_at = date('Y-m-d H:i:s');
    $User->created_by = 1;
    $User->status = $request->status; 
    $User->save();
    return response()->json(['success' => true, 'message' => 'Đăng kí thành công', 'data' => $User],201); 
}
//ktra login
public function Login(Request $request){
    $arg = [
        ['email','=',$request->email],
        ['password','=',$request->password],
        ['status','=',1]
    ];
    $user = User::where($arg) -> first();
    if(($user) !=null){
        return response()->json(['success' => true,'message'=>'Đăng nhập thành công', 'data' => $user],200);
    }
    else{
        return response()->json(['success' => false,'message'=>'Đăng nhập thất bại', 'data' => null],404);
    }
}
// public function Login(Request $request)
//     {
//         $email = $request->input('email');
//         $password = $request->input('password');
    
//         if (empty($email) || empty($password)) {
//             return response()->json([
//                 'success' => false,
//                 'message' => 'Missing inputs'
//             ], 400);
//         }
    
//         $user = User::where('email', $email)->first();
    
//         if ($user && $user->isCorrectPassword($password) && $user->status == 2) {
//             $userData = $user->toArray();
//             unset($userData['password'], $userData['roles']);
    
//             return response()->json([
//                 'success' => true,
//                 'message' => 'Đăng nhập thành công',
//                 'data' => $userData
//             ], 200);
//         } else {
//             return response()->json([
//                 'success' => false,
//                 'message' => 'Đăng nhập thất bại',
//                 'data' => null
//             ], 404);
//         }
// }
public function trash($roles)
    {
        $agr = [
            ['roles','=',$roles],
            ['status','=',0]    
        ];
        $trash = User::where($agr)->orderBy('updated_by', 'desc')->get();
        $count_trash = count($trash);
        return response()->json(['success' => true,'message' =>'tai thanh cong','trash'=>$trash,'count_trash'=>$count_trash]);
}
    public function status(string $id)
    {
        $user =User::find($id);
        if($user==null)
        {
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'user' => null],404
            );
        }
        $user->status=($user->status==1)? 2:1;
        $user->updated_at=date('Y-m-d H:i:s');
        $user->update_by= Auth::id()?? 1;
        $user->save();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'users' => $topic],
            200
        );
    }
    public function deleteTrash(string $id)
    {
        $user = User::find($id);
        if($user == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy bài viết !']);
        }
        $user->status = 0;
        $user->updated_at = date('Y-m-d H:i:s');
        $user->save();
        return response()->json(['success' => true, 'message' =>'Đã đưa tài khoản vào thùng rác !']);
    }
    public function RescoverTrash($id){
        $user = User::find($id);
        if($user == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy bài viết !']);
        }
        $user->status = 2;
        $user->updated_at = date('Y-m-d H:i:s');
        $user->save();
        return response()->json(['success' => true, 'message' =>'Phục hồi thành công !']);
    }

}
