import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { UserAuth } from '../context/authContext'
import { FormProvider, useForm } from "react-hook-form";
import SignUpHeader from "@component/components/signupHeader";
import FormField from "@component/components/formField";

const Signup = () => {
  const methods = useForm({ mode: "onBlur" });
  const router = useRouter();
  const { signUp, user } = UserAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
        await signUp(data.email, data.password, data.first, data.last)
        router.push("/dashboard");
      } catch (error) {
        console.log(error.message);
      }
  };

  return (
    <div className="bg-light pb-32 h-screen">
      <SignUpHeader />
      <div className="flex flex-col justify-center items-center font-mono">
        <div className="container mx-auto mt-32 w-96 rounded-xl bg-blue shadow-xl">
          <h2 className="px-12 mt-8 text-center text-2xl font-semibold text-light">Sign Up</h2>
          
          <FormProvider {...methods}>
            <form action="" className="w-80 mx-auto pb-12 px-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-row gap-4">
                <FormField 
                  label="First" 
                  name="first" 
                  error={errors.first} 
                  register={register} 
                  required 
                />
                <FormField 
                  label="Last" 
                  name="last" 
                  error={errors.last} 
                  register={register} 
                  required 
                />
              </div>

              <FormField 
                type="email" 
                label="Email" 
                name="email" 
                error={errors.email} 
                register={register} 
                required 
              />
              <FormField 
                type="password" 
                label="Password" 
                name="password" 
                error={errors.password} 
                register={register} 
                required 
              />
              <FormField 
                type="password" 
                label="Confirm Password" 
                name="password_confirm" 
                error={errors.password_confirm} 
                register={register} 
                required 
              />
              
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
          <p className="font-light text-[14px] text-gray-600">Already have an account? <Link className="font-bold" href="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
