import httpapi from '../httpapi'

function getProductAll(limit,page=1)
{
    return httpapi.get(`product_all/${limit}/${page}`);
}
function getProductNew(limit,page=1)
{
    return httpapi.get(`product_new/${limit}/${page}`);
}
function getProductSale(limit,page=1)
{
    return httpapi.get(`product_sale/${limit}/${page}`);
}
function getProductHot(limit,page=1)
{
    return httpapi.get(`product_hot/${limit}/${page}`);
}

function getProductHome(limit,category_id)
{
    return httpapi.get(`product_home/${limit}/${category_id}`);
}
function getProductBySlug(slug)
{
    return httpapi.get(`product_detail/${slug}`);
}
function getProductById(id)
{
    return httpapi.get(`product_detail/${id}`);
}

function getProductByCategoryId(limit,category_id)
{
    return httpapi.get(`product_category/${limit}/${category_id}`);
}
function getProductByBrandId(limit,brand_id)
{
    return httpapi.get(`product_brand/${limit}/${brand_id}`);
}
function getBySlug(slug)
{
    return httpapi.get("category/show/"+slug);
}
function getAll(){
    return httpapi.get('product/index');
}

function getById(id){
    return httpapi.get('product/show/'+id);

}
function create(product){
    return httpapi.post('product/store',product);
}
function update(id,product){
    return httpapi.post('product/update/'+id,product);

}
function remove(id){
    return httpapi.delete('product/destroy/'+id);

}

const productservice = {
    getProductSale:getProductSale,
    getProductNew:getProductNew,
    getProductHot:getProductHot,
    getProductById:getProductById,
    getProductHome:getProductHome,
    getProductAll:getProductAll,
    getProductBySlug:getProductBySlug,
    getProductByCategoryId:getProductByCategoryId,
    getProductByBrandId:getProductByBrandId,
    getBySlug:getBySlug,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default productservice;