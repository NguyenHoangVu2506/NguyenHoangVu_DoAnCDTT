import httpapi from '../httpapi'

function getAll(limit,page){
    return httpapi.get('topic/index/'+limit+'/'+page);
}

function getById(id){
    return httpapi.get('topic/show/'+id);

}
function create(topic){
    return httpapi.post('topic/store',topic);
}
function update(id,topic){
    return httpapi.post('topic/update/'+id,topic);

}
function remove(id){
    return httpapi.delete('topic/destroy/'+id);

}
function getTopicByParentId(parent_id){
    return httpapi.get(`topic_list/${parent_id}`);
}
function getBySlug(slug)
{
    return httpapi.get("topic/show/"+slug);
}
function getTrash(){
    return httpapi.get('topic/trash');
}

function deleteTrash(id){
    return httpapi.get('topic/trash/'+id);
}

function RescoverTrash(id){
    return httpapi.get('topic/restore/'+id);
}
const topicservice = {
    getTrash:getTrash,
    deleteTrash:deleteTrash,
    RescoverTrash:RescoverTrash,
    getTopicByParentId:getTopicByParentId,
    getBySlug:getBySlug,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default topicservice;