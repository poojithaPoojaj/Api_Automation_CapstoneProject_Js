
const {getAllUsers,getUsersWithLimit,getAllUsersInOurAccount}= require('../../src/users/UsersService');

test("Should able to Get All Users", async () => {
  const allUsers = await getAllUsers();
  expect(allUsers.status).toBe(200);
  console.log(allUsers.data.limit);
  // expect(allUsers.result.limit).toBe(20);
});

test("Should able to Get Users With Specific limit", async () => {
  let limit =10;
  const response = await getUsersWithLimit(limit);
  expect(response.status).toBe(200);
  expect(response.data.limit).toBe(10);
  // expect(response.data.limit).toBe(limit);

});
test("Should able to Get All Users In Our Account", async () => {
  const response = await getAllUsersInOurAccount();
  expect(response.status).toBe(200);
});
