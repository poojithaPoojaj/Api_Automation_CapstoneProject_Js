const axios = require("axios");

const getAllUsers=async ()=> {
  const result = await axios.get("https://dummyapi.io/data/v1/user", {headers: {
    "app-id": "644a5bc4aa25ea9dea306cf4",
  }
  });
  console.log(result.data);
  return result;
}

const getUserById=async(id) =>{
  const result = await axios.get(`https://dummyapi.io/data/v1/user/${id}`, {headers: {
    "app-id": "644a5bc4aa25ea9dea306cf4",
  }
  });
  console.log(result.data.id);
  return result;
}

const getPostById=async (id) =>{
  const result = await axios.get(`https://dummyapi.io/data/v1/post/${id}`, {headers: {
    "app-id": "644a5bc4aa25ea9dea306cf4",
  }
  });
  console.log(result.data);
  return result;
  
}

const createUser=async (body) =>{
  const result = await axios.post("https://dummyapi.io/data/v1/user/create",body, { headers: {
    "app-id": "644a5bc4aa25ea9dea306cf4",
    "Content-Type": "application/json",
  }
});
  console.log(result.data);
  return result;
  
}

const getUsersWithLimit=async (limit)=>{
  const result = await axios.get(`https://dummyapi.io/data/v1/user?limit=${limit}`, { headers: {
    "app-id": "644a5bc4aa25ea9dea306cf4"
  }
});
  console.log(result.data);
  return result;
}

const getAllUsersInOurAccount=async ()=>{
  const result = await axios.get('https://dummyapi.io/data/v1/user?created=1', { headers: {
    "app-id": "644a5bc4aa25ea9dea306cf4"
  }
});
  console.log(result.data);
  return result;
}

const deletePostById=async (id)=>{
  const result = await axios.get(`https://dummyapi.io/data/v1/post/${id}`, { headers: {
    "app-id": "644a5bc4aa25ea9dea306cf4"}
});
  console.log(result.data);
  return result;
}

const createPost=async (body)=>{
  const result = await axios.post('https://dummyapi.io/data/v1/post/create',body,{ headers: {
    "app-id": "644a5bc4aa25ea9dea306cf4",
    "Content-Type": "application/json",
  }
});
  console.log(result.data);
  return result;
}

module.exports = { getAllUsers,getUserById,getPostById,createUser,createPost,deletePostById,getUsersWithLimit,getAllUsersInOurAccount};
