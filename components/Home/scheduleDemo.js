import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Image from "next/image";
import SolidButton from "../solidButton";
import girlSmiling from '../../public/images/girl-smiling.jpg'

const ScheduleDemo = () => {
    const methods = useForm({ mode: "onBlur" });
    const { handleSubmit, register, formState: { errors } } = methods;
    
    const onSubmit = async (data) => {
      try {

        } catch (error) {
          console.log(error.message);
        }
    };

    return (
        <section className="flex flex-col items-center justify-center md:mt-48  mt-24 px-8">
          <div className="flex flex-row mt-10 lg:mt-16">
            <div className="flex flex-col z-10">
              <h2 className="font-bold text-5xl text-left">Start Your Best Work Today</h2>
              <h6 className="font-regular text-lg text-left mt-4">Schedule a Demo</h6>
              <div className="bg-blue shadow-lg rounded-3xl h-[600px] w-auto mt-10">
              
              
              <FormProvider {...methods}>
              <form action="" className=" w-full px-12" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row justify-center gap-4">
                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <label htmlFor="" className="block mb-3 text-light">
                        First
                      </label>
                    </div>
                    <input
                      type="text"
                      {...register("first", { required: "First name is required" })}
                      className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                    />
                    {errors.first && <p className="text-red-400">{errors.first.message}</p>}
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <label htmlFor="" className="block mb-3 text-light">
                        Last
                      </label>
                    </div>
                    <input
                      type="text"
                      {...register("last", { required: "Last Name is required" })}
                      className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                    />
                    {errors.last && <p className="text-red-400">{errors.last.message}</p>}
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="block mb-3 text-light">
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
                    <label htmlFor="" className="block mb-3 text-light">
                      Phone
                    </label>
                  </div>

                  <input
                    type="tel"
                    {...register("phone", { required: "Phone number is required" })}
                    className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                  />
                  {errors.phone && <p className="text-red-400">{errors.phone.message}</p>}
                </div>
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="block mb-3 text-light">
                      Company
                    </label>
                  </div>

                  <input
                    type="text"
                    {...register("company", { required: "Company is required" })}
                    className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                  />
                  {errors.company && <p className="text-red-400">{errors.company.message}</p>}
                </div>
                <div className="flex justify-start pt-12">
                  <SolidButton text={"Submit"} link={""} type="submit" />
                </div>
              </form>
              </FormProvider>


            </div>
            </div>
            <div className="hidden md:block shadow-lg w-[600px] h-[auto] max-h-[725px] scale-x-[-1] rounded-3xl -ml-24 mt-48 overflow-hidden">
                <Image className="" object-fit="cover" alt="girl smiling at laptop" src={girlSmiling} />
            </div>
          </div>
        </section>
    );
}

export default ScheduleDemo;
