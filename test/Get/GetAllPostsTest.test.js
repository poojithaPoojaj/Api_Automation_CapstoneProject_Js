const{getAllUsers}= require('../../src/users/UsersClient')

test("Should able to Get All Post", async () => {
  const allUsers = await getAllUsers();
  expect(allUsers.status).toBe(200);
  expect(allUsers.data.limit).toBe(20);
});