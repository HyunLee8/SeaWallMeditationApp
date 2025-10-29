//=================================================================================================
//PURPOSE:
//Defining the struct of Data table so backend can understand us
// - i get to write SQL in TS
// - characteristics of users -> put into users.ts
//handle user signup in a safe way
//=================================================================================================
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  password: text("password").notNull(), // You’ll hash this before saving
  createdAt: timestamp("created_at").defaultNow(),
});
