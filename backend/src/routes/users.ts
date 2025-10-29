//=================================================================================================
//PURPOSE:
//How to handle user management API 
//handle user signup in a safe way
//=================================================================================================
import { Hono } from "hono"; //imports Hono framwork
import { db } from "../db"   //imports the Drizzle database
import { users } from "../db/schema" //imports the table schema
import bcrypt from "bcryptjs" //encrypts user data so i can't see it (mathematically irreversible)

const userRoute = new Hono(); //creates hono app instance; later mount on the main app

userRoute.post("/", async (c) => { //the '/' is for the base route; "the base of this group of routes"
  const body = await c.req.json(); //the user sending to me to open their request in the form of JSON file
  const { name, email, password } = body; //sucks them bitchs out the body and destrcutures it. now you can use them directly

  if(!name || !email || !password) { //checks if these even can be used and are the in requested box
    return c.json({ error: "Missing Field" }, 400);
  }

  const hashedPassword = await bcrypt.hash(password, 10); //decrypts the users password after confirming they have a password, 10 salt rounds

  try {   //still need to do another check after the 1st for unexpected errors
    const newUser = await db
    .insert(users) //FROM SCHEMA USERS
    .values({ name, email, password: hashedPassword })
    .returning();  //this is for when you need to acess their informaiton, if you don't do this it will be inserted in the database but you can't retrieve it

    return c.json({ user: newUser[0] }); //must call user because it hold the value of user  EX: user: [id:, 1, name: alice, etc]. it needs to send this as one object
  } catch(err) {
    console.error(err);
    return c.json({ error: "Could not create user"}, 500); //returns a 500 internal Server Error. 100 - continue, 200 - sucess, ... , 500 -internal server error
  }
});

export default userRoute;