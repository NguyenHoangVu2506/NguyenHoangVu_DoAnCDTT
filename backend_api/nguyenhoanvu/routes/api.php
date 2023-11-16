<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\SliderController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\TopicController;
use App\Http\Controllers\Api\SingleController;

use App\Http\Controllers\Backend\StoreProductsController_Backend;
use App\Http\Controllers\Backend\UserController_Backend;
use App\Http\Controllers\Api\SaleProductController;
use App\Http\Controllers\Api\StoreProductController;
// use App\Http\Controllers\Api\MailController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//
Route::get('slider_list/{position}', [SliderController::class, 'slider_list']);
Route::get('topic_list/{parent_id?}', [TopicController::class, 'topic_list']);

Route::get('product_home/{limit}/{category_id?}', [ProductController::class, 'product_home']);
// Route::get('product_all/{limit}/{page?}', [ProductController::class, 'product_all']);
// Route::get('product_new/{limit}/{page?}', [ProductController::class, 'product_new']);
// Route::get('product_sale/{limit}/{page?}', [ProductController::class, 'product_sale']);
// Route::get('product_hot/{limit}/{page?}', [ProductController::class, 'product_hot']);
// Route::get('product_other/{id}/{limit}', [ProductController::class, 'product_other']);
//////////////////////
Route::get('product_category/{category_id}/{limit}/{page}', [ProductController::class, 'product_category']);
Route::get('new_product_all/{limit}/{page}', [ProductController::class, 'new_product_all']);
Route::get('product_detail/{slug}', [ProductController::class, 'product_detail']);
Route::get('bestsallers_all/{limit}/{page}', [ProductController::class, 'bestsallers_all']);
Route::get('sale_product_all/{limit}/{page}', [ProductController::class, 'sale_product_all']);
/////////////////////////
Route::prefix('product_store')->group(function () {
    Route::get('getBestsallerProductAll/{limit}/{page?}', [StoreProductController::class, 'getBestsallerProductAll']);
    Route::get('getNewProductAll/{limit}/{page?}', [StoreProductController::class, 'getNewProductAll']);
    Route::get('getProductByCategory/{limit}/{page?}/{slug}', [StoreProductController::class, 'getProductByCategory']);
    Route::get('getProductByBrand/{limit}/{page?}/{slug}', [StoreProductController::class, 'getProductByBrand']);

    Route::get('product_detail/{slug}/{other_product_limit}/{comment_limit}', [StoreProductController::class, 'product_detail']);
    Route::post('ProductByCategory_filter/{limit}/{page?}/{slug}/{filter?}', [StoreProductController::class, 'ProductByCategory_filter']);
    Route::post('ProductByBrand_filter/{limit}/{page?}/{slug}/{filter?}', [StoreProductController::class, 'ProductByBrand_filter']);

    Route::post('NewProductAll_filter/{limit}/{page?}', [StoreProductController::class, 'NewProductAll_filter']);
    Route::post('BestSallersProductAll_filter/{limit}/{page?}', [StoreProductController::class, 'BestSallersProductAll_filter']);
    Route::get('ProductsByCategory/{limit}/{page?}/{slug}', [StoreProductController::class, 'ProductsByCategory']);

});
//////////////////////
Route::prefix('product_sale')->group(function () {
    Route::get('getSaleProductAll/{limit}/{page?}', [SaleProductController::class, 'getSaleProductAll']);
    Route::post('SaleProductAll_filter/{limit}/{page?}', [SaleProductController::class, 'SaleProductAll_filter']);
    Route::post('store',[SaleProductController::class,'store']);

});



Route::post('login_admin', [UserController_Backend::class, 'login_admin']);

Route::prefix('brand')->group(function(){
    Route::get('index',[BrandController::class,'index']);
    Route::get('show/{id}',[BrandController::class,'show']);
    Route::post('store',[BrandController::class,'store']);
    Route::post('update/{id}',[BrandController::class,'update']);
    Route::delete('destroy/{id}', [BrandController::class, 'destroy']);
    Route::get('trash', [BrandController::class, 'trash']);
    Route::get('trash/{id}', [BrandController::class, 'deleteTrash']);
    Route::get('restore/{id}', [BrandController::class, 'RescoverTrash']);
    Route::get('status/{id}', [BrandController::class, 'status']);

});

Route::prefix('category')->group(function(){
    Route::get('category_list', [CategoryController::class, 'category_list']);
    Route::get('index',[CategoryController::class,'index']);
    Route::get('show/{id}',[CategoryController::class,'show']);
    Route::get('showslug/{slug}',[CategoryController::class,'showslug']);

    Route::post('store',[CategoryController::class,'store']);
    Route::post('update/{id}',[CategoryController::class,'update']);
    Route::delete('destroy/{id}', [CategoryController::class, 'destroy']);
    Route::get('trash', [CategoryController::class, 'trash']);
    Route::get('trash/{id}', [CategoryController::class, 'deleteTrash']);
    Route::get('restore/{id}', [CategoryController::class, 'RescoverTrash']);
    Route::get('status/{id}', [CategoryController::class, 'status']);
    Route::get('getCategory', [CategoryController::class, 'getCategory']);

});
Route::prefix('product')->group(function(){
    Route::get('index/{limit}/{page?}',[ProductController::class,'index']);
    Route::get('show/{id}',[ProductController::class,'show']);
    Route::post('store',[ProductController::class,'store']);
    Route::post('update/{id}',[ProductController::class,'update']);
    Route::delete('destroy/{id}', [ProductController::class, 'destroy']);
    Route::get('product_category/{category_id}/{limit}', [ProductController::class, 'product_category']);
    Route::get('product_brand/{brand_id}/{limit}', [ProductController::class, 'product_brand']);
    Route::get('product_detail/{slug}', [ProductController::class, 'product_detail']);
    Route::get('product_detail/{id}', [ProductController::class, 'product_detail']);
    Route::get('search_product/{key}/{limit}/{page?}', [ProductController::class, 'search_product']);
    Route::get('trash', [ProductController::class, 'trash']);
    Route::get('trash/{id}', [ProductController::class, 'deleteTrash']);
    Route::get('restore/{id}', [ProductController::class, 'RescoverTrash']);
    Route::get('status/{id}', [ProductController::class, 'status']);

});
Route::prefix('menu')->group(function(){
    Route::get('menu_list/{position}/{parent_id?}', [MenuController::class, 'menu_list']);
    Route::get('index',[MenuController::class,'index']);
    Route::get('show/{id}',[MenuController::class,'show']);
    Route::post('store',[MenuController::class,'store']);
    Route::post('update/{id}',[MenuController::class,'update']);
    Route::delete('destroy/{id}', [MenuController::class, 'destroy']);
});
Route::prefix('contact')->group(function(){
    Route::get('index',[ContactController::class,'index']);
    Route::get('show/{id}',[ContactController::class,'show']);
    Route::post('store',[ContactController::class,'store']);
    Route::post('update/{id}',[ContactController::class,'update']);
    Route::delete('destroy/{id}', [ContactController::class, 'destroy']);
    Route::get('trash', [ContactController::class, 'trash']);

    Route::get('trash/{id}', [ContactController::class, 'deleteTrash']);
    Route::get('restore/{id}', [ContactController::class, 'RescoverTrash']);
    Route::get('status/{id}', [ContactController::class, 'status']);
});
Route::prefix('order')->group(function(){
    Route::get('index',[OrderController::class,'index']);
    Route::get('show/{id}',[OrderController::class,'show']);
    Route::post('store',[OrderController::class,'store']);
    Route::post('update/{id}',[OrderController::class,'update']);
    Route::delete('destroy/{id}', [OrderController::class, 'destroy']);
});
Route::prefix('orderdetail')->group(function(){
    Route::get('index',[OrderdetailController::class,'index']);
    Route::get('show/{id}',[OrderdetailController::class,'show']);
    Route::post('store',[OrderdetailController::class,'store']);
    Route::post('update/{id}',[OrderdetailController::class,'update']);
    Route::delete('destroy/{id}', [OrderdetailController::class, 'destroy']);
});
Route::prefix('post')->group(function(){
    Route::get('index/{limit}/{page?}',[PostController::class,'index']);
    Route::get('show/{id}',[PostController::class,'show']);
    Route::post('store',[PostController::class,'store']);
    Route::post('update/{id}',[PostController::class,'update']);
    Route::delete('destroy/{id}', [PostController::class, 'destroy']);
    Route::get('trash', [PostController::class, 'trash']);
    Route::get('trash/{id}', [PostController::class, 'deleteTrash']);
    Route::get('restore/{id}', [PostController::class, 'RescoverTrash']);
    Route::get('status/{id}', [PostController::class, 'status']);
    Route::get('getpageAll', [PostController::class, 'getPageAll']);

});
Route::prefix('slider')->group(function(){
    Route::get('index',[SliderController::class,'index']);
    Route::get('show/{id}',[SliderController::class,'show']);
    Route::post('store',[SliderController::class,'store']);
    Route::post('update/{id}',[SliderController::class,'update']);
    Route::delete('destroy/{id}', [SliderController::class, 'destroy']);
    Route::get('trash', [SliderController::class, 'trash']);
    Route::get('trash/{id}', [SliderController::class, 'deleteTrash']);
    Route::get('restore/{id}', [SliderController::class, 'RescoverTrash']);
    Route::get('status/{id}', [SliderController::class, 'status']);
});
Route::prefix('topic')->group(function(){
    Route::get('index/{limit}/{page?}',[TopicController::class,'index']);
    Route::get('show/{id}',[TopicController::class,'show']);
    Route::post('store',[TopicController::class,'store']);
    Route::post('update/{id}',[TopicController::class,'update']);
    Route::delete('destroy/{id}', [TopicController::class, 'destroy']);
    Route::get('trash', [TopicController::class, 'trash']);
    Route::get('trash/{id}', [TopicController::class, 'deleteTrash']);
    Route::get('restore/{id}', [TopicController::class, 'RescoverTrash']);
    Route::get('status/{id}', [TopicController::class, 'status']);
});
Route::prefix('user')->group(function(){
    Route::get('index/{roles}',[UserController::class,'index']);
    Route::get('show/{id}',[UserController::class,'show']);
    Route::post('store',[UserController::class,'store']);
    Route::post('update/{id}',[UserController::class,'update']);
    Route::delete('destroy/{id}', [UserController::class, 'destroy']);

    Route::post('adduser', [UserController::class, 'AddUser']);
    Route::post('login', [UserController::class, 'Login']);
    Route::get('trash/{roles}', [UserController::class, 'trash']);
    Route::get('deltrash/{id}', [UserController::class, 'deleteTrash']);
    Route::get('restore/{id}', [UserController::class, 'RescoverTrash']);
    Route::get('status/{id}', [UserController::class, 'status']);
    

});

Route::prefix('post')->group(function(){
    Route::get('index',[PostController::class,'index']);
    Route::get('show/{id}',[PostController::class,'show']);
    Route::post('store',[PostController::class,'store']);
    Route::post('update/{id}',[PostController::class,'update']);
    Route::delete('destroy/{id}', [PostController::class, 'destroy']);
    Route::get('post_list/{limit}', [PostController::class, 'post_list']);
    Route::get('post_all/{limit}/{page?}', [PostController::class, 'post_all']);
    Route::get('post_topic/{limit}/{page?}/{topic_id}', [PostController::class, 'post_topic']);
    Route::get('post_detail/{slug}', [PostController::class, 'post_detail']);
    Route::get('post_other/{id}/{limit}', [PostController::class, 'post_other']);
});
Route::prefix('store_products_admin')->group(function () {
    Route::get('getProductAndStoreProduct', [StoreProductsController_Backend::class, 'getProductAndStoreProduct']);
    Route::post('add_store_product', [StoreProductsController_Backend::class, 'add_store_product']);
    Route::post('remove_store_product', [StoreProductsController_Backend::class, 'remove_store_product']);
});