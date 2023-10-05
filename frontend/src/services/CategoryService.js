import httpapi from '../httpapi'

function getAll(){
    return httpapi.get('category/index');
}

function getById(id){
    return httpapi.get('category/show/'+id);

}
function create(category){
    return httpapi.post('category/store',category);
}
function update(id,category){
    return httpapi.post('category/update/'+id,category);

}
function remove(id){
    return httpapi.delete('category/destroy/'+id);

}
function getCategoryByParentId(parent_id){
    return httpapi.get(`category/category_list/${parent_id}`);
}
function getBySlug(slug)
{
    return httpapi.get("category/show/"+slug);
}
const categoryservice = {
    getCategoryByParentId:getCategoryByParentId,
    getBySlug:getBySlug,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default categoryservice;