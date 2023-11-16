<?php

namespace App\Http\Controllers\Api;
use App\Models\Post;
use App\Models\Topic;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\support\Str;


class PostController extends Controller
{
  /*lay danh sach*/
  public function index( $limit, $page = 1){
    $Posts = Post::where('status','=',1 )->get();
    $end_page = 1;
        if (count($Posts) > $limit) {
            $end_page = ceil(count($Posts) / $limit);
        }
    $count = count($Posts);
    $count_trash = Post::where('status','=',0)->count();
    $offset = ($page - 1) * $limit;
    $Posts = Post::where('status', 1)
        ->orderBy('created_at', 'DESC')
        ->offset($offset)
        ->limit($limit)
        ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'posts' => $Posts,
                'count'=>$count,
                'count_trash'=>$count_trash,
                "end_page" => $end_page
            ],
            200
        );
    // return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'posts'=>$Posts,'count'=>$count,'count_trash'=>$count_trash],200);
}
    public function show($id)
    {

        $Post = Post::find($id);

        return response()->json(

            ['success' => true, 'message' => 'tai du lieu thanh cong', 'posts' => $Post],

            200

        );
    }
    //Post- them store
    public function store(Request $request)
    {
        $Post = new Post();
        $Post->topic_id = $request->topic_id; //form
        $Post->title = $request->title; //form
        $Post->slug = Str::of($request->title)->slug('-');
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $Post->slug . '.' . $extension;
                $Post->image = $filename;
                $files->move(public_path('images/post'), $filename);
            }
        }
        $Post->detail = $request->detail; //form
        $Post->type = $request->type; //form
        $Post->description = $request->description; //form

        $Post->metakey = $request->metakey; //form
        $Post->metadesc = $request->metadesc; //form
        $Post->created_at = date('Y-m-d H:i:s');
        $Post->created_by = 1;
        $Post->status = $request->status; //form
        $Post->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thanh cong', 'posts' => $Post],
            201
        );
    }
    //Post-update
    public function update(Request $request, $id)
    {

        $Post = Post::find($id);
        $Post->topic_id = $request->topic_id; //form
        $Post->title = $request->title; //form
        $Post->slug = Str::of($request->title)->slug('-');
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $Post->slug . '.' . $extension;
                $Post->image = $filename;
                $files->move(public_path('images/post'), $filename);
            }
        }        $Post->detail = $request->detail; //form
        $Post->type = $request->type; //form        
        $Post->description = $request->description; //form

        $Post->metakey = $request->metakey; //form
        $Post->metadesc = $request->metadesc; //form
        $Post->created_at = date('Y-m-d H:i:s');
        $Post->created_by = 1;
        $Post->status = $request->status; //form
        $Post->save(); //lưu vào Csdl

        return response()->json(

            ['success' => true, 'message' => 'Thanh cong', 'posts' => $Post],

            200

        );
    }
    //xoa
    public function destroy($id)
    {
        $Post = Post::find($id);
        if ($Post == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'posts' => null],
                404
            );
        }
        $Post->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'posts' => $Post], 200);

    }
    //Lấy ra bài viết mới nhất
    function post_list( $limit)
    {
        $args = [
            ['status', '=', 1]
        ];
        $posts = Post::where($args)
            ->orderBy('created_at', 'DESC')
            -> limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'posts' => $posts
            ],
            200
        );
    }
    public function post_all($limit, $page = 1)
    {
        $offset = ($page - 1) * $limit;
        $posts = Post::where('status', 1)
            ->orderBy('created_at', 'DESC')
            ->offset($offset)
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'posts' => $posts
            ],
            200
        );
    }
    // public function post_topic($limit, $page = 1,$topic_id)
    // {
        
    //     $args_cat1 = [
    //         ['parent_id', '=', $topic_id + 0],
    //         ['status', '=', 1]
    //     ];
    //     $posts = Post::where($args_cat1)
    //     ->orderBy('created_at', 'DESC')
    //     ->get();
    //     $end_page = 1;
    //     if (count($posts) > $limit) {
    //         $end_page = ceil(count($posts) / $limit);
    //     }
    //     $listid = array();
    //     array_push($listid, $topic_id + 0);

    //     $list_category1 = Topic::where($args_cat1)->get();
    //     if (count($list_category1) > 0) {
    //         foreach ($list_category1 as $row1) {
    //             array_push($listid, $row1->id);
    //             $args_cat2 = [
    //                 ['parent_id', '=', $row1->id],
    //                 ['status', '=', 1]
    //             ];
    //             $list_category2 = Topic::where($args_cat2)->get();
    //             if (count($list_category2) > 0) {
    //                 foreach ($list_category2 as $row2) {
    //                     array_push($listid, $row2->id);
    //                 }
    //             }
    //         }
    //     }
    //     $offset = ($page - 1) * $limit;
    //     $posts = Post::where('status', 1)
    //         ->whereIn('topic_id', $listid)
    //         ->orderBy('created_at', 'DESC')
    //         ->offset($offset)
    //         ->limit($limit)
    //         ->get();
    //     return response()->json(
    //         [
    //             'success' => true,
    //             'message' => 'Tải dữ liệu thành công',
    //             'posts' => $posts,
    //             "end_page" => $end_page
    //         ],
    //         200
    //     );
    // }
    public function post_topic( $limit, $page = 1,$topic_id)
    {
        $arg = [
            ['topic_id', '=', $topic_id],
            ['status', '=', 1]
        ];
        $posts = Post::where($arg)
            ->orderBy('created_at', 'DESC')
            ->get();

        $end_page = 1;
        if (count($posts) > $limit) {
            $end_page = ceil(count($posts) / $limit);
        }

        $listid = array();
        array_push($listid, $topic_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $topic_id + 0],
            ['status', '=', 1]
        ];
        $list_category1 = Topic::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Topic::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $offset = ($page - 1) * $limit;
        $posts = Post::where('status', 1)
            ->whereIn('topic_id', $listid)
            ->orderBy('created_at', 'DESC')
            ->offset($offset)
            ->limit($limit)
            ->get();


        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'posts' => $posts,
                "end_page" => $end_page
            ],
            200
        );
    }

    public function post_detail($slug)
    {
        $post=Post::where([['slug','=',$slug],['status','!=',2]])->first();
        if ($post==null)
        {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'không tìm thấy dữ liệu',
                    'post' => $post
                ],
                404
            ); 
        }
        $listid = array();
            array_push($listid, $post->topic_id);
            $args_cat1 = [
                ['parent_id', '=',$post->topic_id],
                ['status', '!=', 2]
            ];
            $list_category1 = Topic::where($args_cat1)->get();
            if (count($list_category1) > 0) {
                foreach ($list_category1 as $row1) {
                    array_push($listid, $row1->id);
                    $args_cat2 = [
                        ['parent_id', '=', $row1->id],
                        ['status', '!=', 2]
                    ];
                    $list_category2 = Topic::where($args_cat2)->get();
                    if (count($list_category2) > 0) {
                        foreach ($list_category2 as $row2) {
                            array_push($listid, $row2->id);
                        }
                    }
                }
            }
        $post_other=Post::where([['id','!=',$post->id],['status','!=',2]])
        ->whereIn('topic_id',$listid)
        ->orderBy('created_at','DESC')
        ->limit(8)
        ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'post' => $post,
                'post_other'=>$post_other,
            ],
            200
        );
    }
    public function trash()
    {
        $posts = Post::where('status','=',0)
            ->select('id','title','slug','status','description')
            ->orderBy('created_at')
            ->get();
            $count_all=Post::count();
            $count_trash=Post::where('status','=',0)->count();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'trash'=>$posts, $count_all,$count_trash],200);
    }
    public function status(string $id)
    {
        $post =Post::find($id);
        if($band==null)
        {
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'posts' => null],404
            );
        }
        $post->status=($post->status==1)? 2:1;
        $post->updated_at=date('Y-m-d H:i:s');
        $post->update_by= Auth::id()?? 1;
        $post->save();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'posts' => $post],
            200
        );
    }
    public function deleteTrash(string $id)
    {
        $post = Post::find($id);
        if($post == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy bài viết !']);
        }
        $post->status = 0;
        $post->updated_at = date('Y-m-d H:i:s');
        $post->save();
        return response()->json(['success' => true, 'message' =>'Đã đưa bài viết vào thùng rác !']);
    }
    public function RescoverTrash($id){
        $post = Post::find($id);
        if($post == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy bài viết !']);
        }
        $post->status = 2;
        $post->updated_at = date('Y-m-d H:i:s');
        $post->save();
        return response()->json(['success' => true, 'message' =>'Phục hồi thành công !']);
    }
    public function getPageAll(){
        $agr = [
            ['status','=',3],
            ['type','=','page']
        ];
        $page = Post::where($agr)->orderBy('created_at','desc')->get();
        $count_page = count($page);
        $agr1 = [
            ['status','=',0],
            ['type','=','page']
        ];
        $count_trash = Post::where($agr1)->count();
        return response()->json(['success' => true,'message' =>'tai thanh cong','page'=>$page,'count_trash'=>$count_trash,'count_page'=>$count_page]);
    }
}
