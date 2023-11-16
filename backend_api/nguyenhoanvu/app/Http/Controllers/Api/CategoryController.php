<?php

namespace App\Http\Controllers\Api;
use App\Models\Category;
use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\support\Str;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
     /*lay danh sach*/
     public function index(){
        $categorys = Category::where('status','!=',0)->orderBy('created_at','desc')->get();
        $count_cat = count($categorys);
        $count_trash = Category::where('status','=',0)->count();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'categorys'=>$categorys,'count_cat'=>$count_cat,'count_trash'=>$count_trash],200);
    }

    /*lay bang id -> chi tiet */
    public function show($id){
        if(is_numeric($id)){
            $category = Category::find($id);
        }
        else{
            $category = Category::where('slug','=',$id)->first();
        }
        if ($category==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'categorys' => null],404
            );
        }
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'categorys'=>$category],200);
    }

    /* them */
    public function store(Request $request){
        $category = new Category();
        $category->name = $request->name; //form
        $category->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $category->slug . '.' . $extension;
                $category->image = $filename;
                $files->move(public_path('images/category'), $filename);
            }
        }
        $category->description = $request->description; //form
        $category->parent_id = $request->parent_id;//form
        $category->sort_order = $request->sort_order; //form
        $category->metakey = $request->metakey; //form
        $category->metadesc = $request->metadesc; //form
        // $category->position = $request->position; 
        $category->created_at = date('Y-m-d H:i:s');
        $category->created_by = 1;
        $category->status = $request->status; //form
        $category->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thành công', 'categorys' => $category],201); 
    }

    /*update*/
    public function update(Request $request,$id){
        $category = Category::find($id);
        $category->name = $request->name; // form
        $category->slug = Str::of($request->name)->slug('-');
        // $category->image = $request->name;
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $category->slug . '.' . $extension;
                $category->image = $filename;
                $files->move(public_path('images/category'), $filename);
            }
        }
        $category->parent_id = $request->parent_id;
        $category->sort_order = $request->sort_order; //form
        $category->description = $request->description; //form
        $category->metakey = $request->metakey; //form
        $category->metadesc = $request->metadesc; //form
        // $menu->position = $request->position; 
        $category->updated_at = date('Y-m-d H:i:s');
        $category->updated_by = 1;
        $category->status = $request->status; //form
        $category->save(); //Luuu vao CSDL
        return response()->json(['success' => true, 'message' => 'Thành công', 'categorys' => $category],200);
    }
    /* xoa */
    public function destroy($id)
    {
        $category = Category::find($id);
        if ($category == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'categorys' => null],
                404
            );
        }
        $category->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'categorys' => $category], 200);

    }
    // public function category_list($parent_id = 0)
    // {
    //     $args = [
    //         ['parent_id', '=', $parent_id],
    //         ['status', '=', 1]
    //     ];
    //     $category = Category::where($args)
    //         ->orderBy('sort_order', 'ASC')
    //         ->get();
    //     if(count($category))
    //         {
    //             return response()->json(
    //                 [
    //                     'success' => true,
    //                     'message' => 'Tải dữ liệu thành công',
    //                     'categorys' => $category
    //                 ],
    //                 200
    //             );
    //         }
    //     else{
    //         return response()->json(
    //             [
    //                 'success' => false,
    //                 'message' => 'Khong tim thay du lieu',
    //                 'categorys' => null
    //             ],
    //             404
    //         );
    //     }
        
    // }
    public function showslug($slug)
    {
        $category = Category::where([['status', '=', 1], ['slug', '=', $slug]])->first();
        if ($category == null) {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'khong tim thay du lieu',
                    'product' => null
                ],
                404
            );
        }

        return response()->json(
            [
                'success' => true,
                'message' => "tai du lieu thanh cong",
                'categorys' => $category
               
            ],
            200


        );

    }
    public function trash()
    {
        $categorys = Category::where('status','=',0)
            ->select('id','name','slug','status','image')
            ->orderBy('created_at')
            ->get();
            $count_all=Category::count();
            $count_trash=Category::where('status','=',0)->count();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'trash'=>$categorys, $count_all,$count_trash],200);
    }
    public function status(string $id)
    {
        $category =Category::find($id);
        if($band==null)
        {
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'categorys' => null],404
            );
        }
        $category->status=($category->status==1)? 2:1;
        $category->updated_at=date('Y-m-d H:i:s');
        $category->update_by= Auth::id()?? 1;
        $category->save();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'categorys' => $category],
            200
        );
    }
    public function deleteTrash(string $id)
    {
        $category = Category::find($id);
        if($category == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy thương hiệu !']);
        }
        $count_product = Product::where('category_id','=',$id)->count();
        if($count_product > 0){
            return response()->json(['success' => false, 'message' =>'Thương hiệu đã có sản phẩm không thể xóa !']);
        }
        $category->status = 0;
        $category->updated_at = date('Y-m-d H:i:s');
        $category->save();
        return response()->json(['success' => true, 'message' =>'Đã đưa thương hiệu vào thùng rác !']);
    }
    public function RescoverTrash($id){
        $category = Category::find($id);
        if($category == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy thương hiệu !']);
        }
        $category->status = 2;
        $category->updated_at = date('Y-m-d H:i:s');
        $category->save();
        return response()->json(['success' => true, 'message' =>'Phục hồi thành công !']);
    }
    public function category_list()
    {
        $listId = array();
        $category = DB::table('category')->where([['status', '=', 1], ['parent_id', '=', 0]])->get();
        if (count($category) > 0) {
            foreach ($category as $row) {
                $args_cat1 = [
                    ['parent_id', '=', $row->id],
                    ['status', '=', 1]
                ];
                $list_category1 = DB::table('category')->where($args_cat1)->get();
                if (count($list_category1) > 0) {
                    foreach ($list_category1 as $row1) {
                        array_push($listId, $row1->id);
                        $args_cat2 = [
                            ['parent_id', '=', $row1->id],
                            ['status', '=', 1]
                        ];
                        $list_category2 = Category::where($args_cat2)->get();
                        if (count($list_category2) > 0) {
                            foreach ($list_category2 as $row2) {
                                array_push($listId, $row2->id);
                            }
                        }
                    }
                }
            }
        }
        $childrent_cat = DB::table('category')->where('status', 1)->whereIn('id',$listId)->get();

        return response()->json(
            [
                'success' => true,
                'message' => "tai du lieu thanh cong",
                'parent_category' => $category,
                "children_category" => $childrent_cat
            ],
            200


        );

    }
    public function getCategory(){
        $arg = [
            ['status','=',1],
            // ['parent_id','=',0]
        ];
        $categories = Category::where($arg)->orderBy('created_at','desc')->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'categoies'=>$categories],200);
    }
}