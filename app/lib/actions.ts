'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';


const storefrontSchema = z.object({
   id: z.string(),
   owner_name: z.string().min(1, { message: 'Owner name is required' }),
   business_name: z.string().min(1, { message: 'Business name is required' }),
   phone: z.string().min(1, { message: 'Phone number is required' }),
   email: z.email({ message: 'Email is required' }),
   gst_number: z.string().optional(),
   street: z.string().optional(),
   city: z.string().optional(),
   state: z.string().optional(),
   zip: z.string().optional()
});

export type State = {
   message?: string | null;
   errors?: {
      owner_name?: string[];
      business_name?: string[];
      phone?: string[];
      email?: string[];
      gst_number?: string[];
      street?: string[];
      city?: string[];
      state?: string[];
      zip?: string[];
   }
}

const CreateStorefront = storefrontSchema.omit({ id: true });

export async function createStorefront(prevState: State, formData: FormData) {
   const parsedData = CreateStorefront.safeParse(
      Object.fromEntries(formData.entries())
   );
   console.log(parsedData);

   if (!parsedData.success) {
      return {
         ...prevState,
         errors: parsedData.error.flatten().fieldErrors,
         message: 'Missing required fields or invalid data to register.'
      };
   }
   console.log('Parsed Data:', parsedData);
   const { owner_name, business_name, phone, email, gst_number, street, city, state, zip } = parsedData.data;
   try {
      const result = await sql`
         INSERT INTO store ( owner_name, business_name, phone, email, gst_number, street, city, state, zip)
         VALUES (${owner_name}, ${business_name}, ${phone}, ${email}, ${gst_number}, ${street}, ${city}, ${state}, ${zip})
         RETURNING *;
      `;

      return result.rows[0];
   } catch (error) {
      console.error('Error creating store:', error);
      throw new Error('Failed to create store');
   }
}


/* export async function checkDbConnection() {
   try {
      // Execute a simple query to test the connection
      const result = await sql`SELECT * FROM store`;

      // If the query succeeds, the connection is likely working
      console.log('Neon DB connection successful:', result.rows);
      return { success: true, message: 'Database connected successfully.' };
   } catch (error) {
      // If an error occurs, the connection might be problematic
      console.error('Neon DB connection error:', error);
      return { success: false, message: `Database connection failed:` };
   }
} */