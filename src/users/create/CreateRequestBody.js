
       async function createUserRequestBody(email){
       return { firstName: "John Doe",
        lastName : "poojitha",
         email  :  email||Date.now().toString()+'@gmail.com'
       }
       }

       async function createPostRequestBody(){
        return{
        owner:'60d0fe4f5311236168a109cd'
        }
       }

       module.exports={createUserRequestBody,createPostRequestBody};