const{createPost}= require('../../src/users/UsersClient')
const {createPostRequestBody}=require('../../src/users/create/CreateRequestBody')


test("Should able to Create Post", async () => {
  const requestBody=await createPostRequestBody();
  const response = await createPost(requestBody);
  expect(response.status).toBe(200);
  expect(response.id).not.toBeNull();
  expect(response.data.owner.id).toEqual(requestBody.owner);
});