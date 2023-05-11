const axios = require("axios");

const getAllUsersResponse=async ()=> {
  const result = await axios.get("https://dummyapi.io/data/v1/user", {headers: {
    "app-id": "644a5bc4aa25ea9dea306cf4",
  }
  });
  console.log(result.data);
  return result;
}

const getResponseByUserId=async(id) =>{
  const result = await axios.get(`https://dummyapi.io/data/v1/user/${id}`, {headers: {
    "app-id": "644a5bc4aa25ea9dea306cf4",
  }
  });
  console.log(result.data.id);
  return result;
}

const getResponseByPostId=async (id) =>{
  const result = await axios.get(`https://dummyapi.io/data/v1/post/${id}`, {headers: {
    "app-id": "644a5bc4aa25ea9dea306cf4",
  }
  });
  console.log(result.data);
  return result;
  
}

const createUserAndGetResponse=async (body) =>{
  const result = await axios.post("https://dummyapi.io/data/v1/user/create",body, { headers: {
    "app-id": "644a5bc4aa25ea9dea306cf4",
    "Content-Type": "application/json",
  }
});
  console.log(result.data);
  return result;
  
}

const getResponseForAllUsersWithLimit=async (limit)=>{
  const result = await axios.get(`https://dummyapi.io/data/v1/user?limit=${limit}`, { headers: {
    "app-id": "644a5bc4aa25ea9dea306cf4"
  }
});
  console.log(result.data);
  return result;
}

const getResponseForAllUsersInOurAccount=async ()=>{
  const result = await axios.get('https://dummyapi.io/data/v1/user?created=1', { headers: {
    "app-id": "644a5bc4aa25ea9dea306cf4"
  }
});
  console.log(result.data);
  return result;
}

const deletePostByIdAndGetResponse=async (id)=>{
  const result = await axios.get(`https://dummyapi.io/data/v1/post/${id}`, { headers: {
    "app-id": "644a5bc4aa25ea9dea306cf4"}
});
  console.log(result.data);
  return result;
}

const createPostandGetResponse=async (body)=>{
  const result = await axios.post('https://dummyapi.io/data/v1/post/create',body,{ headers: {
    "app-id": "644a5bc4aa25ea9dea306cf4",
    "Content-Type": "application/json",
  }
});
  console.log(result.data);
  return result;
}

module.exports = { getAllUsersResponse,getResponseByUserId,getResponseByPostId,createUserAndGetResponse,createPostandGetResponse,deletePostByIdAndGetResponse,getResponseForAllUsersWithLimit,getResponseForAllUsersInOurAccount};
