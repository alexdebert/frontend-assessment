export default function ContactForm() {
       return (
           <div className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300">
               <p className="text-center mt-10 text-3xl tracking-tight text-gray-900">Contact Agent</p>
               <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-10">
                   <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                       <div className="sm:col-span-2">
                           <label htmlFor="full-name" className="block text-sm/6 font-semibold text-gray-900">Full
                               name *</label>
                           <div className="mt-2.5">
                               <input type="text" name="full-name" id="full-name" autoComplete="given-name"
                                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                               />
                           </div>
                       </div>
                       <div className="sm:col-span-2">
                           <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">Email *</label>
                           <div className="mt-2.5">
                               <input type="email" name="email" id="email" autoComplete="email"
                                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                               />
                           </div>
                       </div>

                       <div className="sm:col-span-2">
                           <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">Phone
                               number *</label>
                           <div className="mt-2.5">
                                   <input type="number" name="phone-number" id="phone-number"
                                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                           </div>
                       </div>
                       <div className="sm:col-span-2">
                           <label htmlFor="comments" className="block text-sm/6 font-semibold text-gray-900">Comments *</label>
                           <div className="mt-2.5">
                           <textarea name="comments" id="comments" rows="4"
                                     className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"/>
                           </div>
                       </div>
                   </div>
                   <div className="mt-10">
                       <button type="submit"
                               className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-10">Contact Now</button>
                   </div>
               </form>
           </div>
    );
}
