
const{createUser}= require('../../src/users/UsersClient')

test("Should Not Allow to Create User With InValid email", async () => {
  const body = {
    firstName: "John Doe",
    lastName: "poojitha",
    email: 'poojithahdejkew@gmail.com'
  }
  try {
    const response = await createUser(body);
  } catch (error) {
    expect(error.response.status).toBe(400);
    expect(error.response.data.data.email).toBe("Email already used");
  }
});

test("Should not Allow to create user with firstName as Blank",async()=>{
    const body = {
        firstName: "",
        lastName: "poojitha",
        email: 'poojithahdejkew@gmail.com'
      }
      try {
        const response = await createUser(body);
      } catch (error) {
        expect(error.response.status).toBe(400);
        expect(error.response.data.data.firstName.startsWith("Path `firstName` is required.")).toBeTruthy();
      }
    });

test("Should not Allow to create user with lastName as Blank",async()=>{
        const body = {
            firstName: "Poojitha",
            lastName: "",
            email: 'poojithahdejkew@gmail.com'
          }
          try {
            const response = await createUser(body);
          } catch (error) {
            expect(error.response.status).toBe(400);
            expect(error.response.data.data.lastName.startsWith("Path `lastName` is required.")).toBeTruthy();
          }
        });