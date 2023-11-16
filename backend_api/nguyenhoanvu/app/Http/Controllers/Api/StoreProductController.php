<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Brand;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;
class StoreProductController extends Controller
{
    public function getNewProductAll($limit, $page = 1)
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
                ->select('products.*', 'product_sale.sale_id', 'product_sale.date_begin', 'product_sale.date_end', 
                'product_sale.qty as sale_qty', 'product_sale.qty_sold as qty_sold_product_sale', 
                'product_sale.status as sale_status', 'product_sale.created_at as sale_created_date');
                

            $store_saleid_products = DB::table('sale_id')
                ->rightJoinSub($store_product_sale, 'store_product_sale', function (JoinClause $join) {
                    $join->on('store_product_sale.sale_id', '=', 'sale_id.id')
                        ->where('sale_id.status', 1);
                })
                ->select('store_product_sale.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description',
                 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');

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
                ->orderBy('store_created_date', 'DESC')
                ->get();
            $end_page = 1;
            if (count($product_qty) > $limit) {
                $end_page = ceil(count($product_qty) / $limit);
            }
            //////end_page

            return response()->json(

                ['success' => true, 'message' => "tai du lieu thanh cong", 'new_products_all' => $store_saleid_category_brand_review_products, "product_qty" => count($product_qty), 'end_page' => $end_page],
                200

            );
        }
        return response()->json(

            ['success' => false, 'message' => "tai du lieu khong thanh cong"],
            200

        );

    }
    public function product_detail($slug, $other_product_limit, $comment_limit)
    {

        $product_store = DB::table('product_store')
            ->join("product", 'product_store.product_id', '=', 'product.id')
            ->where('product_store.status', 1)
            ->select('product_id', 'product.name as product_name', 'product.slug as product_slug',
             'product.image as product_image', 'product.price as import_price',
              'product_store.price as listed_price', 'product.category_id', 'product.brand_id',
               'product.description as product_short_description', 'product.detail as product_detail',
                'product_store.qty as store_qty', 'product_store.qty_sold as qty_sold_product_store', 
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
            ->select('store_saleid_category_brand_products.*', 'store_saleid_category_brand_products.product_id as id', 'store_saleid_category_brand_products.listed_price as price', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
            ->groupBy('product_id')
            ->orderBy('store_created_date', 'DESC')
            ->where('product_slug', $slug)
            ->first();
        /////////////////////////////////
        $listId = array();
        array_push($listId, $store_saleid_category_brand_review_products->category_id);
        $args_cat1 = [
            ['parent_id', '=', $store_saleid_category_brand_review_products->category_id],
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

        $other_products = DB::table('coment_rating')
            ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
            })
            ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
            ->groupBy('product_id')
            ->orderBy('store_created_date', 'DESC')
            ->where('store_saleid_category_brand_products.product_id', '!=', $store_saleid_category_brand_review_products->product_id)
            ->whereIn('category_id', $listId)
            ->limit($other_product_limit)
            ->get();


        /////////////////////////////////////////
        $store_sold_qty = DB::table('product_store')->where('product_id', $store_saleid_category_brand_review_products->product_id)->sum('qty_sold');
        $sale_sold_qty = DB::table('product_sale')->where('product_id', $store_saleid_category_brand_review_products->product_id)->sum('qty_sold');
        $sold_qty = $store_sold_qty + $sale_sold_qty;
        ///////////////////////////////////////
        $product_comment = DB::table('coment_rating')->where('product_id', $store_saleid_category_brand_review_products->product_id)->limit($comment_limit)->join('user', 'coment_rating.user_id', '=', 'user.id')->select('coment_rating.id as coment_rating_id', 'coment_rating.rating_score', 'coment_rating.coment', 'coment_rating.created_at as review_date', 'user.id as user_id', 'user.name as customer_name', 'user.image as user_image')->get();




        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'product_detail' => $store_saleid_category_brand_review_products, 'other_products' => $other_products, 'other_products_qty' => count($other_products), 'sold_qty' => $sold_qty, 'product_comment' => $product_comment],
            200

        );

    }
    public function getBestsallerProductAll($limit, $page = 1)
    {

        if ($limit > 0) {
            $offset = ($page - 1) * $limit;
            $product_store = DB::table('product_store')
                ->join("product", 'product_store.product_id', '=', 'product.id')
                ->where('product_store.status', 1)
                ->where('product_store.qty_sold', '>', 3)
                ->select('product_id', 'product.name as product_name', 'product.slug as product_slug',
                 'product.image as product_image', 'product.price as import_price', 
                 'product_store.price as listed_price', 'product.category_id', 'product.brand_id',
                  'product.description as product_short_description', 'product.detail as product_detail',
                   'product_store.qty as store_qty', 'product_store.qty_sold as qty_sold_product_store',
                    'product_store.status as store_status', 'product_store.created_at as store_created_date');

            $store_product_sale = DB::table('product_sale')
                ->rightJoinSub($product_store, 'products', function (JoinClause $join) {
                    $join->on('products.product_id', '=', 'product_sale.product_id')
                        ->where([['product_sale.status', 1], ['product_sale.date_begin', '<=', date('Y-m-d H:i:s')], ['product_sale.date_end', '>=', date('Y-m-d H:i:s')]]);
                })
                ->select('products.*', 'product_sale.sale_id', 'product_sale.date_begin', 'product_sale.date_end',
                 'product_sale.qty as sale_qty', 'product_sale.qty_sold as qty_sold_product_sale',
                  'product_sale.status as sale_status', 'product_sale.created_at as sale_created_date');

            $store_saleid_products = DB::table('sale_id')
                ->rightJoinSub($store_product_sale, 'store_product_sale', function (JoinClause $join) {
                    $join->on('store_product_sale.sale_id', '=', 'sale_id.id')
                        ->where('sale_id.status', 1);
                })
                ->select('store_product_sale.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description',
                 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');

            $store_saleid_category_products = DB::table('category')
                ->rightJoinSub($store_saleid_products, 'store_saleid_products', function (JoinClause $join) {
                    $join->on('store_saleid_products.category_id', '=', 'category.id')
                        ->where('category.status', 1);
                })
                ->select('store_saleid_products.*', 'category.name as category_name', 'category.slug as category_slug',
                 'category.image as category_image', 'category.description as category_description');

            $store_saleid_category_brand_products = DB::table('brand')
                ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                    $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                        ->where('brand.status', 1);
                })
                ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug',
                 'brand.image as brand_image', 'brand.description as brand_description');


            $store_saleid_category_brand_review_products = DB::table('coment_rating')
                ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                    $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                })
                ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score,
                 COUNT(rating_score) as rating_qty'))
                ->groupBy('product_id')
                ->orderBy('qty_sold_product_store', 'DESC')
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
                ->orderBy('qty_sold_product_store', 'DESC')
                ->get();
            $end_page = 1;
            if (count($product_qty) > $limit) {
                $end_page = ceil(count($product_qty) / $limit);
            }
            //////end_page

            return response()->json(

                ['success' => true, 'message' => "tai du lieu thanh cong", 'bestsaller_products_all' => $store_saleid_category_brand_review_products, "product_qty" => count($product_qty), 'end_page' => $end_page],
                200

            );
        }
        return response()->json(

            ['success' => false, 'message' => "tai du lieu khong thanh cong"],
            200

        );

    }
    public function getProductByCategory($limit, $page = 1, $slug)
    {

        $cat = DB::table('category')->where([['status', '=', 1], ['slug', '=', $slug]]);

        if ($cat->count() > 0) {
            $offset = ($page - 1) * $limit;
            $product_store = DB::table('product_store')
                ->join("product", 'product_store.product_id', '=', 'product.id')
                ->where('product_store.status', 1)
                ->select('product_id', 'product.name as product_name', 'product.slug as product_slug', 'product.image as product_image', 'product.price as import_price', 'product.category_id', 'product.brand_id', 'product.description as product_short_description', 'product.detail as product_detail', 'product_store.qty as store_qty', 'product_store.qty_sold as qty_sold_product_store', 'product_store.price as listed_price', 'product_store.status as store_status', 'product_store.created_at as store_created_date');

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


            if ($store_saleid_products->get()->count() == 0) {
                return response()->json(

                    ['success' => false, 'message' => "tai du lieu khong  ko thanh cong"],
                    200

                );
            }
            $store_saleid_category_products = DB::table('category')
                ->rightJoinSub($store_saleid_products, 'store_saleid_products', function (JoinClause $join) {
                    $join->on('store_saleid_products.category_id', '=', 'category.id')
                        ->where('category.status', 1);
                })
                ->select('store_saleid_products.*', 'category.parent_id as category_parent_id', 'category.name as category_name', 'category.slug as category_slug', 'category.image as category_image', 'category.description as category_description');


            $store_saleid_category_brand_products = DB::table('brand')
                ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                    $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                        ->where('brand.status', 1);
                })
                ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');


            $Category = $cat->first();
            $listId = array();
            array_push($listId, $Category->id);
            $args_cat1 = [
                ['parent_id', '=', $Category->id],
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


            $ProductsByCategory = DB::table('coment_rating')
                ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                    $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                })
                ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                ->groupBy('product_id')
                ->orderBy('store_created_date', 'DESC')
                ->whereIn('category_id', $listId)
                ->limit($limit)
                ->offset($offset)
                ->get();

            //////end_page
            $product_qty = DB::table('coment_rating')
                ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                    $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                })
                ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty '))
                ->groupBy('product_id')
                ->orderBy('store_created_date', 'DESC')
                ->whereIn('category_id', $listId)
                ->get();

            $end_page = 1;
            if (count($product_qty) > $limit) {
                $end_page = ceil(count($product_qty) / $limit);
            }
            //////end_page

            return response()->json(

                ['success' => true, 'message' => "tai du lieu thanh cong", 'ProductsByCategory' => $ProductsByCategory, 'products_qty' => count($ProductsByCategory), 'end_page' => $end_page],
                200

            );
        } else {
            return response()->json(

                ['success' => false, 'message' => "tai du lieu khong thanh cong"],
                200

            );
        }
        return response()->json(

            ['success' => false, 'message' => "tai du lieu khong thanh cong"],
            200

        );

    }
    public function getProductByBrand($limit, $page = 1, $slug)
    {

        $cat = DB::table('brand')->where([['status', '=', 1], ['slug', '=', $slug]]);

        if ($cat->count() > 0) {
            $offset = ($page - 1) * $limit;
            $product_store = DB::table('product_store')
                ->join("product", 'product_store.product_id', '=', 'product.id')
                ->where('product_store.status', 1)
                ->select('product_id', 'product.name as product_name', 'product.slug as product_slug', 'product.image as product_image', 'product.price as import_price', 'product.category_id', 'product.brand_id', 'product.description as product_short_description', 'product.detail as product_detail', 'product_store.qty as store_qty', 'product_store.qty_sold as qty_sold_product_store', 'product_store.price as listed_price', 'product_store.status as store_status', 'product_store.created_at as store_created_date');

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


            if ($store_saleid_products->get()->count() == 0) {
                return response()->json(

                    ['success' => false, 'message' => "tai du lieu khong  ko thanh cong"],
                    200

                );
            }
            $store_saleid_category_products = DB::table('category')
                ->rightJoinSub($store_saleid_products, 'store_saleid_products', function (JoinClause $join) {
                    $join->on('store_saleid_products.category_id', '=', 'category.id')
                        ->where('category.status', 1);
                })
                ->select('store_saleid_products.*', 'category.parent_id as category_parent_id', 'category.name as category_name', 'category.slug as category_slug', 'category.image as category_image', 'category.description as category_description');


            $store_saleid_category_brand_products = DB::table('brand')
                ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                    $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                        ->where('brand.status', 1);
                })
                ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');


            $Brand = $cat->first();
            $listId = array();
            array_push($listId, $Brand->id);
            $args_cat1 = [
                ['status', '=', 1]
            ];
            $ProductsByBrand= DB::table('coment_rating')
                ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                    $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                })
                ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                ->groupBy('product_id')
                ->orderBy('store_created_date', 'DESC')
                ->whereIn('brand_id', $listId)
                ->limit($limit)
                ->offset($offset)
                ->get();

            //////end_page
            $product_qty = DB::table('coment_rating')
                ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                    $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                })
                ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty '))
                ->groupBy('product_id')
                ->orderBy('store_created_date', 'DESC')
                ->whereIn('brand_id', $listId)
                ->get();

            $end_page = 1;
            if (count($product_qty) > $limit) {
                $end_page = ceil(count($product_qty) / $limit);
            }
            //////end_page

            return response()->json(

                ['success' => true, 'message' => "tai du lieu thanh cong", 'ProductsByBrand' => $ProductsByBrand, 'products_qty' => count($ProductsByBrand), 'end_page' => $end_page],
                200

            );
        } else {
            return response()->json(

                ['success' => false, 'message' => "tai du lieu khong thanh cong"],
                200

            );
        }
        return response()->json(

            ['success' => false, 'message' => "tai du lieu khong thanh cong"],
            200

        );

    }

    public function ProductByCategory_filter($limit, $page = 1, $slug, $filter = -1, Request $request)
    {

        $BrandAll = DB::table('brand')->where('brand.status', 1)->select('brand.name as brand_name', 'brand.id as brand_id')->get();

        // $check_brand_id = $BrandAll->whereIn('brand_id', $request->brand_id)->count();

        $cat = DB::table('category')->where([['status', '=', 1], ['slug', '=', $slug]]);
        if ($cat->count() > 0) {
            if ($filter == -1 || $filter === 'new') {
                $offset = ($page - 1) * $limit;
                $product_store = DB::table('product_store')
                    ->join("product", 'product_store.product_id', '=', 'product.id')
                    ->where('product_store.status', 1)
                    ->select('product_id', 'product.name as product_name', 'product.slug as product_slug', 
                    'product.image as product_image', 'product.price as import_price', 'product.category_id', 'product.brand_id', 'product.description as product_short_description',
                     'product.detail as product_detail', 'product_store.qty as store_qty', 'product_store.qty_sold as qty_sold_product_store', 'product_store.price as listed_price', 'product_store.status as store_status', 'product_store.created_at as store_created_date');

                $store_product_sale = DB::table('product_sale')
                    ->rightJoinSub($product_store, 'products', function (JoinClause $join) {
                        $join->on('products.product_id', '=', 'product_sale.product_id')
                            ->where([['product_sale.status', 1], ['product_sale.date_begin', '<=', date('Y-m-d H:i:s')], ['product_sale.date_end', '>=', date('Y-m-d H:i:s')]]);
                    })
                    ->select('products.*', 'product_sale.sale_id', 'product_sale.date_begin', 'product_sale.date_end', 'product_sale.qty as sale_qty', 'product_sale.qty_sold as qty_sold_product_sale', 'product_sale.status as sale_status', 'product_sale.created_at as sale_created_date');

                if ($request->min_max_price !== []) {
                    $store_saleid_products = DB::table('sale_id')
                        ->rightJoinSub($store_product_sale, 'store_product_sale', function (JoinClause $join) {
                            $join->on('store_product_sale.sale_id', '=', 'sale_id.id')
                                ->where('sale_id.status', 1);
                        })
                        ->WhereBetween('sale_id.price_sale', [$request->min_max_price[0], $request->min_max_price[1]])
                        ->orwhereBetween('listed_price', [$request->min_max_price[0], $request->min_max_price[1]])
                        ->select('store_product_sale.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');
                } else {
                    $store_saleid_products = DB::table('sale_id')
                        ->rightJoinSub($store_product_sale, 'store_product_sale', function (JoinClause $join) {
                            $join->on('store_product_sale.sale_id', '=', 'sale_id.id')
                                ->where('sale_id.status', 1);
                        })
                        ->select('store_product_sale.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');

                }
                if ($store_saleid_products->get()->count() == 0) {
                    return response()->json(

                        ['success' => false, 'message' => "tai du lieu khong thanh cong"],
                        200

                    );
                }
                $store_saleid_category_products = DB::table('category')
                    ->rightJoinSub($store_saleid_products, 'store_saleid_products', function (JoinClause $join) {
                        $join->on('store_saleid_products.category_id', '=', 'category.id')
                            ->where('category.status', 1);
                    })
                    ->select('store_saleid_products.*', 'category.name as category_name', 'category.slug as category_slug', 'category.image as category_image', 'category.description as category_description');


                $listIdBrand = array();
                if ($request->brand_id !== []) {
                    foreach ($request->brand_id as $it) {
                        array_push($listIdBrand, (int) $it);
                    }
                }
                if (count($listIdBrand) > 0) {
                    $store_saleid_category_brand_products = DB::table('brand')
                        ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                            $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                                ->where('brand.status', 1);
                        })
                        ->whereIn('brand.id', $request->brand_id)
                        ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');

                } else {
                    $store_saleid_category_brand_products = DB::table('brand')
                        ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                            $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                                ->where('brand.status', 1);
                        })
                        ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');
                }
                $Category = $cat->first();
                $listId = array();
                array_push($listId, $Category->id);
                $args_cat1 = [
                    ['parent_id', '=', $Category->id],
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


                $ProductsByCategory = DB::table('coment_rating')
                    ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                        $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                    })
                    ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                    ->groupBy('product_id')
                    ->orderBy('store_created_date', 'DESC')
                    ->whereIn('category_id', $listId)
                    ->limit($limit)
                    ->offset($offset)
                    ->get();
                    $ProductsByBrand = DB::table('coment_rating')
                    ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                        $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                    })
                    ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                    ->groupBy('product_id')
                    ->orderBy('store_created_date', 'DESC')
                    ->whereIn('brand_id', $listId)
                    ->limit($limit)
                    ->offset($offset)
                    ->get();

                //////end_page

                $product_qty = DB::table('coment_rating')
                    ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                        $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                    })
                    ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty '))
                    ->groupBy('product_id')
                    ->orderBy('store_created_date', 'DESC')
                    ->whereIn('category_id', $listId)
                    ->get();

                $end_page = 1;
                if (count($product_qty) > $limit) {
                    $end_page = ceil(count($product_qty) / $limit);
                }
                //////end_page

                return response()->json(

                    ['success' => true, 'message' => "tai du lieu thanh cong", 'OneProductByCategory' => $Category, 'ProductsByCategory' => $ProductsByCategory,'ProductsByBrand' => $ProductsByBrand,
                     'brand_all' => $BrandAll, 'products_qty' => count($ProductsByCategory), 'end_page' => $end_page],
                    200

                );
            } else {
                if ($filter === 'bestsaller') {
                    $offset = ($page - 1) * $limit;
                    $product_store = DB::table('product_store')
                        ->join("product", 'product_store.product_id', '=', 'product.id')
                        ->where('product_store.status', 1)
                        ->select('product_id', 'product.name as product_name', 'product.slug as product_slug', 'product.image as product_image', 'product.price as import_price', "product_store.price as listed_price", 'product.category_id', 'product.brand_id', 'product.short_description as product_short_description', 'product.detail as product_detail', 'product_store.qty as store_qty', 'product_store.qty_sold as qty_sold_product_store', 'product_store.status as store_status', 'product_store.created_at as store_created_date');

                    $store_product_sale = DB::table('product_sale')
                        ->rightJoinSub($product_store, 'products', function (JoinClause $join) {
                            $join->on('products.product_id', '=', 'product_sale.product_id')

                                ->where([['product_sale.status', 1], ['product_sale.date_begin', '<=', date('Y-m-d H:i:s')], ['product_sale.date_end', '>=', date('Y-m-d H:i:s')]]);
                        })

                        ->select('products.*', 'product_sale.sale_id', 'product_sale.date_begin', 'product_sale.date_end', 'product_sale.qty as sale_qty', 'product_sale.qty_sold as qty_sold_product_sale', 'product_sale.status as sale_status', 'product_sale.created_at as sale_created_date');

                    if ($request->min_max_price !== []) {
                        $store_saleid_products = DB::table('sale_id')
                            ->rightJoinSub($store_product_sale, 'store_product_sale', function (JoinClause $join) {
                                $join->on('store_product_sale.sale_id', '=', 'sale_id.id')
                                    ->where('sale_id.status', 1);
                            })
                            ->WhereBetween('sale_id.price_sale', [$request->min_max_price[0], $request->min_max_price[1]])
                            ->orwhereBetween('listed_price', [$request->min_max_price[0], $request->min_max_price[1]])
                            ->select('store_product_sale.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');
                    } else {
                        $store_saleid_products = DB::table('sale_id')
                            ->rightJoinSub($store_product_sale, 'store_product_sale', function (JoinClause $join) {
                                $join->on('store_product_sale.sale_id', '=', 'sale_id.id')
                                    ->where('sale_id.status', 1);
                            })
                            ->select('store_product_sale.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');

                    }
                    if ($store_saleid_products->get()->count() == 0) {
                        return response()->json(

                            ['success' => false, 'message' => "tai du lieu khong thanh cong"],
                            200

                        );
                    }
                    $store_saleid_category_products = DB::table('category')
                        ->rightJoinSub($store_saleid_products, 'store_saleid_products', function (JoinClause $join) {
                            $join->on('store_saleid_products.category_id', '=', 'category.id')
                                ->where('category.status', 1);
                        })
                        ->select('store_saleid_products.*', 'category.name as category_name', 'category.slug as category_slug', 'category.image as category_image', 'category.description as category_description');

                    $listIdBrand = array();
                    if (count($request->brand_id) > 0) {
                        foreach ($request->brand_id as $it) {
                            array_push($listIdBrand, (int) $it);
                        }
                    }
                    if (count($listIdBrand) > 0) {
                        $store_saleid_category_brand_products = DB::table('brand')
                            ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                                $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                                    ->where('brand.status', 1);
                            })
                            ->whereIn('brand.id', $request->brand_id)
                            ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');

                    } else {
                        $store_saleid_category_brand_products = DB::table('brand')
                            ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                                $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                                    ->where('brand.status', 1);
                            })
                            ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');
                    }

                    $Category = $cat->first();

                    $listId = array();
                    array_push($listId, $Category->id);
                    $args_cat1 = [
                        ['parent_id', '=', $Category->id],
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


                    $ProductsByCategory = DB::table('coment_rating')
                        ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                            $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');

                        })
                        ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                        ->groupBy('product_id')
                        ->orderBy('qty_sold_product_store', 'DESC')
                        ->whereIn('category_id', $listId)
                        ->limit($limit)
                        ->offset($offset)
                        ->get();
                        $ProductsByBrand = DB::table('coment_rating')
                        ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                            $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');

                        })
                        ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                        ->groupBy('product_id')
                        ->orderBy('qty_sold_product_store', 'DESC')
                        ->whereIn('brand_id', $listId)
                        ->limit($limit)
                        ->offset($offset)
                        ->get();

                    //////end_page
                    $product_qty = DB::table('coment_rating')
                        ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                            $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                        })
                        ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty '))
                        ->groupBy('product_id')
                        ->orderBy('qty_sold_product_store', 'DESC')
                        ->whereIn('category_id', $listId)
                        ->get();
                    $end_page = 1;
                    if (count($product_qty) > $limit) {
                        $end_page = ceil(count($product_qty) / $limit);
                    }
                    //////end_page

                    return response()->json(

                        ['success' => true, 'message' => "tai du lieu thanh cong", 'OneProductByCategory' => $Category,
                         'ProductsByCategory' => $ProductsByCategory, 'ProductsByBrand' => $ProductsByBrand,'brand_all' => $BrandAll, 'products_qty' => count($ProductsByCategory), 'end_page' => $end_page],
                        200

                    );
                } else if ($filter === 'sale') {
                    $offset = ($page - 1) * $limit;
                    $product_store = DB::table('product_store')
                        ->join("product", 'product_store.product_id', '=', 'product.id')
                        ->where('product_store.status', 1)
                        ->select('product_id', 'product.name as product_name', 'product.slug as product_slug', 'product.image as product_image', 'product.price as import_price', "product_store.price as listed_price", 'product.category_id', 'product.brand_id', 'product.short_description as product_short_description', 'product.detail as product_detail', 'product_store.qty as store_qty', 'product_store.qty_sold as qty_sold_product_store', 'product_store.status as store_status', 'product_store.created_at as store_created_date');

                    $store_product_sale = DB::table('product_sale')
                        ->rightJoinSub($product_store, 'products', function (JoinClause $join) {
                            $join->on('products.product_id', '=', 'product_sale.product_id')
                                ->where([['product_sale.status', 1], ['product_sale.date_begin', '<=', date('Y-m-d H:i:s')], ['product_sale.date_end', '>=', date('Y-m-d H:i:s')]]);
                        })
                        ->select('products.*', 'product_sale.sale_id', 'product_sale.date_begin', 'product_sale.date_end', 'product_sale.qty as sale_qty', 'product_sale.qty_sold as qty_sold_product_sale', 'product_sale.status as sale_status', 'product_sale.created_at as sale_created_date');

                    if ($request->min_max_price !== []) {
                        $store_saleid_products = DB::table('sale_id')
                            ->rightJoinSub($store_product_sale, 'store_product_sale', function (JoinClause $join) {
                                $join->on('store_product_sale.sale_id', '=', 'sale_id.id')
                                    ->where('sale_id.status', 1);
                            })
                            ->WhereBetween('sale_id.price_sale', [$request->min_max_price[0], $request->min_max_price[1]])
                            ->orwhereBetween('listed_price', [$request->min_max_price[0], $request->min_max_price[1]])
                            ->select('store_product_sale.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');
                    } else {
                        $store_saleid_products = DB::table('sale_id')
                            ->rightJoinSub($store_product_sale, 'store_product_sale', function (JoinClause $join) {
                                $join->on('store_product_sale.sale_id', '=', 'sale_id.id')
                                    ->where('sale_id.status', 1);
                            })
                            ->select('store_product_sale.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');

                    }
                    if ($store_saleid_products->get()->count() == 0) {
                        return response()->json(

                            ['success' => false, 'message' => "tai du lieu khong thanh cong"],
                            200

                        );
                    }
                    $store_saleid_category_products = DB::table('category')
                        ->rightJoinSub($store_saleid_products, 'store_saleid_products', function (JoinClause $join) {
                            $join->on('store_saleid_products.category_id', '=', 'category.id')
                                ->where('category.status', 1);
                        })
                        ->select('store_saleid_products.*', 'category.name as category_name', 'category.slug as category_slug', 'category.image as category_image', 'category.description as category_description');

                    $listIdBrand = array();
                    if (count($request->brand_id) > 0) {
                        foreach ($request->brand_id as $it) {
                            array_push($listIdBrand, (int) $it);
                        }
                    }
                    if (count($listIdBrand) > 0) {
                        $store_saleid_category_brand_products = DB::table('brand')
                            ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                                $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                                    ->where('brand.status', 1);
                            })
                            ->whereIn('brand.id', $request->brand_id)
                            ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');

                    } else {
                        $store_saleid_category_brand_products = DB::table('brand')
                            ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                                $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                                    ->where('brand.status', 1);
                            })
                            ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');
                    }

                    $Category = $cat->first();

                    $listId = array();
                    array_push($listId, $Category->id);
                    $args_cat1 = [
                        ['parent_id', '=', $Category->id],
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

                    $ProductsByCategory = DB::table('coment_rating')
                        ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                            $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                        })
                        ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                        ->groupBy('product_id')
                        ->orderBy('store_created_date', 'DESC')
                        ->whereIn('category_id', $listId)
                        ->where('sale_id', '!=', null)
                        ->limit($limit)
                        ->offset($offset)
                        ->get();
                        $ProductsByBrand = DB::table('coment_rating')
                        ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                            $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                        })
                        ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                        ->groupBy('product_id')
                        ->orderBy('store_created_date', 'DESC')
                        ->whereIn('brand_id', $listId)
                        ->where('sale_id', '!=', null)
                        ->limit($limit)
                        ->offset($offset)
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
                        ->whereIn('category_id', $listId)
                        ->get();
                    $end_page = 1;
                    if (count($product_qty) > $limit) {
                        $end_page = ceil(count($product_qty) / $limit);
                    }
                    //////end_page


                    return response()->json(

                        ['success' => true, 'message' => "tai du lieu thanh cong", 'OneProductByCategory' => $Category, 'ProductsByCategory' => $ProductsByCategory,
                        'ProductsByBrand' => $ProductsByBrand,
                         'brand_all' => $BrandAll, 'products_qty' => count($ProductsByCategory), 'end_page' => $end_page],
                        200

                    );
                } else {
                    return response()->json(

                        ['success' => false, 'message' => "tai du khong lieu thanh cong"],
                        200

                    );
                }
            }
        } else {
            return response()->json(

                ['success' => false, 'message' => "tai du khong lieu thanh cong, brand_id khong ton tai"],
                200

            );

        }



    }
    public function ProductByBrand_filter($limit, $page = 1, $slug, $filter = -1, Request $request)
    {

        $BrandAll = DB::table('category')->where('category.status', 1)->select('category.name as brand_name', 'category.id as brand_id')->get();

        // $check_brand_id = $BrandAll->whereIn('brand_id', $request->brand_id)->count();

        $cat = DB::table('brand')->where([['status', '=', 1], ['slug', '=', $slug]]);
        if ($cat->count() > 0) {
            if ($filter == -1 || $filter === 'new') {
                $offset = ($page - 1) * $limit;
                $product_store = DB::table('product_store')
                    ->join("product", 'product_store.product_id', '=', 'product.id')
                    ->where('product_store.status', 1)
                    ->select('product_id', 'product.name as product_name', 'product.slug as product_slug', 
                    'product.image as product_image', 'product.price as import_price', 'product.category_id', 'product.brand_id', 'product.description as product_short_description',
                     'product.detail as product_detail', 'product_store.qty as store_qty', 'product_store.qty_sold as qty_sold_product_store', 'product_store.price as listed_price', 'product_store.status as store_status', 'product_store.created_at as store_created_date');

                $store_product_sale = DB::table('product_sale')
                    ->rightJoinSub($product_store, 'products', function (JoinClause $join) {
                        $join->on('products.product_id', '=', 'product_sale.product_id')
                            ->where([['product_sale.status', 1], ['product_sale.date_begin', '<=', date('Y-m-d H:i:s')], ['product_sale.date_end', '>=', date('Y-m-d H:i:s')]]);
                    })
                    ->select('products.*', 'product_sale.sale_id', 'product_sale.date_begin', 'product_sale.date_end', 'product_sale.qty as sale_qty', 'product_sale.qty_sold as qty_sold_product_sale', 'product_sale.status as sale_status', 'product_sale.created_at as sale_created_date');

                if ($request->min_max_price !== []) {
                    $store_saleid_products = DB::table('sale_id')
                        ->rightJoinSub($store_product_sale, 'store_product_sale', function (JoinClause $join) {
                            $join->on('store_product_sale.sale_id', '=', 'sale_id.id')
                                ->where('sale_id.status', 1);
                        })
                        ->WhereBetween('sale_id.price_sale', [$request->min_max_price[0], $request->min_max_price[1]])
                        ->orwhereBetween('listed_price', [$request->min_max_price[0], $request->min_max_price[1]])
                        ->select('store_product_sale.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');
                } else {
                    $store_saleid_products = DB::table('sale_id')
                        ->rightJoinSub($store_product_sale, 'store_product_sale', function (JoinClause $join) {
                            $join->on('store_product_sale.sale_id', '=', 'sale_id.id')
                                ->where('sale_id.status', 1);
                        })
                        ->select('store_product_sale.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');

                }
                if ($store_saleid_products->get()->count() == 0) {
                    return response()->json(

                        ['success' => false, 'message' => "tai du lieu khong thanh cong"],
                        200

                    );
                }
                $store_saleid_category_products = DB::table('category')
                    ->rightJoinSub($store_saleid_products, 'store_saleid_products', function (JoinClause $join) {
                        $join->on('store_saleid_products.category_id', '=', 'category.id')
                            ->where('category.status', 1);
                    })
                    ->select('store_saleid_products.*', 'category.name as category_name', 'category.slug as category_slug', 'category.image as category_image', 'category.description as category_description');


                $listIdBrand = array();
                if ($request->brand_id !== []) {
                    foreach ($request->brand_id as $it) {
                        array_push($listIdBrand, (int) $it);
                    }
                }
                if (count($listIdBrand) > 0) {
                    $store_saleid_category_brand_products = DB::table('brand')
                        ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                            $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                                ->where('brand.status', 1);
                        })
                        ->whereIn('brand.id', $request->brand_id)
                        ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');

                } else {
                    $store_saleid_category_brand_products = DB::table('brand')
                        ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                            $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                                ->where('brand.status', 1);
                        })
                        ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');
                }
                $Brand = $cat->first();
                $listId = array();
                array_push($listId, $Brand->id);
                $args_cat1 = [
                   
                    ['status', '=', 1]
                ];
                $list_category1 = DB::table('brand')->where($args_cat1)->get();
                if (count($list_category1) > 0) {
                    foreach ($list_category1 as $row1) {
                        array_push($listId, $row1->id);
                        $args_cat2 = [
                           
                            ['status', '=', 1]
                        ];
                        $list_category2 = Brand::where($args_cat2)->get();
                        if (count($list_category2) > 0) {
                            foreach ($list_category2 as $row2) {
                                array_push($listId, $row2->id);
                            }
                        }
                    }
                }


                $ProductsByCategory = DB::table('coment_rating')
                    ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                        $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                    })
                    ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                    ->groupBy('product_id')
                    ->orderBy('store_created_date', 'DESC')
                    ->whereIn('category_id', $listId)
                    ->limit($limit)
                    ->offset($offset)
                    ->get();
                    $ProductsByBrand = DB::table('coment_rating')
                    ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                        $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                    })
                    ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                    ->groupBy('product_id')
                    ->orderBy('store_created_date', 'DESC')
                    ->whereIn('brand_id', $listId)
                    ->limit($limit)
                    ->offset($offset)
                    ->get();

                //////end_page

                $product_qty = DB::table('coment_rating')
                    ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                        $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                    })
                    ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty '))
                    ->groupBy('product_id')
                    ->orderBy('store_created_date', 'DESC')
                    ->whereIn('category_id', $listId)
                    ->get();

                $end_page = 1;
                if (count($product_qty) > $limit) {
                    $end_page = ceil(count($product_qty) / $limit);
                }
                //////end_page

                return response()->json(

                    ['success' => true, 'message' => "tai du lieu thanh cong", 'OneProductByCategory' => $Category, 'ProductsByCategory' => $ProductsByCategory,'ProductsByBrand' => $ProductsByBrand,
                     'brand_all' => $BrandAll, 'products_qty' => count($ProductsByCategory), 'end_page' => $end_page],
                    200

                );
            } else {
                if ($filter === 'bestsaller') {
                    $offset = ($page - 1) * $limit;
                    $product_store = DB::table('product_store')
                        ->join("product", 'product_store.product_id', '=', 'product.id')
                        ->where('product_store.status', 1)
                        ->select('product_id', 'product.name as product_name', 'product.slug as product_slug', 'product.image as product_image', 'product.price as import_price', "product_store.price as listed_price", 'product.category_id', 'product.brand_id', 'product.short_description as product_short_description', 'product.detail as product_detail', 'product_store.qty as store_qty', 'product_store.qty_sold as qty_sold_product_store', 'product_store.status as store_status', 'product_store.created_at as store_created_date');

                    $store_product_sale = DB::table('product_sale')
                        ->rightJoinSub($product_store, 'products', function (JoinClause $join) {
                            $join->on('products.product_id', '=', 'product_sale.product_id')

                                ->where([['product_sale.status', 1], ['product_sale.date_begin', '<=', date('Y-m-d H:i:s')], ['product_sale.date_end', '>=', date('Y-m-d H:i:s')]]);
                        })

                        ->select('products.*', 'product_sale.sale_id', 'product_sale.date_begin', 'product_sale.date_end', 'product_sale.qty as sale_qty', 'product_sale.qty_sold as qty_sold_product_sale', 'product_sale.status as sale_status', 'product_sale.created_at as sale_created_date');

                    if ($request->min_max_price !== []) {
                        $store_saleid_products = DB::table('sale_id')
                            ->rightJoinSub($store_product_sale, 'store_product_sale', function (JoinClause $join) {
                                $join->on('store_product_sale.sale_id', '=', 'sale_id.id')
                                    ->where('sale_id.status', 1);
                            })
                            ->WhereBetween('sale_id.price_sale', [$request->min_max_price[0], $request->min_max_price[1]])
                            ->orwhereBetween('listed_price', [$request->min_max_price[0], $request->min_max_price[1]])
                            ->select('store_product_sale.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');
                    } else {
                        $store_saleid_products = DB::table('sale_id')
                            ->rightJoinSub($store_product_sale, 'store_product_sale', function (JoinClause $join) {
                                $join->on('store_product_sale.sale_id', '=', 'sale_id.id')
                                    ->where('sale_id.status', 1);
                            })
                            ->select('store_product_sale.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');

                    }
                    if ($store_saleid_products->get()->count() == 0) {
                        return response()->json(

                            ['success' => false, 'message' => "tai du lieu khong thanh cong"],
                            200

                        );
                    }
                    $store_saleid_category_products = DB::table('category')
                        ->rightJoinSub($store_saleid_products, 'store_saleid_products', function (JoinClause $join) {
                            $join->on('store_saleid_products.category_id', '=', 'category.id')
                                ->where('category.status', 1);
                        })
                        ->select('store_saleid_products.*', 'category.name as category_name', 'category.slug as category_slug', 'category.image as category_image', 'category.description as category_description');

                    $listIdBrand = array();
                    if (count($request->brand_id) > 0) {
                        foreach ($request->brand_id as $it) {
                            array_push($listIdBrand, (int) $it);
                        }
                    }
                    if (count($listIdBrand) > 0) {
                        $store_saleid_category_brand_products = DB::table('brand')
                            ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                                $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                                    ->where('brand.status', 1);
                            })
                            ->whereIn('brand.id', $request->brand_id)
                            ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');

                    } else {
                        $store_saleid_category_brand_products = DB::table('brand')
                            ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                                $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                                    ->where('brand.status', 1);
                            })
                            ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');
                    }

                    $Brand = $cat->first();

                    $listId = array();
                    array_push($listId, $Brand->id);
                    $args_cat1 = [
                       
                        ['status', '=', 1]
                    ];
                    $list_category1 = DB::table('brand')->where($args_cat1)->get();
                    if (count($list_category1) > 0) {
                        foreach ($list_category1 as $row1) {
                            array_push($listId, $row1->id);
                            $args_cat2 = [
                             
                                ['status', '=', 1]
                            ];
                            $list_category2 = Brand::where($args_cat2)->get();
                            if (count($list_category2) > 0) {
                                foreach ($list_category2 as $row2) {
                                    array_push($listId, $row2->id);
                                }
                            }
                        }
                    }


                    $ProductsByCategory = DB::table('coment_rating')
                        ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                            $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');

                        })
                        ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                        ->groupBy('product_id')
                        ->orderBy('qty_sold_product_store', 'DESC')
                        ->whereIn('category_id', $listId)
                        ->limit($limit)
                        ->offset($offset)
                        ->get();
                        $ProductsByBrand = DB::table('coment_rating')
                        ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                            $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');

                        })
                        ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                        ->groupBy('product_id')
                        ->orderBy('qty_sold_product_store', 'DESC')
                        ->whereIn('brand_id', $listId)
                        ->limit($limit)
                        ->offset($offset)
                        ->get();

                    //////end_page
                    $product_qty = DB::table('coment_rating')
                        ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                            $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                        })
                        ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty '))
                        ->groupBy('product_id')
                        ->orderBy('qty_sold_product_store', 'DESC')
                        ->whereIn('category_id', $listId)
                        ->get();
                    $end_page = 1;
                    if (count($product_qty) > $limit) {
                        $end_page = ceil(count($product_qty) / $limit);
                    }
                    //////end_page

                    return response()->json(

                        ['success' => true, 'message' => "tai du lieu thanh cong", 'OneProductByCategory' => $Category,
                         'ProductsByCategory' => $ProductsByCategory, 'ProductsByBrand' => $ProductsByBrand,'brand_all' => $BrandAll, 'products_qty' => count($ProductsByCategory), 'end_page' => $end_page],
                        200

                    );
                } else if ($filter === 'sale') {
                    $offset = ($page - 1) * $limit;
                    $product_store = DB::table('product_store')
                        ->join("product", 'product_store.product_id', '=', 'product.id')
                        ->where('product_store.status', 1)
                        ->select('product_id', 'product.name as product_name', 'product.slug as product_slug', 'product.image as product_image', 'product.price as import_price', "product_store.price as listed_price", 'product.category_id', 'product.brand_id', 'product.short_description as product_short_description', 'product.detail as product_detail', 'product_store.qty as store_qty', 'product_store.qty_sold as qty_sold_product_store', 'product_store.status as store_status', 'product_store.created_at as store_created_date');

                    $store_product_sale = DB::table('product_sale')
                        ->rightJoinSub($product_store, 'products', function (JoinClause $join) {
                            $join->on('products.product_id', '=', 'product_sale.product_id')
                                ->where([['product_sale.status', 1], ['product_sale.date_begin', '<=', date('Y-m-d H:i:s')], ['product_sale.date_end', '>=', date('Y-m-d H:i:s')]]);
                        })
                        ->select('products.*', 'product_sale.sale_id', 'product_sale.date_begin', 'product_sale.date_end', 'product_sale.qty as sale_qty', 'product_sale.qty_sold as qty_sold_product_sale', 'product_sale.status as sale_status', 'product_sale.created_at as sale_created_date');

                    if ($request->min_max_price !== []) {
                        $store_saleid_products = DB::table('sale_id')
                            ->rightJoinSub($store_product_sale, 'store_product_sale', function (JoinClause $join) {
                                $join->on('store_product_sale.sale_id', '=', 'sale_id.id')
                                    ->where('sale_id.status', 1);
                            })
                            ->WhereBetween('sale_id.price_sale', [$request->min_max_price[0], $request->min_max_price[1]])
                            ->orwhereBetween('listed_price', [$request->min_max_price[0], $request->min_max_price[1]])
                            ->select('store_product_sale.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');
                    } else {
                        $store_saleid_products = DB::table('sale_id')
                            ->rightJoinSub($store_product_sale, 'store_product_sale', function (JoinClause $join) {
                                $join->on('store_product_sale.sale_id', '=', 'sale_id.id')
                                    ->where('sale_id.status', 1);
                            })
                            ->select('store_product_sale.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');

                    }
                    if ($store_saleid_products->get()->count() == 0) {
                        return response()->json(

                            ['success' => false, 'message' => "tai du lieu khong thanh cong"],
                            200

                        );
                    }
                    $store_saleid_category_products = DB::table('category')
                        ->rightJoinSub($store_saleid_products, 'store_saleid_products', function (JoinClause $join) {
                            $join->on('store_saleid_products.category_id', '=', 'category.id')
                                ->where('category.status', 1);
                        })
                        ->select('store_saleid_products.*', 'category.name as category_name', 'category.slug as category_slug', 'category.image as category_image', 'category.description as category_description');

                    $listIdBrand = array();
                    if (count($request->brand_id) > 0) {
                        foreach ($request->brand_id as $it) {
                            array_push($listIdBrand, (int) $it);
                        }
                    }
                    if (count($listIdBrand) > 0) {
                        $store_saleid_category_brand_products = DB::table('brand')
                            ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                                $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                                    ->where('brand.status', 1);
                            })
                            ->whereIn('brand.id', $request->brand_id)
                            ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');

                    } else {
                        $store_saleid_category_brand_products = DB::table('brand')
                            ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                                $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                                    ->where('brand.status', 1);
                            })
                            ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');
                    }

                    $Brand = $cat->first();

                    $listId = array();
                    array_push($listId, $Brand->id);
                    $args_cat1 = [
                      
                        ['status', '=', 1]
                    ];

                    $list_category1 = DB::table('brand')->where($args_cat1)->get();
                    if (count($list_category1) > 0) {
                        foreach ($list_category1 as $row1) {
                            array_push($listId, $row1->id);
                            $args_cat2 = [
                              
                                ['status', '=', 1]
                            ];
                            $list_category2 = Brand::where($args_cat2)->get();
                            if (count($list_category2) > 0) {
                                foreach ($list_category2 as $row2) {
                                    array_push($listId, $row2->id);
                                }
                            }
                        }
                    }

                    $ProductsByCategory = DB::table('coment_rating')
                        ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                            $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                        })
                        ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                        ->groupBy('product_id')
                        ->orderBy('store_created_date', 'DESC')
                        ->whereIn('category_id', $listId)
                        ->where('sale_id', '!=', null)
                        ->limit($limit)
                        ->offset($offset)
                        ->get();
                        $ProductsByBrand = DB::table('coment_rating')
                        ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                            $join->on('store_saleid_category_brand_products.product_id', '=', 'coment_rating.product_id');
                        })
                        ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                        ->groupBy('product_id')
                        ->orderBy('store_created_date', 'DESC')
                        ->whereIn('brand_id', $listId)
                        ->where('sale_id', '!=', null)
                        ->limit($limit)
                        ->offset($offset)
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
                        ->whereIn('category_id', $listId)
                        ->get();
                    $end_page = 1;
                    if (count($product_qty) > $limit) {
                        $end_page = ceil(count($product_qty) / $limit);
                    }
                    //////end_page


                    return response()->json(

                        ['success' => true, 'message' => "tai du lieu thanh cong", 'OneProductByBrand' => $Brand, 'ProductsByCategory' => $ProductsByCategory,
                        'ProductsByBrand' => $ProductsByBrand,
                         'brand_all' => $BrandAll, 'products_qty' => count($ProductsByCategory), 'end_page' => $end_page],
                        200

                    );
                } else {
                    return response()->json(

                        ['success' => false, 'message' => "tai du khong lieu thanh cong"],
                        200

                    );
                }
            }
        } else {
            return response()->json(

                ['success' => false, 'message' => "tai du khong lieu thanh cong, brand_id khong ton tai"],
                200

            );

        }



    }



}
