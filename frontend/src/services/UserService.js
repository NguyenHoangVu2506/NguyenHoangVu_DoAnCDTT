import httpapi from "../httpapi";

function AddUser(user){
    return httpapi.post('user/adduser',user);
}

function Login(user){
    return httpapi.post('user/login',user);
}
function getAll(roles){
    return httpapi.get('user/index/'+ roles);
}

function getById(id){
    return httpapi.get('user/show/'+id);

}
function create(user){
    return httpapi.post('user/store',user);
}
function update(id,user){
    return httpapi.post('user/update/'+id,user);

}
function remove(id){
    return httpapi.delete('user/destroy/'+id);

}
function getTrash(roles){
    return httpapi.get('user/trash/' + roles);
}

function deleteTrash(id){
    return httpapi.get('user/deltrash/'+ id);
}

function RescoverTrash(id){
    return httpapi.get('user/restore/'+id);
}
function Login_admin(user){
    return httpapi.post('/login_admin',user);
}
const userservice = {
    Login_admin:Login_admin,
    getTrash:getTrash,
    deleteTrash:deleteTrash,
    RescoverTrash:RescoverTrash,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove,
    AddUser:AddUser,
    Login:Login
};

export default userservice;