//=================================================================================================
//PURPOSE:
//How to handle user management API 
//handle user signup in a safe way
//=================================================================================================
import { Hono } from "hono"; // imports Hono Framework
import userRoute from "./routes/users"; //imports the user route made 

const app = new Hono(); //new instance for Hono; root for backend

app.route("/users", userRoute); //first paramter is for base path: /users or /users/123. it will not match /posts

