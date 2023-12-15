import React from 'react'

const FeaturesSections = () => {
    return (
        <section className="flex flex-col items-center md:mt-48 mt-24 px-8 lg:px-16">
          <h2 className="font-bold text-5xl text-center">Amazing Features</h2>
          <div className="flex flex-col gap-8 lg:gap-48 lg:flex-row justify-center lg:items-center mt-10 lg:mt-28">
            <div className="flex flex-col lg:items-start w-[50%]">
              <h3 className="font-bold text-4xl">Create Clips</h3>
              <p className="w-[25rem] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
            <div className="w-[50%]">
              <div className="border border-black bg-blue rounded-3xl h-[300px] w-[400px]"></div>
            </div>
          </div>
          <div className="flex flex-col-reverse gap-8 lg:gap-48 lg:flex-row justify-center lg:items-center mt-12">
          <div className="w-[50%]">
              <div className="border border-black bg-blue rounded-3xl h-[300px] w-[400px]"></div>
            </div>
            <div className="flex flex-col lg:items-start w-[50%]">
              <h3 className="font-bold text-4xl">Organize Tasks</h3>
              <p className="w-[25rem] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
          </div>
        </section>
    );
}

export default FeaturesSections;