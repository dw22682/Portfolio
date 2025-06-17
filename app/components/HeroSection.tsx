import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  let x = 300;
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='lg:text-6xl text-4xl sm:text-5xl mb-4 font-extrabold px-10 sm:px-2'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-400'>Josh Chatten </span>
            Portfolio
          </h1>
          <p className='text-gray-100 mb-6 mr-6 text-lg lg:text-xl'>
            Hi, I'm Josh. Welcome to my portfolio website. Here you can find projects that i have worked on along with relevant information, skills and links.
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-amber-100 via-yellow-200 to-orange-400 text-black hover hover:from-blue-100 hover:via-teal-300 hover:to-blue-500'>
              My Github
            </button>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-[#313131] border border-white text-white mt-6'>
              Download CV
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0 ml-8'>
          <div className='rounded-full bg-[#181818] w-[350px] h-[350px] sm:h-[270px] sm:w-[270px] lg:h-[450px] lg:w-[450px] relative'>
            <Image
              src="/images/fractal.jpg"
              alt='profile image'
              className='place-self-center h-[300px] w-[300px] sm:w-[200px] sm:h-[200px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
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