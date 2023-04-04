import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderComponent from '@component/components/header';
import tt from '../public/socials/tt.svg'
import twitter from '../public/socials/twitter.svg'
import linkedin from '../public/socials/linkedin.svg'
import facebook from '../public/socials/facebook.svg'
import instagram from '../public/socials/instagram.svg'
import youtube from '../public/socials/youtube.svg'

const Home = () => {
    return (
      <div className="bg-[#FCFCFC] h-full">
        <HeaderComponent />

        {/* HERO SECTION */}
        <section className="flex flex-col items-center justify-start sm:justify-center pt-[50%] sm:pt-[0%] w-full h-screen px-16">  
            <h1 className="font-bold text-6xl text-center leading-[5rem]">Your Clips. Your Tasks. <br /> All in One Place.</h1>
            <p className="w-[20rem] sm:w-[25rem] text-center mt-6">Lorem ipsum dolor sit amet consectetur adipiscing elit, class aliquam nullam aenean sodales primis eleifend, viverra non eros magnis tincidunt sagittis.</p>
        </section>

        {/* DEMO SECTION */}
        <section className="-mt-20 px-16">
          <div className="border-4 border-black bg-[#0F3460] rounded-3xl h-[30rem] lg:h-[1000px]"></div>
        </section>

        {/* BRAND LOGOS SECTION */}
        <section className="flex flex-col gap-10 justify-center items-center mt-48 px-4">
            <h3 className="font-bold text-xl text-center">Trusted By Over 3000+ Teams</h3>
            <ul className="flex flex-row items-center justify-center gap-4 sm:gap-6 mt-8 flex-wrap">
              <li><span class="unsplash"><img width="150px" height="auto" alt="Unsplash logo" data-src="https://res.cloudinary.com/pitch-software/image/upload/website-images/partners/unsplash_wotp32.svg" src="https://res.cloudinary.com/pitch-software/image/upload/website-images/partners/unsplash_wotp32.svg" data-lazyloaded="true" /></span></li>
              <li><span class="superhuman"><img width="150px" height="auto" alt="Superhuman logo" data-src="https://res.cloudinary.com/pitch-software/image/upload/website-images/partners/superhuman_isiyzy.svg" src="https://res.cloudinary.com/pitch-software/image/upload/website-images/partners/superhuman_isiyzy.svg" data-lazyloaded="true" /></span></li>
              <li><span class="maze"><img width="150px" height="auto" alt="Maze logo" data-src="https://res.cloudinary.com/pitch-software/image/upload/v1644231024/website-images/partners/Maze_logo_tiiyui.svg" src="https://res.cloudinary.com/pitch-software/image/upload/v1644231024/website-images/partners/Maze_logo_tiiyui.svg" data-lazyloaded="true" /></span></li>
              <li><span class="notion"><img width="100px" height="auto" alt="Notion logo" data-src="https://res.cloudinary.com/pitch-software/image/upload/website-images/partners/notion-wordmark_ofv6ws.svg" src="https://res.cloudinary.com/pitch-software/image/upload/website-images/partners/notion-wordmark_ofv6ws.svg" data-lazyloaded="true" /></span></li>
              <li><span class="italic"><img width="150px" height="auto" alt="Italic logo" data-src="https://res.cloudinary.com/pitch-software/image/upload/website-images/partners/italic_yqmmzg.svg" src="https://res.cloudinary.com/pitch-software/image/upload/website-images/partners/italic_yqmmzg.svg" data-lazyloaded="true" /></span></li>
              <li><span class="intercom"><img width="150px" height="auto" alt="Intercom logo" data-src="https://res.cloudinary.com/pitch-software/image/upload/website-images/partners/intercom_nmqamd.svg" src="https://res.cloudinary.com/pitch-software/image/upload/website-images/partners/intercom_nmqamd.svg" data-lazyloaded="true" /></span></li>
              <li><span class="frontify"><img width="150px" height="auto" alt="Frontify logo" data-src="https://res.cloudinary.com/pitch-software/image/upload/website-assets/team-logos/frontify_vr3xme.svg" src="https://res.cloudinary.com/pitch-software/image/upload/website-assets/team-logos/frontify_vr3xme.svg" data-lazyloaded="true" /></span></li>
              <li><span class="parsely"><img width="150px" height="auto" alt="Parsely logo" data-src="https://res.cloudinary.com/pitch-software/image/upload/website-assets/team-logos/parsely_bztaeo.svg" src="https://res.cloudinary.com/pitch-software/image/upload/website-assets/team-logos/parsely_bztaeo.svg" data-lazyloaded="true" /></span></li>
              <li><span class="loom"><img width="150px" height="auto" alt="Loom logo" data-src="https://res.cloudinary.com/pitch-software/image/upload/website-assets/team-logos/loom_aetyp2.svg" src="https://res.cloudinary.com/pitch-software/image/upload/website-assets/team-logos/loom_aetyp2.svg" data-lazyloaded="true" /></span></li>
              <li><span class="bridge"><img width="150px" height="auto" alt="Bridge logo" data-src="https://res.cloudinary.com/pitch-software/image/upload/website-images/partners/bridge_bmeqwo.svg" src="https://res.cloudinary.com/pitch-software/image/upload/website-images/partners/bridge_bmeqwo.svg" data-lazyloaded="true" /></span></li>
            </ul>
        </section>

      {/* AMAZING FEATURES SECTION */}
        <section className="flex flex-col items-center mt-48 px-8 lg:px-16">
          <h2 className="font-bold text-5xl text-center">Amazing Features</h2>
          <div className="flex flex-col gap-8 lg:gap-48 lg:flex-row justify-center lg:items-center mt-10 lg:mt-28">
            <div className="flex flex-col lg:items-start w-[50%]">
              <h3 className="font-bold text-4xl">Create Clips</h3>
              <p className="w-[25rem] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
            <div className="w-[50%]">
              <div className="border border-black bg-[#0F3460] rounded-3xl h-[300px] w-[400px]"></div>
            </div>
          </div>
          <div className="flex flex-col-reverse gap-8 lg:gap-48 lg:flex-row justify-center lg:items-center mt-12">
          <div className="w-[50%]">
              <div className="border border-black bg-[#0F3460] rounded-3xl h-[300px] w-[400px]"></div>
            </div>
            <div className="flex flex-col lg:items-start w-[50%]">
              <h3 className="font-bold text-4xl">Organize Tasks</h3>
              <p className="w-[25rem] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION  */}
        <section className="flex flex-col items-center mt-48 px-8 lg:px-16">
          <h2 className="font-bold text-5xl text-center">What People Are Saying</h2>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 mt-10 lg:mt-28">
            <div className="border border-black bg-[#0F3460] rounded-3xl h-[300px] w-[400px]"></div>
            <div className="border border-black bg-[#0F3460] rounded-3xl h-[300px] w-[400px]"></div>
            <div className="border border-black bg-[#0F3460] rounded-3xl h-[300px] w-[400px]"></div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center mt-48">
          <div className="flex flex-row mt-10 lg:mt-16">
            <div className="flex flex-col z-10">
              <h2 className="font-bold text-5xl text-left">Start Your Best Work Today</h2>
              <h6 className="font-regular text-lg text-left">Schedule a Demo</h6>
              <div className="border border-black bg-[#0F3460] rounded-3xl h-[600px] w-[600px] mt-10"></div>
            </div>
            <div className="border border-black w-[600px] h-[725px] scale-x-[-1] rounded-3xl -ml-24 mt-48 overflow-hidden">
                <Image className="" object-fit="cover" src={require('../public/images/girl-smiling.jpg') } />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <section>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start bg-[#0F3460] mt-48 py-16 px-8 lg:px-16 h-fit gap-4 md:gap-32 lg:gap-32">
            <div className="">                
              <h1 className="font-bold text-[#FCFCFC] text-[34px]"><a href="/">CLIPSMATE</a></h1>
            </div>

            <div className="flex flex-col items-center md:items-start text-[#FCFCFC] gap-4">
              <Link href="/">Product</Link>
              <Link href="/">Docs</Link>
              <Link href="/">Pricing</Link>
            </div>

            <div className="flex flex-col items-center md:items-start text-[#FCFCFC] gap-4">
              <Link href="/">Company</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Resources</Link>
            </div>

            <div className="flex flex-col items-center md:items-start text-[#FCFCFC] gap-4">
              <Link href="/">Contact</Link>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
            </div>

            <div className="flex flex-row text-[#FCFCFC] gap-4 mt-8 md:mt-0 shrink-0">
              <Link href="https://www.tiktok.com/" target="_blank"><Image src={tt} alt="Tik Tok Logo" /></Link>
              <Link href="https://twitter.com/" target="_blank"><Image src={twitter} alt="Twitter Logo" /></Link>
              <Link href="https://www.linkedin.com/" target="_blank"><Image src={linkedin} alt="LinkedIn Logo" /></Link>
              <Link href="https://www.facebook.com/" target="_blank"><Image src={facebook} alt="Facebook Logo" /></Link>
              <Link href="https://www.instagram.com/" target="_blank"><Image src={instagram} alt="Instagram Logo" /></Link>
              <Link href="https://www.youtube.com/" target="_blank"><Image src={youtube} alt="youtube Logo" /></Link>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center bg-[#0F3460] pb-8">
            <p className="font-light text-[#fcfcfc44] text-xs">ALL RIGHTS RESERVED © 2023 CLIPSMATE</p>
          </div>

        </section>
      
      </div>
    );
  };
  
  export default Home;