
const {createUser,getUserById}= require('../../src/users/UsersService');
const {createUserRequestBody}=require('../../src/users/create/CreateRequestBody')

test("Should Able to Create User and Get User", async () => {

   const requestBody=await createUserRequestBody();
   const response = await createUser(requestBody);
   expect(response.status).toBe(200);
   expect(response.data.id).not.toBeNull();
   
   const user= await getUserById(response.data.id);
   expect(user.status).toBe(200);
   expect(user.data.id).toBe(response.data.id);
   expect(user.data.firstName).toBe(requestBody.firstName);
   expect(user.data.lastName).toBe(requestBody.lastName);
   expect(user.data.email).toBe(requestBody.email);
  });
  