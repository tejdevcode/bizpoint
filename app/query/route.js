import { db } from '@vercel/postgres';


const client = await db.connect();

/* import { neon } from '@neondatabase/serverless';
const sql = neon(`${process.env.DATABASE_URL}`); */


async function stores() {

   const { rows } = await client.sql`
   SELECT * FROM store`;
   console.log('rows', rows);
   return rows;
}
/* export async function GET() {
   try {
      return Response.json({
         "stores": await sql`
            SELECT * FROM store1`
      });
   } catch (error) {
      console.error('Error fetching stores:', error);
      return new Response('Internal Server Error', { status: 500 });
   }
} */

export async function GET() {
   try {
      return Response.json(await stores());
   } catch (error) {
      console.error('Error fetching stores:', error);
      return new Response('Internal Server Error', { status: 500 });
   }
}