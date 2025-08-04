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
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-400'>Shifting Sands </span>
              </h1>
              <h2 className='text-left lg:text-5xl text-3xl sm:text-4xl mb-4 font-bold px-10 sm:px-2'>
                Worlds First AR game played with a Sandbox
              </h2>
            </div>
            <div>
              <Image 
                  src="/Portfolio/images/ShiftingSands/Seal_Team_7_Logo.png"
                  alt='logo image'
                  className='mt-4 mb-4 ml-2 mr-2 text-white'
                  width={300}
                  height={300}
                />
            </div>
          </div>
          <div>
              <h3 className='text-4xl font-bold text-amber-100 mb-4 mt-4'>
                Abstract
              </h3>
              <div className='flex flex-row'>
                <p className='w-1/2 mr-3 text-lg'>
                  Shifting Sands is an augmented reality (AR) game that merges
                  the fun and exciting gameplay of tower defence games with the
                  nostalgic feeling of playing in a sandbox. This is bundled 
                  together in an inclusive and immersive experience that is 
                  accessible to people of all ages and gaming experience, all 
                  to create the first ever sandbox-controlled video game. Across
                  only 12 weeks of iterative development and exhaustive user 
                  testing, we have presented a fun and detailed concept of what
                  such a game could look like and, in turn, laid the groundwork
                  for future development into such a novel input mechanic. This
                  project was created during a group project in my 3rd year at
                  University of Bristol. My group consisted of 6 absolutely fantastic
                  team members: me, Harry Greentree, Bhagavath Achani, Peter Lillistone,
                  Finn Cooper and Sergi Lange-Soler.
                </p>
                <p className='w-1/2 ml-3 text-lg'>
                  The game's core concept sees you as the player take on the role of a godlike
                  figure in a large-scale battle. Your goal is to defend your central 'Godly
                  Core' from waves of different enemies by physically manipulating the sand to
                  control the in-game terrain. This intuitive control system is powered by AR
                  Sandbox technology, using the Azure Kinect's depth sensing capabilities to
                  map the sand's topography to the in-game map. This technology has been known
                  to be used in tactile learning environments, however this project is the
                  first of its kind (that we can find) which puts it in a video game.
                </p>
              </div>
            </div>
            <div className='grid md:grid-cols-3'>
              <div className='flex flex-col text-center mt-4 mb-4'>
                <Image 
                  src="/Portfolio/images/ShiftingSands/gd2.jpg"
                  alt='games day image'
                  className='place-self-center mt-4 mb-4 ml-2 mr-2 text-white h-[300px] w-[300px] md:w-[350px] md:h-[350px]'
                  width={500}
                  height={500}
                />
                <p>
                  Image of the game being played at games day.
                </p>
              </div>
              <div className='flex flex-col text-center mt-4 mb-4'>
                <Image 
                  src="/Portfolio/images/ShiftingSands/game_post_processing.png"
                  alt='in game image'
                  className='place-self-center mt-4 mb-4 ml-2 mr-2 text-white h-[300px] w-[300px] md:w-[350px] md:h-[350px]'
                  width={500}
                  height={500}
                />
                <p>
                  This image shows both the news feed view for non players
                  who were waiting and the in game view of the player
                </p>
              </div>
              <div className='flex flex-col text-center mt-4 mb-4'>
                <Image 
                  src="/Portfolio/images/ShiftingSands/reconstructed-hand-game.png"
                  alt='hand image'
                  className='place-self-center mt-4 mb-4 ml-2 mr-2 text-white h-[300px] w-[300px] md:w-[350px] md:h-[350px]'
                  width={500}
                  height={500}
                />
                <p>
                  This image shows the reconstructed hand tracked by the kinect
                </p>
                </div>
            </div>
            <div className='grid md:grid-cols-2'>
              <div className='flex flex-col mr-2 ml-2 text-left items-center'>
                <h3 className='text-4xl font-bold text-amber-100 mb-4 mt-4'>
                  Features
                </h3>
                <ul className='list-disc pl-6 text-lg'>
                  <li>
                    real-time virtual topographic map
                  </li>
                  <li>
                    real-time hand tracking
                  </li>
                  <li>
                    over 10 unique enemy types
                  </li>
                  <li>
                    detailed physics enhancements
                  </li>
                  <li>                    
                    custom toon shader
                  </li>
                  <li>
                    custom particle effects
                  </li>
                  <li>
                    secondary news feed
                  </li>
                  <li>
                    custom dynamic pathfinding AI
                  </li>
                  <li>
                    Leaderboard Website
                  </li>
                </ul>
              </div>

              <div className='flex flex-col mr-2 ml-2 text-left items-center'>
                <h3 className='text-4xl font-bold text-amber-100 mb-4 mt-4'>
                  Tech Stack
                </h3>
                <ul className='list-disc pl-6 text-lg'>
                  <li>
                    Unity
                  </li>
                  <li>
                    C#
                  </li>
                  <li>
                    Azure Kinect
                  </li>
                  <li>
                    WWise
                  </li>
                  <li>                    
                    Blender
                  </li>
                  <li>
                    Github
                  </li>
                  <li>
                    Media Pipe
                  </li>
                  <li>
                    Flutter (for leaderboard)
                  </li>
                </ul>
              </div>

            </div>
        </div>
    </main>
  );
}