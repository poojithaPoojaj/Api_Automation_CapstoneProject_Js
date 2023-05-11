
const { getAllUsersResponse,getResponseByUserId,getResponseByPostId,createUserAndGetResponse,createPostandGetResponse,deletePostByIdAndGetResponse,getResponseForAllUsersWithLimit,getResponseForAllUsersInOurAccount}= require('./UsersClient')

const getAllUsers=async()=>{
   return await getAllUsersResponse();
}
const getUserById=async(id)=>{
    return await getResponseByUserId(id);
}
const getPostById=async(id)=>{
    return await getResponseByPostId(id);
}
const  createUser=async(body)=>{
    return createUserAndGetResponse(body);
}
const getUsersWithLimit=async(limit)=>{
   return  await getResponseForAllUsersWithLimit(limit);
}
const deletePostById=async(id)=>{
    return await deletePostByIdAndGetResponse(id);
}
const createPost=async(ownerId)=>{
 return await createPostandGetResponse(ownerId);
}
const getAllUsersInOurAccount=async()=>{
   return await getResponseForAllUsersInOurAccount();
}

module.exports={getAllUsers,getUserById,createUser,getPostById,getUsersWithLimit,deletePostById,createPost,getAllUsersInOurAccount};