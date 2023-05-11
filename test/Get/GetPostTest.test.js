const {getPostById}= require('../../src/users/UsersService');

test("Should able to Get Post by Id", async () => {
    const id='60d21bd767d0d8992e610e31';
    const response =await getPostById(id);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(id);
});