import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { FormProvider, useForm } from "react-hook-form";
import { auth } from "../firebase/clientApp";
import LoginHeader from '@component/components/loginHeader';
import { UserAuth } from '../context/authContext'

const Login = () => {
  const methods = useForm({ mode: "onBlur" });
  const router = useRouter();
  const { login } = UserAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      router.push("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-light pb-32 h-screen">
      <LoginHeader />
      <div className="flex flex-col justify-center items-center font-mono">
        <div className="container mx-auto mt-32 w-96 rounded-xl bg-blue shadow-xl">
          <h2 className="px-12 mt-8 text-center text-2xl font-semibold text-light">Welcome back!</h2>
          <FormProvider {...methods}>
            <form action="" className="w-80 mx-auto pb-12 px-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="block mb-2 text-light">
                    Email
                  </label>
                </div>

                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.email && <p className="text-sm text-error text-lighter mt-2 ml-2">{errors.email.message}</p>}
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="block mb-2 text-light">
                    Password
                  </label>
                </div>

                <input
                  type="password"
                  {...register("password", { required: "Password is required" })}
                  className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.password && <p className="text-sm text-error text-lighter mt-2 ml-2">{errors.password.message}</p>}
                <Link href="/forgotpassword"><p className="text-[12px] text-right text-light mt-2 font-bold">Forgot Password?</p></Link>
              </div>

              <div className="flex justify-center pt-8">
                <button
                  type="submit"
                  className={`h-12 text-center w-2/3 bg-pink border-2 border-pink rounded-md hover:shadow-lg hover:bg-blue-800 text-lg transition`}
                >
                  <p className="capitalize text-light font-bold">submit</p>
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
        <div className="mt-6">
          <p className="font-light text-[14px] text-gray-600 ">Don't have an account? <Link className="font-bold" href="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
