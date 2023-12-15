import React, { useState } from "react";
import HeaderComponent from '@component/components/header';
import HeroSection from "@component/components/Home/heroSection";
import DemoSection from "@component/components/Home/demoSection";
import ScheduleDemo from "@component/components/Home/scheduleDemo";
import FeaturesSections from "@component/components/Home/featuresSection";
import TestimonialsSection from "@component/components/Home/testimonialsSection";
import Footer from "@component/components/footer";

const Home = () => {
    return (
      <div className="bg-light h-full relative">
        <HeaderComponent />
        <HeroSection />
        <DemoSection />
        <FeaturesSections />  
        <TestimonialsSection />
        <ScheduleDemo />
        <Footer />
      </div>
    );
  };
  
  export default Home;