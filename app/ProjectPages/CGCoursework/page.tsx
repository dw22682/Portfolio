import React from 'react'
import Image from 'next/image'
import Navigation from "@/app/components/Navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-tr from-[#131313] via-[#141414] to-yellow-600">
        <Navigation />
        <div className="container mx-auto px-10 py-4 mt-24">
          <div className='flex flex-row items-center justify-between'>
            <div className='w-1/2'>
              <h1 className='text-left lg:text-6xl text-4xl sm:text-5xl mb-4 font-extrabold px-10 sm:px-2'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-400'>Computer Graphics Coursework </span>
              </h1>
              <h2 className='text-white text-left lg:text-5xl text-3xl sm:text-4xl mb-4 font-bold px-10 sm:px-2'>
                A Ray-Traced Renderer written in c++ and SDL
              </h2>
            </div>
            <div>
              <video controls autoPlay loop
                  src="/Portfolio/images/CGCoursework/render.mp4"
                  className='mt-4 mb-4 ml-2 mr-2 text-white'
                  width={500}
                  height={400}
                />
            </div>
          </div>
          <div>
              <h3 className='text-4xl font-bold text-amber-100 mb-4 mt-4'>
                Description
              </h3>
              <div className='flex flex-row'>
                <p className='w-1/2 mr-3 text-lg text-white'>
                  This project was made for my Computer Graphics 3rd year coursework. The
                  brief was simply to create a renderer from scratch using only c++ and SDL.
                  This means no other libraries such as OpenGL that would make things much simpler.
                  All the vector maths and interpolation was taught during lectures, and we had to
                  implement that. Then we were let loose to add more features from a list.
                  The final submission was the video demonstration you see above.
                </p>
                <p className='w-1/2 ml-3 text-lg text-white'>
                  Overall, I'm quite happy with this as a project considering the small timeframe and
                  the other simultaneous courseworks happening at the same time. The program
                  reads in a predetermined (cmd line arg) object file, that holds
                  the vertices and materials for all the objects in the scene. Key presses were
                  used to rig animations and change rendering types and features on and off. I
                  would consider rewriting and greatly improving this in the future, as it was very
                  resource intensive and didn't work well on any machines without a good GPU.
                </p>
              </div>
            </div>
            <div className='grid md:grid-cols-3 text-white'>
              <div className='flex flex-col mr-2 ml-2 text-left items-center'>
                <h3 className='text-4xl font-bold text-amber-100 mb-4 mt-4'>
                  Features
                </h3>
                <ul className='list-disc pl-6 text-lg'>
                  <li>
                    Pointcloud and Wireframe rendering
                  </li>
                  <li>
                    Rasterised rendering
                  </li>
                  <li>
                    Ray-Traced rendering
                  </li>
                  <li>
                    Ambient Lighting
                  </li>
                  <li>                    
                    Specular Lighting
                  </li>
                  <li>
                    Soft Shadows
                  </li>
                  <li>
                    Reflective Surfaces (Mirror, Metal)
                  </li>
                  <li>
                    Refractive Surfaces (Glass, Ice)
                  </li>
                  <li>
                    Phong Shading
                  </li>
                  <li>
                    Texture Maps
                  </li>
                  <li>
                    Normal Maps
                  </li>
                  <li>
                    Environment Maps
                  </li>
                </ul>
              </div>

              <div className='flex flex-col mr-2 ml-2 text-left items-center'>
              </div>

              <div className='flex flex-col mr-2 ml-2 text-left items-center'>
                <h3 className='text-4xl font-bold text-amber-100 mb-4 mt-4'>
                  Tech Stack
                </h3>
                <ul className='list-disc pl-6 text-lg'>
                  <li>
                    C++
                  </li>
                  <li>
                    SDL2
                  </li>
                  <li>
                    FFmpeg (for creation of render.mp4)
                  </li>
                  <li>
                    Git & Github
                  </li>
                </ul>
              </div>

            </div>
        </div>
    </main>
  );
}