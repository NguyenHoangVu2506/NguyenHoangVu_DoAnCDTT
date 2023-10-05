import httpapi from '../httpapi'

function getAll(){
    return httpapi.get('post/index');
}

function getById(id){
    return httpapi.get('post/show/'+id);

}
function create(post){
    return httpapi.post('post/store',post);
}
function update(id,post){
    return httpapi.post('post/update/'+id,post);

}
function remove(id){
    return httpapi.delete('post/destroy/'+id);

}
function getPostAll(limit,page=1)
{
    return httpapi.get(`post_all/${limit}/${page}`);
}
function getPostBySlug(slug)
{
    return httpapi.get(`post_detail/${slug}`);
}
function getPostByTopicId(limit,topic_id)
{
    return httpapi.get(`post_topic/${limit}/${topic_id}`);
}
function getPostHome(limit)
{
    return httpapi.get(`post_list/${limit}`);
}
const postservice = {
    getPostHome:getPostHome,
    getPostByTopicId:getPostByTopicId,
    getPostBySlug:getPostBySlug,
    getPostAll:getPostAll,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default postservice;