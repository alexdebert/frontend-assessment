'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useState} from "react";

const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string()
        .matches(/^\d+$/, 'Phone number must contain only numbers')
        .required('Phone is required'),
    comments: Yup.string().required('Comments are required'),
});

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false); // State for notification

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phone: '',
            comments: '',
        },
        validateOnMount: true,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 3000);
            resetForm();
        },
    });

   return (
       <div className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300">
           {isSubmitted && (
               <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
                   Message sent successfully!
               </div>
           )}
           <p className="text-center mt-10 text-3xl tracking-tight text-gray-900">Contact Agent</p>
           <form onSubmit={formik.handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-10">
               <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                   <div className="sm:col-span-2">
                       <label htmlFor="full-name" className="block text-sm/6 font-semibold text-gray-900">Full
                           name *</label>
                       <div className="mt-2.5">
                           <input
                               type="text"
                               id="fullName"
                               name="fullName"
                               value={formik.values.fullName}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               className={`mt-1 block w-full rounded-md border ${
                                   formik.touched.fullName && formik.errors.fullName ? 'border-red-500' : 'border-gray-300'
                               } p-2 focus:border-blue-500 focus:ring-blue-500`}
                           />
                           {formik.touched.fullName && formik.errors.fullName && (
                               <p className="mt-1 text-sm text-red-500">{formik.errors.fullName}</p>
                           )}
                       </div>
                   </div>
                   <div className="sm:col-span-2">
                       <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">Email *</label>
                       <div className="mt-2.5">
                           <input type="email"
                                  id="email"
                                  name="email"
                                  value={formik.values.email}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  className={`mt-1 block w-full rounded-md border ${
                                      formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                                  } p-2 focus:border-blue-500 focus:ring-blue-500`}
                           />
                           {formik.touched.email && formik.errors.email && (
                               <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
                           )}
                       </div>
                   </div>

                   <div className="sm:col-span-2">
                       <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">Phone
                           number *</label>
                       <div className="mt-2.5">
                           <input
                               type="text"
                               id="phone"
                               name="phone"
                               value={formik.values.phone}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               className={`mt-1 block w-full rounded-md border ${
                                   formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'
                               } p-2 focus:border-blue-500 focus:ring-blue-500`}
                           />
                           {formik.touched.phone && formik.errors.phone && (
                               <p className="mt-1 text-sm text-red-500">{formik.errors.phone}</p>
                           )}
                       </div>
                   </div>
                   <div className="sm:col-span-2">
                       <label htmlFor="comments" className="block text-sm/6 font-semibold text-gray-900">Comments *</label>
                       <textarea
                           id="comments"
                           name="comments"
                           value={formik.values.comments}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           className={`mt-1 block w-full rounded-md border ${
                               formik.touched.comments && formik.errors.comments ? 'border-red-500' : 'border-gray-300'
                           } p-2 focus:border-blue-500 focus:ring-blue-500`}
                       />
                       {formik.touched.comments && formik.errors.comments && (
                           <p className="mt-1 text-sm text-red-500">{formik.errors.comments}</p>
                       )}
                   </div>
               </div>
               <button
                   type="submit"
                   disabled={!formik.isValid}
                   className="w-full bg-blue-500 text-white py-2 px-4 mt-10 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300"
               >
                   Contact Now
               </button>
           </form>
       </div>
    );
}
