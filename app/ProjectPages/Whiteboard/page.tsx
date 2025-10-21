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
              <h1 className='text-left lg:text-6xl text-3xl sm:text-5xl mb-4 font-extrabold px-10 sm:px-2'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-400'>Svelte Whiteboard App </span>
              </h1>
              <h2 className='text-white text-left lg:text-5xl text-3xl sm:text-4xl mb-4 font-bold px-10 sm:px-2'>
                Interactive Whiteboard drawing app
              </h2>
            </div>
            <div>
              <Image 
                  src="/Portfolio/images/whiteboard/whiteboardFull.png"
                  alt='whiteboard image'
                  className='mt-4 mb-4 ml-5 mr-2 lg:w-200 pl-4 text-white'
                  width={300}
                  height={400}
                />
            </div>
          </div>
          <div>
              <h3 className='text-4xl font-bold text-amber-100 mb-4 mt-4'>
                Abstract
              </h3>
              <div className='flex flex-row'>
                <p className='w-1/2 mr-3 text-lg text-white'>
                  I started this project to learn the basics of Svelte. For this website I used next.js ,
                  however I wanted to be able to at least know the basics of multiple frameworks.
                  Especially one that doesn't use react components meaning I would have to also use some
                  javascript "Pre React Style". Starting the project, I used tutorials online and tools
                  like deepseek and chatGPT to give me a baseline on how the framework is used however,
                  the generative AI only managed to ever create something that looked nice and yet was
                  somehow entirely non-functional. Once I realised that, I went back to basics and looked
                  for myself at documentation for Canvas elements and svelte to create from scratch my project.
                  I started by drawing random lines and then built into creating what I have now in a simmilar
                  way to how I created my rasterised renderer for my Computer Graphics unit.
                </p>
                <p className='w-1/2 ml-3 text-lg text-white'>
                  The app consists of a toolbar on the left which you can select from different tools. You can
                  also change the colour or brush size and finally clear the canvas. On the right and the majority
                  of the screen is a canvas element with an ever so subtley changed background colour which by
                  clicking the mouse and dragging, you can draw with much like photoshop or krita or any other
                  app you can think of. There are also keybinds such as 'c' to clear the page. I used svelte stores
                  to synchronise data between the whiteboard component and the toolbar component.
                </p>
              </div>
            </div>
            <div className='grid md:grid-cols-3 text-white'>
              <div className='flex flex-col text-center mt-4 mb-4'>
                <Image 
                  src="/Portfolio/images/whiteboard/buttons.jpg"
                  alt='games day image'
                  className='place-self-center mt-4 mb-4 ml-2 mr-2 text-white h-[300px] w-[300px] md:w-[350px] md:h-[350px]'
                  width={500}
                  height={500}
                />
                <p>
                  Image of buttons
                </p>
              </div>
              <div className='flex flex-col text-center mt-4 mb-4'>
                <Image 
                  src="/Portfolio/images/whiteboard/circles.png"
                  alt='in game image'
                  className='place-self-center mt-4 mb-4 ml-2 mr-2 text-white h-[300px] w-[300px] md:w-[350px] md:h-[350px]'
                  width={500}
                  height={500}
                />
                <p>
                  Image of random circles
                </p>
              </div>
              <div className='flex flex-col text-center mt-4 mb-4'>
                <Image 
                  src="/Portfolio/images/whiteboard/colourPicker.png"
                  alt='hand image'
                  className='place-self-center mt-4 mb-4 ml-2 mr-2 text-white h-[300px] w-[300px] md:w-[350px] md:h-[350px]'
                  width={500}
                  height={500}
                />
                <p>
                  Image of colour picker
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
                    Drawable Canvas
                  </li>
                  <li>
                    Brush
                  </li>
                  <li>
                    Eraser
                  </li>
                  <li>
                    Random shapes (line, rectangle, circle)
                  </li>
                  <li>                    
                    Colour Picker
                  </li>
                  <li>
                    Brush Size Slider
                  </li>
                  <li>
                    Clear Canvas Button
                  </li>
                  <li>
                    Keybinds
                  </li>
                  <li>
                    More to come...
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
                    Svelte
                  </li>
                  <li>
                    JavaScript
                  </li>
                  <li>
                    Tailwind CSS
                  </li>
                </ul>
              </div>

            </div>
        </div>
    </main>
  );
}