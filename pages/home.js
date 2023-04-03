import React, { useState } from "react";
import HeaderComponent from '@component/components/header';

const Home = () => {
    return (
      <div className="bg-[#FCFCFC] pb-12 h-[300vh]">
        <HeaderComponent />

        {/* HERO SECTION */}
        <section className="flex flex-col items-center justify-start sm:justify-center pt-[50%] sm:pt-[0%] w-full h-screen px-16">  
            <h1 className="font-bold text-6xl text-center leading-[5rem]">Your Clips. Your Tasks. <br /> All in One Place.</h1>
            <p className="w-[20rem] sm:w-[25rem] text-center mt-6">Lorem ipsum dolor sit amet consectetur adipiscing elit, class aliquam nullam aenean sodales primis eleifend, viverra non eros magnis tincidunt sagittis.</p>
        </section>

        {/* DEMO SECTION */}
        <section className="-mt-20 px-16">
          <div className="border-4 border-black bg-[#0F3460] rounded-3xl h-[1000px]"></div>
        </section>
      </div>
    );
  };
  
  export default Home;