import React from 'react'
import Testimonial from "@component/components/testimonial";
import kiara from '../../public/images/kiara.jpg'
import emma from '../../public/images/emma.jpg'
import james from '../../public/images/james.jpg'

const TestimonialsSection = () => {
    return (
        <section className="flex flex-col items-center md:mt-48 mt-24 px-8 lg:px-16">
          <h2 className="font-bold text-5xl text-center">What People Are Saying</h2>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 mt-10 lg:mt-28">
            <Testimonial 
              img={emma}
              name={"Emma C."}
              title={"Customer Success Lead"}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"}
            />
            <Testimonial 
              img={james}
              name={"James S."}
              title={"Software Engineer"}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"}
            />
            <Testimonial 
              img={kiara}
              name={"Kiara H."}
              title={"Project Manager"}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"}
            />
          </div>
        </section>
    );
}

export default TestimonialsSection;