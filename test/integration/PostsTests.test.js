
const{createPost,deletePostById}= require('../../src/users/UsersClient')
const {createPostRequestBody}=require('../../src/users/create/CreateRequestBody')

test("Should Able to Create Post and delete it", async () => {

  const requestBody=await createPostRequestBody();
  const response = await createPost(requestBody);
  expect(response.status).toBe(200);
  expect(response.data.id).not.toBeNull();
  expect(response.data.owner.id).toEqual(requestBody.owner);

  const deletedPost = await deletePostById(response.data.id);
  expect(deletedPost.status).toBe(200);
  expect(deletedPost.data.id).toBe(response.data.id);
  
  });
  