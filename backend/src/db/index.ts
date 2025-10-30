//importing the drizzle functions for postgres and gettings postgres in heree
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

//connects to SUPABASE; reads my URL, the require ssl at the end because SUPABASE requires an encryption
const client = postgres(process.env.SUPABASE_DB_URL!, { ssl: "require"});

//wraps my Postgres with Drizzle
export const db = drizzle(client);