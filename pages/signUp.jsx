import React from "react";
import { useRouter } from 'next/router';
import { FormProvider, useForm } from "react-hook-form";

const SignupPage = () => {
  const methods = useForm({ mode: "onBlur" });
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
        await signUp(data.email, data.password);
        router.push("/home");
      } catch (error) {
        console.log(error.message);
      }
  };

  return (
    <div class="flex flex-col justify-center items-center h-screen w-screen bg-blue-100 font-mono">
      <div className="sign-up-form container mx-auto w-96 mt-12 rounded-3xl border-2 border-gray-400 bg-white">
        <h2 className="px-12 mt-8 text-center text-2xl font-semibold text-blue-900">Sign Up</h2>
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
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <label htmlFor="" className="block mb-3 text-blue-900">
                  Password
                </label>
              </div>

              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
              />
              {errors.password && <p className="text-red-400">{errors.password.message}</p>}
            </div>
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <label htmlFor="" className="block mb-3 text-blue-900">
                  Confirm Password
                </label>
              </div>

              <input
                type="password"
                {...register("password_confirm", {
                  required: "Verify your password",
                })}
                className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
              />
              {errors.password_confirm && (
                <p className="text-red-400">{errors.password_confirm.message}</p>
              )}
            </div>
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className={`h-12 text-center w-2/3 bg-blue-900 border-2 rounded-md hover:shadow-lg hover:bg-blue-800 text-lg transition`}
              >
                <p className="capitalize text-white font-normal">submit</p>
              </button>
            </div>
          </form>
        </FormProvider>
      </div>

      <div class="mt-8">
        <p class="font-lighter font-gray-200">Already have an account? <b><a href="/signIn">Login</a></b></p>
      </div>
    </div>
  );
};

export default SignupPage;
