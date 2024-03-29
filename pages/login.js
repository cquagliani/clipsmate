import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { UserAuth } from '../context/authContext'; 
import LoginHeader from '@component/components/loginHeader';
import FormField from "@component/components/formField";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });
  const router = useRouter();
  const { login } = UserAuth();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="bg-light pb-32 h-screen">
      <LoginHeader />
      <div className="flex flex-col justify-center items-center font-mono">
        <div className="container mx-auto mt-32 w-96 rounded-xl bg-blue shadow-xl">
          <h2 className="px-12 mt-8 text-center text-2xl font-semibold text-light">Welcome back!</h2>
          <form className="w-80 mx-auto pb-12 px-4" onSubmit={handleSubmit(onSubmit)}>
            <FormField
              label="Email"
              name="email"
              type="email"
              error={errors.email}
              register={register}
              required
            />
            <FormField
              label="Password"
              name="password"
              type="password"
              error={errors.password}
              register={register}
              required
            />
            <Link href="/forgotpassword" className="text-[12px] text-right text-light mt-2 font-bold">Forgot Password?</Link>
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="h-12 w-2/3 bg-pink border-2 border-pink rounded-md hover:shadow-lg hover:bg-blue-800 text-lg text-light font-bold capitalize transition"
              >
                submit
              </button>
            </div>
          </form>
        </div>
        <div className="mt-6">
          <p className="font-light text-[14px] text-gray-600">
            {"Don't have an account? "}
            <Link href="/signup" className="font-bold">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
