'use server';

import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

import { storefrontSchema, storefrontState } from './shemaVelidation';
import { userSchema, userState } from './shemaVelidation';


const CreateStorefront = storefrontSchema.omit({ id: true });

export async function createStorefront(prevState: storefrontState, formData: FormData) {
   const parsedData = CreateStorefront.safeParse(
      Object.fromEntries(formData.entries())
   );
   /* console.log(parsedData); */

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
   } catch (error: any) {
      console.error('Error creating store:', error);
      if (error.code === '23505') {
         if (error.detail?.includes('email')) {
            return {
               ...prevState,
               message: 'Email already registered.',
               errors: { email: ['Email already registered.'] }
            };
         }
         if (error.detail?.includes('phone')) {
            return {
               ...prevState,
               message: 'Phone number already registered.',
               errors: { phone: ['Phone number already registered.'] }
            };
         }
      }
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

export async function createUser(prevState: userState, formData: FormData) {
   const parsedData = userSchema.safeParse(
      Object.fromEntries(formData.entries())
   );
   console.log('Actions module loaded', parsedData);

   if (!parsedData.success) {
      return {
         ...prevState,
         errors: parsedData.error.flatten().fieldErrors,
         message: 'Missing required fields or invalid data to register.'
      };
   }

   const { store_id, first_name, last_name, email, phone, password, is_primary } = parsedData.data;
   const hashedPassword = await bcrypt.hash(password, 10);

   try {
      const result = await sql`
         INSERT INTO users (store_id, first_name, last_name, email, phone, password, is_primary)
         VALUES (${store_id}, ${first_name}, ${last_name}, ${email}, ${phone}, ${hashedPassword}, ${is_primary})
         RETURNING *;
      `;

      return result.rows[0];

   } catch (error: any) {
      console.error('Error creating user:', `${error instanceof Error ? error.message : String(error)}`);

      if (error.code === '23505') {
         if (error.detail?.includes('email')) {
            return {
               ...prevState,
               message: 'Email already registered.',
               errors: { email: ['Email already registered.'] }
            };
         }
         if (error.detail?.includes('phone')) {
            return {
               ...prevState,
               message: 'Phone number already registered.',
               errors: { phone: ['Phone number already registered.'] }
            };
         }
      }
      return {
         ...prevState,
         message: `Failed to create user. Reason: ${error instanceof Error ? error.message : String(error)}`,
         errors: {}
      };
   }
}