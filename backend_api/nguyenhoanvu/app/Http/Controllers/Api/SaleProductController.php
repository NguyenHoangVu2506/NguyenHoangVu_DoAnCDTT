<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Product;


use App\Models\Category;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;
class SaleProductController extends Controller
{
    public function getSaleProductAll($limit, $page = 1)
    {
        if ($limit > 0) {
            $offset = ($page - 1) * $limit;
            $product_store = DB::table('product_store')
                ->join("product", 'product_store.product_id', '=', 'product.id')
                ->where('product_store.status', 1)
                ->select('product_id', 'product.name as product_name', 'product.slug as product_slug',
                 'product.image as product_image', 'product.price as import_price', 'product_store.price as listed_price',
                  'product.category_id', 'product.brand_id', 'product.description as product_short_description',
                   'product.detail as product_detail', 'product_store.qty as store_qty', 'product_store.qty_sold as qty_sold_product_store',
                    'product_store.status as store_status', 'product_store.created_at as store_created_date');
                    
            $store_product_sale = DB::table('product_sale')
                ->rightJoinSub($product_store, 'products', function (JoinClause $join) {
                    $join->on('products.product_id', '=', 'product_sale.product_id')
                        ->where([['product_sale.status', 1], ['product_sale.date_begin', '<=', date('Y-m-d H:i:s')], ['product_sale.date_end', '>=', date('Y-m-d H:i:s')]]);
                })
                ->select('products.*', 'product_sale.sale_id', 'product_sale.date_begin', 'product_sale.date_end', 'product_sale.qty as sale_qty', 'product_sale.qty_sold as qty_sold_product_sale', 'product_sale.status as sale_status', 'product_sale.created_at as sale_created_date');

            $store_saleid_products = DB::table('sale_id')
                ->rightJoinSub($store_product_sale, 'store_product_sale', function (JoinClause $join) {
                    $join->on('store_product_sale.sale_id', '=', 'sale_id.id')
                        ->where('sale_id.status', 1);
                })
                ->select('store_product_sale.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');
                
            $store_saleid_category_products = DB::table('category')
                ->rightJoinSub($store_saleid_products, 'store_saleid_products', function (JoinClause $join) {
                    $join->on('store_saleid_products.category_id', '=', 'category.id')
                        ->where('category.status', 1);
                })
                ->select('store_saleid_products.*', 'category.name as category_name', 'category.slug as category_slug', 'category.image as category_image', 'category.description as category_description');

            $store_saleid_category_brand_products = DB::table('brand')
                ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                    $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                        ->where('brand.status', 1);
                })
                ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');


            $store_saleid_category_brand_review_products = DB::table('coment_rating')
                ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                    $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                })
                ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                ->groupBy('product_id')
                ->where('sale_id', '!=', null)
                ->orderBy('store_created_date', 'DESC')
                ->offset($offset)
                ->limit($limit)
                ->get();
                
            //////end_page
            $product_qty = DB::table('coment_rating')
                ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                    $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                })
                ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                ->groupBy('product_id')
                ->where('sale_id', '!=', null)
                ->orderBy('store_created_date', 'DESC')
                ->get();
            $end_page = 1;
            if (count($product_qty) > $limit) {
                $end_page = ceil(count($product_qty) / $limit);
            }
            //////end_page

            return response()->json(

                ['success' => true, 'message' => "tai du lieu thanh cong", 'sale_products_all' => $store_saleid_category_brand_review_products, "product_qty" => count($product_qty), 'end_page' => $end_page],
                200

            );
        }
        return response()->json(

            ['success' => false, 'message' => "tai du lieu khong thanh cong"],
            200

        );
    }
    // public function store(Request $request)
    // {
    //     $ProductSale = new Product_sale();
    //     $ProductSale->sale_id = $request->sale_id;
    //     $ProductSale->product_id = $request->product_id; 
    //     $ProductSale->qty = $request->qty; //form
    //     $ProductSale->pricesale = $request->pricesale; 
    //     $ProductSale->date_begin = $request->date_begin; //form
    //     $ProductSale->date_end = $request->date_end; //form
    //     $ProductSale->created_at = date('Y-m-d H:i:s');
    //     $ProductSale->status = $request->status; //form
    //     $ProductSale->save(); 
    //     $Saleid = new Sale_id();
    //     $Saleid->price_sale = $request->price_sale;
    //     return response()->json(
    //         ['success' => true, 'message' => 'Thanh cong', 'products' => $ProductSale],
    //         201
    //     );
    // }


}
