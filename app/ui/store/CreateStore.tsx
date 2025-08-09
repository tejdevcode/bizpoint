"use client";

import { useActionState } from "react";
import { createStorefront } from "../../lib/actions";
import { storefrontState } from "../../lib/shemaVelidation";

const CreateStore = () => {
   const initialState: storefrontState = { message: null, errors: {} };
   const [state, formAction] = useActionState(createStorefront, initialState);
   return (
      <div className="createStore">
         {/* <button onClick={() => checkDbConnection()} className="btn text-center w-full cursor-pointer bg-green-300" >Check DB Connection</button> */}
         <form className="business-form bg-white shadow-lg rounded-lg p-8 space-y-3 w-full max-w-md mx-auto" action={formAction} >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Business Registration</h2>
            <div>
               <label htmlFor="owner_name" className="block text-sm font-medium text-gray-700 mb-1"> Owner Name </label>
               <input type="text" id="owner_name" name="owner_name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1.5 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                  aria-describedby="owner_name-error"
               />
               <div id="owner_name-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.owner_name &&
                     state.errors.owner_name.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}> {error} </p>
                     ))}
               </div>
            </div>

            <div>
               <label htmlFor="business_name" className="block text-sm font-medium text-gray-700 mb-1"> Business Name </label>
               <input type="text" id="business_name" name="business_name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                  aria-describedby="business_name-error"
               />
               <div id="business_name-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.business_name &&
                     state.errors.business_name.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}> {error} </p>
                     ))}
               </div>
            </div>

            <div>
               <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1"> Contact Number </label>
               <input type="tel" id="phone" name="phone"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                  aria-describedby="phone-error"
               />
               <div id="phone-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.phone &&
                     state.errors.phone.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}> {error} </p>
                     ))}
               </div>
            </div>

            <div>
               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label>
               <input type="email" id="email" name="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                  aria-describedby="email-error"
               />
               <div id="email-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.email &&
                     state.errors.email.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}> {error} </p>
                     ))}
               </div>
            </div>

            <div>
               <label htmlFor="gst_number" className="block text-sm font-medium text-gray-700 mb-1"> GST Number </label>
               <input type="text" id="gst_number" name="gst_number"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
               />
            </div>
            {/* Store Address fields */}
            <div>
               <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1"> Street </label>
               <input type="text" id="street" name="street"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
               />
            </div>
            <div>
               <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1"> ZIP Code </label>
               <input type="text" id="zip" name="zip"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
               />
            </div>
            <div>
               <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1"> City </label>
               <input type="text" id="city" name="city"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
               />
            </div>
            <div>
               <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State
               </label>
               <input type="text" id="state" name="state"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
               />
            </div>
            {/* Remove website field */}

            {state.message && (<p className="mt-2 mb-1 text-sm text-red-500" id="message"><strong> {`Failed to create user. Reason: ${state.message}`} </strong></p>)}
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer" > Submit </button>
         </form>

      </div>
   )
}

export default CreateStore;