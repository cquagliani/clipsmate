import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { FormProvider, useForm } from "react-hook-form";
import { auth } from "../firebase/clientApp";
import LoginHeader from '@component/components/loginHeader';
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const methods = useForm({ mode: "onBlur" });
  const router = useRouter();
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await sendPasswordResetEmail(auth, data.email).then(console.log("Password reset email sent!"));
      setSent(true);
      setTimeout(() => {router.push("/login")}, 6000);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <LoginHeader />
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-blue-100 font-mono">
        <div className="sign-up-form container mx-auto -mt-20 w-96 rounded-3xl border-2 border-gray-400 bg-white">
          <h2 className="px-12 mt-8 text-center text-2xl font-semibold text-blue-900">Reset Password</h2>
          
          {!sent && (
            <FormProvider {...methods}>
                <form action="" className="w-80 mx-auto pb-12 px-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-8">
                    <div className="flex items-center justify-between">
                    <label htmlFor="" className="block mb-3 text-blue-900">
                        Email
                    </label>
                    </div>
                    <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                    />
                    {errors.email && <p className="text-red-400">{errors.email.message}</p>}
                </div>
                <div className="flex justify-center pt-8">
                    <button
                    type="submit"
                    className={`h-12 text-center text-black w-2/3 bg-blue-900 border-2 rounded-md hover:shadow-lg hover:bg-blue-800 text-lg transition`}
                    >
                    <p className="capitalize text-black font-normal">submit</p>
                    </button>
                </div>
                </form>
            </FormProvider>
            )}
            {sent && (
                <p className="text-center text-md text-green-400 p-12">Password reset link sent to your email.</p>
            )}
        </div>
        <div className="mt-6">
          <p className="font-light text-[14px] text-gray-600 ">{"Don't have an account? "}<Link className="font-bold" href="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
