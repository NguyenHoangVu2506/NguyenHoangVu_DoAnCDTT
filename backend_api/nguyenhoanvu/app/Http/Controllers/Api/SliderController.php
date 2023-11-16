<?php

namespace App\Http\Controllers\Api;
use App\Models\Slider;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    /*lay danh sach*/
  public function index(){
    $sliders = Slider::where('status','!=',0)->orderBy('created_at','desc')->get();
        $count_slider = count($sliders);
        $count_trash = Slider::where('status','=',0)->count();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'sliders'=>$sliders,'count_slider'=>$count_slider,'count_trash'=>$count_trash],200);
}
public function show($id)
    {

        $Slider = Slider::find($id);

        return response()->json(

            ['success' => true, 'message' => 'tai du lieu thanh cong', 'slider' => $Slider],

            200

        );
    }
    //Post- them store
    public function store(Request $request)
    {
        $Slider = new Slider();
        $Slider->name = $request->name; 
        $Slider->link = $request->link; 
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $Slider->slug . '.' . $extension;
                $Slider->image = $filename;
                $files->move(public_path('images/slider'), $filename);
            }
        }
        $Slider->description = $request->description;
        $Slider->position = $request->position; 
        $Slider->created_at = date('Y-m-d H:i:s');
        $Slider->created_by = 1;
        $Slider->status = $request->status; //form
        $Slider->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thanh cong', 'sliders' => $Slider],
            201
        );
    }
    //Slider-update
    public function update(Request $request, $id)
    {

        $Slider = Slider::find($id);

        $Slider->name = $request->name; 
        $Slider->link = $request->link; 
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $Slider->slug . '.' . $extension;
                $Slider->image = $filename;
                $files->move(public_path('images/slider'), $filename);
            }
        }
        $Slider->description = $request->description;

        $Slider->position = $request->position; 
        $Slider->created_at = date('Y-m-d H:i:s');
        $Slider->created_by = 1;
        $Slider->status = $request->status; //form        $Slider->status = $request->status; //form
        $Slider->save(); //lưu vào Csdl

        return response()->json(

            ['success' => true, 'message' => 'Thanh cong', 'sliders' => $Slider],

            200

        );
    }
    //xoa
    public function destroy($id)
    {
        $Slider = Slider::find($id);
        if ($Slider == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'sliders' => null],
                404
            );
        }
        $Slider->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'sliders' => $Slider], 200);

    }

    public function slider_list($position)
    {
        $args = [
            ['position', '=', $position],
            ['status', '=', 1]
        ];
        $sliders = Slider::where($args)
            ->orderBy('sort_order', 'ASC')
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'sliders' => $sliders
            ],
            200
        );
    }
    public function trash()
    {
        $trash = Slider::where('status','=',0)->orderBy('updated_by', 'desc')->get();
        $count_trash = Slider::where('status','=',0)->count();
        return response()->json(['success' => true,'message' =>'tai thanh cong','trash'=>$trash,'count_trash'=>$count_trash]);
    }
    public function status(string $id)
    {
        $slider =Slider::find($id);
        if($slider==null)
        {
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'Slider' => null],404
            );
        }
        $slider->status=($slider->status==1)? 2:1;
        $slider->updated_at=date('Y-m-d H:i:s');
        $slider->update_by= Auth::id()?? 1;
        $slider->save();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'sliders' => $slider],
            200
        );
    }
    public function deleteTrash(string $id)
    {
        $slider = Slider::find($id);
        if($slider == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy bài viết !']);
        }
        // $count_post = Post::where('post_id','=',$id)->count();
        // if($count_post > 0){
        //     return response()->json(['success' => false, 'message' =>'Chủ đề  đã có bài viết không thể xóa !']);
        // }
        $slider->status = 0;
        $slider->updated_at = date('Y-m-d H:i:s');
        $slider->save();
        return response()->json(['success' => true, 'message' =>'Đã đưa bài viết vào thùng rác !']);
    }
    public function RescoverTrash($id){
        $slider = Slider::find($id);
        if($slider == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy bài viết !']);
        }
        $slider->status = 2;
        $slider->updated_at = date('Y-m-d H:i:s');
        $slider->save();
        return response()->json(['success' => true, 'message' =>'Phục hồi thành công !']);
    }

}
