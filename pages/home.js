import React, { useState } from "react";
import HeaderComponent from '@component/components/header';

const Home = () => {
    return (
      <div className="bg-slate-200 pb-12">
        <HeaderComponent />
        <div className="flex justify-center items-start py-[15%] h-[60%] bg-slate-300">
          <div className="w-full flex flex-row items-start justify-between px-[15%]">
            <div className="flex flex-col items-start justify-center">
              <h1 className="font-bold text-5xl">Your Clips. Your Tasks. <br /> All in One Place.</h1>
              <p className="font-light py-2 px-1 text-lg">Save time and stay organized with our newly designed dashboard.</p>
            </div>
            <div className="flex flex-col items-start justify-center">
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-12 px-[15%] py-[5%]">
          <div className="flex flex-col border-2 border-solid border-black rounded-2xl h-[350px] w-[300px]"></div>
          <div className="flex flex-col border-2 border-solid border-black rounded-2xl h-[350px] w-[300px]"></div>
          <div className="flex flex-col border-2 border-solid border-black rounded-2xl h-[350px] w-[300px]"></div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-blue-900 text-white border border-black rounded-2xl py-4 px-12">Learn More</button>
        </div>
      </div>
    );
  };
  
  export default Home;