<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    // public function index()
    // {

    //     $products = Product::all(); //::where()->orderBy()->get();

    //     return response()->json(

    //         ['success' => true, 'message' => "tai du lieu thanh cong", 'products' => $products],

    //         200

    //     );
    // }
    public function index($limit,$page = 1){
        $count_all = Product::count();
        $count_trash = Product::where('status','=',0)->count();

        $end_page = 1;
        if ($count_all > $limit) {
            $end_page = ceil($count_all / $limit);
        }    
        $offset = ($page - 1) * $limit;

        $products = Product::where('product.status','!=',0)
        ->join('category',"category.id",'=',"product.category_id")
        ->join('brand',"brand.id",'=',"product.brand_id")
        ->select("product.id","product.name", "product.image", "product.slug", "product.status", "product.price", "category.name as categoryname", "brand.name as brandname")->orderBy("product.created_at",'DESC')
        ->offset($offset)->limit($limit)->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'products'=>$products,'count_all'=>$count_all,'count_trash'=>$count_trash,'end_page'=>$end_page],200);
    }

    public function show($id){
        $product = Product::where('product.id','=',$id)
        ->join('category',"category.id",'=',"product.category_id")
        ->join('brand',"brand.id",'=',"product.brand_id")
        ->select("product.*", "category.name as categoryname", "brand.name as brandname")->first();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'products'=>$product],200);
    }

    //Post- them store
    public function store(Request $request)
    {
        $Product = new Product();
        $Product->brand_id = $request->brand_id;
        $Product->category_id = $request->category_id; 
        $Product->name = $request->name; //form
        $Product->slug = Str::of($request->name)->slug('-');
        $Product->price = $request->price; 
        $Product->price_sale = $request->price_sale; 
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $Product->slug . '.' . $extension;
                $Product->image = $filename;
                $files->move(public_path('images/product'), $filename);
            }
        }
        $Product->detail = $request->detail; //form
        $Product->description = $request->description; //form

        $Product->metakey = $request->metakey; //form
        $Product->metadesc = $request->metadesc; //form
   
        $Product->created_at = date('Y-m-d H:i:s');
        $Product->created_by = 1;
        $Product->status = $request->status; //form
        $Product->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thanh cong', 'products' => $Product],
            201
        );
    }
    //Product-update
    public function update(Request $request, $id)
    {

        $Product = Product::find($id);
        $Product->brand_id = $request->brand_id; 
        $Product->category_id = $request->category_id; 
        $Product->name = $request->name; //form
        $Product->slug = Str::of($request->name)->slug('-');
        $Product->price = $request->price; 
        $Product->price_sale = $request->price_sale; 
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $Product->name . '.' . $extension;
                $Product->image = $filename;
                $files->move(public_path('images/product'), $filename);
            }
        }
        $Product->detail = $request->detail; //form
        $Product->metakey = $request->metakey; //form
        $Product->metadesc = $request->metadesc; //form
        $Product->created_at = date('Y-m-d H:i:s');
        $Product->created_by = 1;
        $Product->status = $request->status; //form
        $Product->save(); //lưu vào Csdl

        return response()->json(

            ['success' => true, 'message' => 'thanh cong', 'products' => $Product],

            200

        );
    }
    //xoa
    public function destroy($id)
    {
        $Product = Product::find($id);
        if ($Product == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'product_data' => null],
                404
            );
        }
        $Product->delete();
        return response()->json(['message' => 'Xóa thành công ', 'success' => true, 'product_data' => $Product], 200);

    }
    
    // public function product_home($limit, $category_id = 1)
    // {
    //     $listid = array();
    //     array_push($listid, $category_id + 0);
    //     $args_cat1 = [
    //         ['parent_id', '=', $category_id + 0],
    //         ['status', '=', 1]
    //     ];
    //     $list_category1 = Category::where($args_cat1)->get();
    //     if (count($list_category1) > 0) {
    //         foreach ($list_category1 as $row1) {
    //             array_push($listid, $row1->id);
    //             $args_cat2 = [
    //                 ['parent_id', '=', $row1->id],
    //                 ['status', '=', 1]
    //             ];
    //             $list_category2 = Category::where($args_cat2)->get();
    //             if (count($list_category2) > 0) {
    //                 foreach ($list_category2 as $row2) {
    //                     array_push($listid, $row2->id);
    //                 }
    //             }
    //         }
    //     }
    //     $products = Product::where('status', '=', 1)
    //         ->whereIn('category_id', $listid)
    //         ->orderBy('created_at', 'DESC')->limit($limit)->get();
    //     if(count($products)>0)
    //     {
    //         return response()->json(
    //             [
    //                 'success' => true,
    //                 'message' => 'Tải dữ liệu thành công',
    //                 'products' => $products
    //             ],
    //             200
    //         );
    //     }
    //     else
    //     {
    //         return response()->json(
    //             [
    //                 'success' => false,
    //                 'message' => 'Khong co du lieu',
    //                 'products' => null
    //             ],
    //             200
    //         );
    //     }
            
    // }
    // //Lấy ra tất cả sản phẩm có phân trang
    // public function product_all($limit, $page = 1)
    // {
    //     $offset = ($page - 1) * $limit;
    //     $products = Product::where('status', '!=', 2)
    //         ->orderBy('created_at', 'DESC')
    //         ->offset($offset)
    //         ->limit($limit)
    //         ->get();
    //     return response()->json(
    //         [
    //             'success' => true,
    //             'message' => 'Tải dữ liệu thành công',
    //             'products' => $products
    //         ],
    //         200
    //     );
    // }
    // public function product_new($limit, $page = 1)
    // {
    //     $offset = ($page - 1) * $limit;
    //     $products = Product::where('status', '=', 3)
    //         ->orderBy('created_at', 'DESC')
    //         ->offset($offset)
    //         ->limit($limit)
    //         ->get();
    //     return response()->json(
    //         [
    //             'success' => true,
    //             'message' => 'Tải dữ liệu thành công',
    //             'products' => $products
    //         ],
    //         200
    //     );
    // }
    // ///////////////////////////////////////////
    // public function product_sale($limit, $page = 1)
    // {
    //     $offset = ($page - 1) * $limit;
    //     $products = Product::where('status', '=', 4)
    //         ->orderBy('created_at', 'DESC')
    //         ->offset($offset)
    //         ->limit($limit)
    //         ->get();
    //     return response()->json(
    //         [
    //             'success' => true,
    //             'message' => 'Tải dữ liệu thành công',
    //             'products' => $products
    //         ],
    //         200
    //     );
    // }
    // public function product_hot($limit, $page = 1)
    // {
    //     $offset = ($page - 1) * $limit;
    //     $products = Product::where('status', '=', 5)
    //         ->orderBy('created_at', 'DESC')
    //         ->offset($offset)
    //         ->limit($limit)
    //         ->get();
    //     return response()->json(
    //         [
    //             'success' => true,
    //             'message' => 'Tải dữ liệu thành công',
    //             'products' => $products
    //         ],
    //         200
    //     );
    // }
    //Lấy ra tất cả sản phẩm theo loại có phân trang
    public function product_category($category_id, $limit)
    {

        $listid = array();
        array_push($listid, $category_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $category_id + 0],
            ['status', '!=', 2]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '!=', 2]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        // $offset = ($page - 1) * $limit;
        $products = Product::where('status','!=', 2)
            ->whereIn('category_id', $listid)
            ->orderBy('created_at', 'DESC')
            // ->offset($offset)
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }
    //Lấy ra tất cả sản phẩm theo thương hiệu có phân trang
    public function product_brand($limit,$product_id)
    {
        $products = Product::where([['brand_id', '=', $product_id], ['status', '!=', 2]])
            ->orderBy('created_at', 'DESC')
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }
public function product_detail($slug)
{
    $product=Product::where([['slug','=',$slug],['status','!=',2]])->first();
    if ($product==null)
    {
        return response()->json(
            [
                'success' => false,
                'message' => 'không tìm thấy dữ liệu',
                'product' => $product
            ],
            404
        ); 
    }
    $listid = array();
        array_push($listid, $product->category_id);
        $args_cat1 = [
            ['parent_id', '=',$product->category_id],
            ['status', '!=', 2]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '!=', 2]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
    $product_other=Product::where([['id','!=',$product->id],['status','!=',2]])
    ->whereIn('category_id',$listid)
    ->orderBy('created_at','DESC')
    ->limit(8)
    ->get();
    return response()->json(
        [
            'success' => true,
            'message' => 'Tải dữ liệu thành công',
            'product' => $product,
            'product_other'=>$product_other,
        ],
        200
    );
}
public function search_product($key,$limit, $page = 1){
    $count_products = Product::where([['name', 'like','%'.$key.'%'], ['status', '!=', 2]])->get();
    $end_page = 1;
    if (count($count_products) > $limit) {
        $end_page = ceil(count($count_products) / $limit);
    }    
    $offset = ($page - 1) * $limit;
    $products = Product::where([['name', 'like','%'.$key.'%'], ['status', '!=', 2]])->orderBy('created_at', 'DESC')->offset($offset)->limit($limit)->get();
    return response()->json(['success' => true,'message' => 'Tải dữ liệu thành công','products' => $products,'end_page'=>$end_page],200);

}
public function trash()
{
    $trash = Product::where('status','=',0)->orderBy('updated_by', 'desc')->get();
    $count_trash = Product::where('status','=',0)->count();
    return response()->json(['success' => true,'message' =>'tai thanh cong','trash'=>$trash,'count_trash'=>$count_trash]);
}
public function status(string $id)
{
    $product =Product::find($id);
    if($product==null)
    {
        return response()->json(
            ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'product' => null],404
        );
    }
    $product->status=($product->status==1)? 2:1;
    $product->updated_at=date('Y-m-d H:i:s');
    $product->update_by= Auth::id()?? 1;
    $product->save();
    return response()->json(
        ['success' => true, 'message' => 'Thành công', 'products' => $product],
        200
    );
}
public function deleteTrash(string $id)
{
    $product = Product::find($id);
    if($product == null){
        return response()->json(['success' => false, 'message' =>'Không tìm thấy bài viết !']);
    }
    $product->status = 0;
    $product->updated_at = date('Y-m-d H:i:s');
    $product->save();
    return response()->json(['success' => true, 'message' =>'Đã đưa sản phẩm vào thùng rác !']);
}
public function RescoverTrash($id){
    $product = Product::find($id);
    if($product == null){
        return response()->json(['success' => false, 'message' =>'Không tìm thấy bài viết !']);
    }
    $product->status = 2;
    $product->updated_at = date('Y-m-d H:i:s');
    $product->save();
    return response()->json(['success' => true, 'message' =>'Phục hồi thành công !']);
}



}