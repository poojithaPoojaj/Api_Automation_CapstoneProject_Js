const{getUserById}= require('../../src/users/UsersClient')

test("Should able to Get User by Id", async () => {
  const id='60d0fe4f5311236168a109dd';
  const response = await getUserById(id);
  expect(response.status).toBe(200);
  expect(response.data.id).toBe(id);
});



