<?php

namespace App\Http\Controllers\Api;
use App\Models\Topic;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TopicController extends Controller
{
   
  /*lay danh sach*/
  public function index(){
    $topics = Topic::where('status','!=',0)->orderBy('created_at','desc')->get();
    $count_cat = count($topics);
    $count_trash = Topic::where('status','=',0)->count();
    return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'topics'=>$topics,'count_cat'=>$count_cat,'count_trash'=>$count_trash],200);

    // $topics = Topic::all();
    // return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'topics'=>$topics],200);
}
public function show($id){
    if(is_numeric($id)){
        $topic = Topic::find($id);
    }
    else{
        $topic = Topic::where('slug','=',$id)->first();
    }
    if ($topic==null){
        return response()->json(
            ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'topics' => null],404
        );
    }
    return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'topics'=>$topic],200);
}
//topic- them store
public function store(Request $request)
{
    $Topic = new Topic();
    $Topic->name = $request->name; //form
    $Topic->slug = Str::of($request->name)->slug('-');
    $Topic->metakey = $request->metakey; //form
    $Topic->sort_order = $request->sort_order; //form
    $Topic->metadesc = $request->metadesc; //form
    $Topic->description = $request->description; //form

    $Topic->created_at = date('Y-m-d H:i:s');
    $Topic->created_by = 1;
    $Topic->status = $request->status; //form
    $Topic->save(); //lưu vào Csdl
    return response()->json(
        ['success' => true, 'message' => 'Thanh cong', 'topics' => $Topic],
        201
    );
}
//Topic-update
public function update(Request $request, $id)
{

    $Topic = Topic::find($id);

    $Topic->name = $request->name; //form
    $Topic->slug = Str::of($request->name)->slug('-');
    $Topic->metakey = $request->metakey; //form
    $Topic->sort_order = $request->sort_order; //form
    $Topic->metadesc = $request->metadesc; //form
    $Topic->description = $request->description; //form
    $Topic->created_at = date('Y-m-d H:i:s');
    $Topic->created_by = 1;
    $Topic->status = $request->status; //form
    $Topic->save(); //lưu vào Csdl

    return response()->json(

        ['success' => true, 'message' => 'Thanh cong', 'topics' => $Topic],

        200

    );
}
//xoa
public function destroy($id)
{
    $Topic = Topic::find($id);
    if ($Topic == null) {
        return response()->json(
            ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'topics' => null],
            404
        );
    }
    $Topic->delete();
    return response()->json(['message' => 'Thanh cong', 'success' => true, 'topics' => $Topic], 200);

}
public function topic_list($parent_id = 0)
    {
        $args = [
            ['parent_id', '=', $parent_id],
            ['status', '=', 1]
        ];
        $Topics = Topic::where($args)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'topics' => $Topics
            ],
            200
        );
    }
    public function trash()
    {
        $topics = Topic::where('status','=',0)
            ->select('id','name','slug','status','description')
            ->orderBy('created_at')
            ->get();
            $count_all=Topic::count();
            $count_trash=Topic::where('status','=',0)->count();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'trash'=>$topics, $count_all,$count_trash],200);
    }
    public function status(string $id)
    {
        $topic =Topic::find($id);
        if($topic==null)
        {
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'topic' => null],404
            );
        }
        $topic->status=($topic->status==1)? 2:1;
        $topic->updated_at=date('Y-m-d H:i:s');
        $topic->update_by= Auth::id()?? 1;
        $topic->save();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'topics' => $topic],
            200
        );
    }
    public function deleteTrash(string $id)
    {
        $topic = Topic::find($id);
        if($topic == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy bài viết !']);
        }
        // $count_post = Post::where('post_id','=',$id)->count();
        // if($count_post > 0){
        //     return response()->json(['success' => false, 'message' =>'Chủ đề  đã có bài viết không thể xóa !']);
        // }
        $topic->status = 0;
        $topic->updated_at = date('Y-m-d H:i:s');
        $topic->save();
        return response()->json(['success' => true, 'message' =>'Đã đưa bài viết vào thùng rác !']);
    }
    public function RescoverTrash($id){
        $topic = Topic::find($id);
        if($topic == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy bài viết !']);
        }
        $topic->status = 2;
        $topic->updated_at = date('Y-m-d H:i:s');
        $topic->save();
        return response()->json(['success' => true, 'message' =>'Phục hồi thành công !']);
    }
}
