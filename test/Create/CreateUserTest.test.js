
const {createUser}= require('../../src/users/UsersService');
const {createUserRequestBody}=require('../../src/users/create/CreateRequestBody')

test("Should able to Create User", async () => {
  const requestBody=await createUserRequestBody();
  const response = await createUser(requestBody);
  expect(response.status).toBe(200);
  expect(response.data.id).not.toBeNull();
});
