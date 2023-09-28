import httpapi from '../httpapi'

function getAll(){
    return httpapi.get('slider/index');
}

function getById(id){
    return httpapi.get('slider/show/'+id);

}
function create(slider){
    return httpapi.post('slider/store',slider);
}
function update(id,slider){
    return httpapi.post('slider/update/'+id,slider);

}
function remove(id){
    return httpapi.delete('slider/destroy/'+id);

}
function getByPosition(position){
    return httpapi.get(`slider_list/${position}`);
}
const sliderservice = {
    getByPosition:getByPosition,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default sliderservice;