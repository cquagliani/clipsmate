import React, { useState } from "react";
import HeaderComponent from '@component/components/header';

const Home = () => {
    return (
      <div>
        <HeaderComponent />
        <div className="flex justify-center items-center h-screen w-screen bg-blue-100">
          <div className="flex flex-col justify-start items-center text-gray-600 px-12 py-24 mt-24 container mx-auto w-96 rounded-3xl border-2 border-gray-400 bg-white gap-8">
              <h2 className="text-2xl font-semibold">This is the home page</h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;