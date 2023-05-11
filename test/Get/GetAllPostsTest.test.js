const {getAllUsers,getAllPosts}= require('../../src/users/UsersService');

test("Should able to Get All Post", async () => {
  const allUsers = await getAllUsers();
  expect(allUsers.status).toBe(200);
  expect(allUsers.data.limit).toBe(20);
});