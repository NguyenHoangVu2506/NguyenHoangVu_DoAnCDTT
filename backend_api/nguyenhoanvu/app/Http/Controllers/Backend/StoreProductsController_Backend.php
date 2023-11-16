<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;

class StoreProductsController_Backend extends Controller
{

    public function add_store_product(Request $request)
    {
        $product_store = DB::table("product_store")->where('product_id', $request->product_id);
        $products = DB::table("product")->where([['id', $request->product_id], ['status', '=', 1]]);
        if ($product_store->count() > 0) {
            $update_qty = $request->product_qty + $product_store->first()->qty;
            $addPro = $product_store
                ->update(['qty' => $update_qty, 'price' => $request->product_price]);
            return response()->json(

                ['success' => true, 'message' => "Cập nhật dữ liệu thành công", "addPro" => $addPro],
                200

            );
        } else if ($products->count() > 0) {
            $addPro = DB::table('product_store')->insert([
                'product_id' => $request->product_id,
                'qty' => $request->product_qty,
                'price' => $request->product_price,
            ]);
            return response()->json(

                ['success' => true, 'message' => "Thêm dữ liệu thành công", "addPro" => $addPro],
                200

            );
        } else {
            return response()->json(

                ['success' => false, 'message' => "Thêm dữ liệu không thành công, không tồn tại id này trong bảng product"],
                200

            );
        }
    }

    public function remove_store_product(Request $request)
    {
        $product_store = DB::table("product_store")->where('product_id', $request->product_id);
        if ($product_store->count() > 0) {
            if ($product_store->first()->status === 1 && $request->rm==[]) {
                $product_store
                    ->update(['status' => 0]);
                return response()->json(

                    ['success' => true, 'message' => "Xóa dữ liệu thành công"],
                    200

                );
            } else if ($product_store->first()->status === 0 && $request->rm ==[]) {
                $product_store
                    ->update(['status' => 1]);
                return response()->json(

                    ['success' => true, 'message' => "Khôi phục dữ liệu thành công"],
                    200

                );
            }else if($request->rm!=[]){
                $product_store
                    ->update(['status' => 2]);
                return response()->json(

                    ['success' => true, 'message' => "Xóa vĩnh viễn dữ liệu thành công"],
                    200

                );
            }

        } else {
            return response()->json(

                ['success' => false, 'message' => "Xóa dữ liệu không thành công, không tồn tại sản phẩm này trong cửa hàng"],
                200

            );
        }


    }
    public function getProductAndStoreProduct()
    {

        $productcategory = DB::table("product")->where([["product.status", 1], ["category.status", '=', 1]])->join("category", "product.category_id", '=', 'category.id')->select("product.id as id", "product.name as product_name", 'category.name as category', 'brand_id', 'product.price as price', 'product.description as short_description', 'product.detail as detail')->orderByDesc('product.created_at');

        $products = DB::table('brand')
            ->JoinSub($productcategory, 'productcategory', function (JoinClause $join) {
                $join->on('productcategory.brand_id', '=', 'brand.id')
                    ->where('brand.status', 1);
            })
            ->select("productcategory.*", 'brand.name as brand')
            ->get();


        $product_store = DB::table("product_store")->join("product", 'product_store.product_id', '=', 'product.id')->where('product_store.status', 1)->select('product.id as id', 'product.name as product_name', 'product_store.price as price_in_store', 'product_store.qty as quantity', 'product_store.qty_sold as quantity_sold')->orderByDesc('product_store.created_at')->get();
        $product_store_trash = DB::table("product_store")->join("product", 'product_store.product_id', '=', 'product.id')->where('product_store.status', 0)->select('product.id as id', 'product.name as product_name', 'product_store.price as price_in_store', 'product_store.qty as quantity', 'product_store.qty_sold as quantity_sold')->orderByDesc('product_store.created_at')->get();

        return response()->json(

            ['success' => true, 'message' => "Thêm dữ lieu thanh cong", "products" => $products, "product_store" => $product_store,'product_store_trash'=>$product_store_trash],
            200

        );
    }

}


