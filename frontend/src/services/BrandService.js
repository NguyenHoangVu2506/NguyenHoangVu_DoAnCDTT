import httpapi from '../httpapi'

function getAll(){
    return httpapi.get('brand/index');
}

function getById(id){
    return httpapi.get('brand/show/'+id);

}
function create(brand){
    return httpapi.post('brand/store',brand);
}
function update(id,brand){
    return httpapi.post('brand/update/'+id,brand);

}
function remove(id){
    return httpapi.delete('brand/destroy/'+id);

}
function getBySlug(slug)
{
    return httpapi.get("brand/show/"+slug);
}
function getBrandByParentId(parent_id){
    return httpapi.get(`brand_list/${parent_id}`);
}
const brandservice = {
    getBrandByParentId:getBrandByParentId,
    getBySlug:getBySlug,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default brandservice;