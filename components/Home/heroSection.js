import React from 'react'

const HeroSection = () => {
    return (
        <section
        className="flex flex-col items-center justify-start sm:justify-center pt-10 sm:pt-0 w-full h-screen px-4">  
            <h1 className="font-bold text-6xl text-center leading-[5rem]">Your Clips. Your Tasks. <br /> All in One Place.</h1>
            <p className="w-[20rem] sm:w-[25rem] text-center mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </section>
    );
}

export default HeroSection;