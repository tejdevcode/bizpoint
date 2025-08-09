import { z } from 'zod';

export const storefrontSchema = z.object({
   id: z.number().optional(), // changed from z.string()
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

export type storefrontState = {
   message?: string | null;
   message1?: string | null;
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

export const userSchema = z.object({
   store_id: z.coerce.number().positive({ message: 'Store ID must be a positive number' }),
   first_name: z.string().min(1, { message: 'First name is required' }),
   last_name: z.string().min(1, { message: 'Last name is required' }),
   email: z.email({ message: 'Email is required' }),
   phone: z.string().min(1, { message: 'Phone number is required' }),
   password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
   is_primary: z.coerce.boolean().optional()
});

export type userState = {
   message?: string | null;
   errors?: {
      store_id?: number[];
      first_name?: string[];
      last_name?: string[];
      email?: string[];
      phone?: string[];
      password?: string[];
      is_primary?: boolean[];
   }
}