import React from 'react'
import Image from "next/image";
import Link from "next/link";
import tt from '../public/socials/tt.svg'
import twitter from '../public/socials/twitter.svg'
import linkedin from '../public/socials/linkedin.svg'
import facebook from '../public/socials/facebook.svg'
import instagram from '../public/socials/instagram.svg'
import youtube from '../public/socials/youtube.svg'

const Footer = () => {
    return (
        <section>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start bg-blue mt-48 py-16 px-8 lg:px-16 h-fit gap-4 md:gap-32 lg:gap-32">
            <div className="">                
              <h1 className="font-bold text-light text-[34px]"><Link href="/">CLIPSMATE</Link></h1>
            </div>

            <div className="flex flex-col items-center md:items-start text-light gap-4">
              <Link href="/">Product</Link>
              <Link href="/">Docs</Link>
              <Link href="/">Pricing</Link>
            </div>

            <div className="flex flex-col items-center md:items-start text-light gap-4">
              <Link href="/">Company</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Resources</Link>
            </div>

            <div className="flex flex-col items-center md:items-start text-light gap-4">
              <Link href="/">Contact</Link>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
            </div>

            <div className="flex flex-row text-light gap-4 mt-8 md:mt-0 shrink-0">
              <Link href="https://www.tiktok.com/" target="_blank"><Image src={tt} alt="Tik Tok Logo" /></Link>
              <Link href="https://twitter.com/" target="_blank"><Image src={twitter} alt="Twitter Logo" /></Link>
              <Link href="https://www.linkedin.com/" target="_blank"><Image src={linkedin} alt="LinkedIn Logo" /></Link>
              <Link href="https://www.facebook.com/" target="_blank"><Image src={facebook} alt="Facebook Logo" /></Link>
              <Link href="https://www.instagram.com/" target="_blank"><Image src={instagram} alt="Instagram Logo" /></Link>
              <Link href="https://www.youtube.com/" target="_blank"><Image src={youtube} alt="youtube Logo" /></Link>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center bg-blue pb-8">
            <p className="font-light text-[#fcfcfc44] text-xs">ALL RIGHTS RESERVED © 2023 CLIPSMATE</p>
          </div>

        </section>
    );
}

export default Footer;