<?php

namespace App\Http\Controllers\Api;
use App\Models\Single;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\support\Str;

class SingleController extends Controller
{
    /*lay danh sach*/
  public function index(){
    $singles = Single::all();
    return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'singles'=>$singles],200);
}
public function show($id)
    {

        $Single = Single::find($id);

        return response()->json(

            ['success' => true, 'message' => 'tai du lieu thanh cong', 'singles' => $Single],

            200

        );
    }
    //Post- them store
    public function store(Request $request)
    {
        $Single = new Single();
        $Single->name = $request->name;
        $Single->slug = Str::of($request->name)->slug('-'); 
        $Single->title = $request->title; 
        $Single->detail = $request->detail; 
        $Single->created_at = date('Y-m-d H:i:s');
        $Single->created_by = 1;
        $Single->status = $request->status; //form
        $Single->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thanh cong', 'singles' => $Single],
            201
        );
    }
    //Slider-update
    public function update(Request $request, $id)
    {

        $Single = Single::find($id);
        $Single->name = $request->name; 
        $Single->slug = Str::of($request->name)->slug('-'); 
        $Single->title = $request->title; 
        $Single->detail = $request->detail; 
        $Single->created_at = date('Y-m-d H:i:s');
        $Single->created_by = 1;
        $Single->status = $request->status; //form
        $Single->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thanh cong', 'singles' => $Single],
            201
        );
    }
    //xoa
    public function destroy($id)
    {
        $Single = Single::find($id);
        if ($Single == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'singles' => null],
                404
            );
        }
        $Single->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'singles' => $Single], 200);

    }

    // public function slider_list($position)
    // {
    //     $args = [
    //         ['position', '=', $position],
    //         ['status', '=', 1]
    //     ];
    //     $sliders = Slider::where($args)
    //         ->orderBy('sort_order', 'ASC')
    //         ->get();
    //     return response()->json(
    //         [
    //             'success' => true,
    //             'message' => 'Tải dữ liệu thành công',
    //             'sliders' => $sliders
    //         ],
    //         200
    //     );
    // }
}
