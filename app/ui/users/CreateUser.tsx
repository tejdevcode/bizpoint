"use client";

import { useActionState } from "react";
import { createUser } from "../../lib/actions";
import { userState } from "../../lib/shemaVelidation";

const CreateUser = () => {
   const initialState: userState = { message: null, errors: {} };
   const [state, formAction] = useActionState(createUser, initialState);
   console.log('CreateUser component loaded', state);
   return (
      <div className="createUser min-h-screen flex items-center justify-center bg-gray-50">
         <form className="bg-white shadow-lg rounded-lg p-8 space-y-6 w-full max-w-md mx-auto" action={formAction}>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">User Registration</h2>
            <div>
               <label htmlFor="store_id" className="block text-sm font-medium text-gray-700 mb-1"> Store ID </label>
               <input type="number" id="store_id" name="store_id"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1.5 shadow-sm focus:border-blue-500 focus:ring-blue-500" aria-describedby="store_id-error" />
               <div id="store_id-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.store_id &&
                     state.errors.store_id.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}> {error} </p>
                     ))}
               </div>
            </div>
            <div>
               <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1"> First Name </label>
               <input type="text" id="first_name" name="first_name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1.5 shadow-sm focus:border-blue-500 focus:ring-blue-500" aria-describedby="first_name-error" />
               <div id="first_name-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.first_name &&
                     state.errors.first_name.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}> {error} </p>
                     ))}
               </div>
            </div>
            <div>
               <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1"> Last Name </label>
               <input type="text" id="last_name" name="last_name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1.5 shadow-sm focus:border-blue-500 focus:ring-blue-500" aria-describedby="last_name-error" />
               <div id="last_name-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.last_name &&
                     state.errors.last_name.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}> {error} </p>
                     ))}
               </div>
            </div>

            <div>
               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label>
               <input type="email" id="email" name="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1.5 shadow-sm focus:border-blue-500 focus:ring-blue-500" aria-describedby="email-error" />
               <div id="email-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.email &&
                     state.errors.email.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}> {error} </p>
                     ))}
               </div>
            </div>
            <div>
               <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1"> Phone </label>
               <input type="tel" id="phone" name="phone"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1.5 shadow-sm focus:border-blue-500 focus:ring-blue-500" aria-describedby="phone-error" />
               <div id="phone-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.phone &&
                     state.errors.phone.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}> {error} </p>
                     ))}
               </div>
            </div>
            <div>
               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1"> Password </label>
               <input type="password" id="password" name="password"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1.5 shadow-sm focus:border-blue-500 focus:ring-blue-500" aria-describedby="password-error" />
               <div id="password-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.password &&
                     state.errors.password.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}> {error} </p>
                     ))}
               </div>
            </div>
            <div className="flex items-center">
               <input type="checkbox" id="is_primary" name="is_primary" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
               />
               <label htmlFor="is_primary" className="ml-2 block text-sm text-gray-700 cursor-pointer select-none"> Is Primary User </label>
            </div>
            {state.message && (<p className="mt-2 mb-1 text-sm text-red-500" id="message"><strong> {state.message} </strong></p>)}
            <button
               type="submit"
               className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
               Register
            </button>
         </form>
      </div>
   )
}

export default CreateUser