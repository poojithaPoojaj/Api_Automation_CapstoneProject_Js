const{deletePostById}= require('../../src/users/UsersClient')

test("Should able to Delete Post By Id", async () => {
  let id='64534754c5530b23504d1ed3'
  const response = await deletePostById(id);
  expect(response.status).toBe(200);
  expect(response.data.id).toBe(id);
});