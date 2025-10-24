'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {TypeAnimation} from 'react-type-animation'

const HeroSection = () => {
  const [FRACTAL, setFractalURL] = useState('/Portfolio/images/mugshot.jpg');

  useEffect(() => {
        const FRACTALL:string = window.location.hostname === "localhost" ? '/images/mugshot.jpg' : '/Portfolio/images/mugshot.jpg';
        const fetchData = async () => {
            const result:string = await new Promise(resolve => setTimeout(() => resolve(FRACTALL), 1000));
            setFractalURL(result);
        };

        fetchData();
        return () => {};
    }, []);
    let x = 200;
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white lg:text-6xl text-4xl sm:text-5xl mb-4 font-extrabold px-10 sm:px-2'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-400'>Josh Chatten </span>
            Portfolio
          </h1>
          <TypeAnimation
            sequence={[
              'Game Development',
              1000,
              'Software Development',
              1000,
              'Data Science',
              1000
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            className='lg:text-5xl text-3xl sm:text-3xl font-bold mb-6 px-10 sm:px-2 text-amber-50'
          />
          <p className='text-gray-100 mb-6 mt-4 mr-6 text-lg lg:text-xl'>
            Hi, I'm Josh. Welcome to my portfolio website. Here you can find projects that i have worked on along with relevant information, skills and links.
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-amber-100 via-yellow-200 to-orange-400 text-black hover hover:from-blue-100 hover:via-teal-300 hover:to-blue-500'>
              <Link href={"https://github.com/dw22682"}>
                My Github
              </Link>
            </button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-amber-100 via-yellow-200 to-orange-400 hover:from-blue-100 hover:via-teal-300 hover:to-blue-500 text-white mt-6'>
              <a className='block bg-[#181818] hover:bg-[#313131] rounded-full px-5 py-2.5' href='/Portfolio/Joshua-Chatten-CV.pdf'>Download CV</a>
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0 ml-8'>
          <div className='rounded-full bg-[#181818] w-[350px] h-[350px] sm:h-[270px] sm:w-[270px] lg:h-[450px] lg:w-[450px] relative'>
            <Image
              src={FRACTAL}
              alt='profile image'
              className='place-self-center text-white absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={x}
              height={x}
              />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection