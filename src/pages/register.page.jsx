// import { zodResolver } from "@hookform/resolvers/zod";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { RegisterSchema } from "../schema/register.page";

// const Register = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({ resolver: zodResolver(RegisterSchema) });
//   const FormHandler = (data) => {
//     console.log(data);
//     reset();
//   };

//   return (
//     <div className="flex items-center justify-around mt-16 ">
//       <div className="h-96 w-96">
//         <img src="/reg.svg" />
//       </div>
//       <form
//         className="text-white bg-orange-500 h-96 w-96 p-16"
//         onClick={FormHandler}
//       >
//         <h2>Register</h2>
//         <input
//           type="text"
//           class="border mt-4 border-gray-300 rounded-lg p-2 focus:outline-none "
//           placeholder="Your Name"
//           {...register("name")}
//         />
//         {errors.name && (
//           <p className="text-xs text-red-500">{errors.name?.message}</p>
//         )}

//         <input
//           type="text"
//           class="border mt-4 border-gray-300 rounded-lg p-2 focus:outline-none "
//           placeholder="Your Email"
//           {...register("email")}
//         />
//         <p className="text-xs text-red-500">{errors.email?.message}</p>

//         <input
//           type="text"
//           class="border mt-4 border-gray-300 rounded-lg p-2 focus:outline-none "
//           placeholder="Your Password"
//           {...register("password")}
//         />
//         <p className="text-xs text-red-500">{errors.password?.message}</p>

//         <button class="bg-black text-white py-2 px-4 rounded-lg mt-4">
//           Create Account
//         </button>
//         <p className="mt-4">
//           Already have an account?<button className="text-black">Login</button>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;
