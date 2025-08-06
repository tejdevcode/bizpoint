import { db } from "@vercel/postgres";

const client = await db.connect();

async function seedStore() {
   await client.sql`CREATE TABLE IF NOT EXISTS store (
    id SERIAL PRIMARY KEY,
    owner_name VARCHAR(255) NOT NULL,
    business_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    gst_number VARCHAR(50),
    street VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    zip VARCHAR(20)
  )`;
}

async function seedUser() {
   await client.sql`CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      store_id INTEGER REFERENCES store(id),
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      is_primary BOOLEAN NOT NULL,
      phone VARCHAR(20) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR NOT NULL
  )`;
}




export async function GET() {
   try {
      await client.sql`BEGIN`;
      await seedStore();
      await seedUser();
      await client.sql`COMMIT`;
      return new Response("Database seeded successfully", { status: 200 });
   } catch (error) {
      console.error("Error seeding database:", error);
      await client.sql`ROLLBACK`;
      return new Response("Failed to seed database", { status: 500 });
   }
}