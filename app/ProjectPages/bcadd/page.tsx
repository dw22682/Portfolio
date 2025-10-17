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
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-400'>BCADD </span>
              </h1>
              <h2 className='text-white text-left lg:text-5xl text-3xl sm:text-4xl mb-4 font-bold px-10 sm:px-2'>
                A Faster Way for Doctors to Run Breast Cancer MDT's
              </h2>
            </div>
            <div>
              <Image 
                  src="/Portfolio/images/bcadd/nhslogo.png"
                  alt='logo image'
                  className='mt-4 mb-4 ml-2 mr-2 text-white'
                  width={300}
                  height={300}
                />
            </div>
          </div>
          <div>
              <h3 className='text-4xl font-bold text-amber-100 mb-4 mt-4'>
                Description
              </h3>
              <div className='flex flex-row'>
                <p className='w-1/2 mr-3 text-lg text-white'>
                  The BCADD project started out as a 2nd year 'Software Engineering
                  Project' unit project. However me and Lamb Chen continued working
                  on it with Dr. Nicola Laurence for the past couple of years. It has
                  now reached the pilot stage where it has been compiled and sent to
                  different hospitals around the country including RUH Bath and
                  Southmead Hospital.
                </p>
                <p className='w-1/2 ml-3 text-lg text-white'>
                  The foundation of this project is the accumulation of criteria that
                  determine whether or not a patient can/should recieve specific treatment
                  paths related to their type and severity of Breast Cancer. It has also
                  been expanded to calculate manchester score which includes family history
                  of breast cancer and other related cancers. The pilot version runs entirely
                  locally and stores all data encrypted onto the home drive of your computer.
                  This is however planned to change once we move out of pilot and into a more
                  final release. No agreements have been made yet, however, multiple
                  companies and entities have shown a keen interest in the success of this
                  project, especially groups of breast surgeons across the country.
                </p>
              </div>
            </div>
            <div className='grid md:grid-cols-3 text-white'>
              <div className='flex flex-col text-center mt-4 mb-4'>
                <Image 
                  src="/Portfolio/images/bcadd/preopform.png"
                  alt='preop form image'
                  className='place-self-center mt-4 mb-4 ml-2 mr-2 text-white h-[300px] w-[300px] md:w-[350px] md:h-[350px]'
                  width={500}
                  height={500}
                />
                <p>
                  Image of a snippet of the Pre Op Information Form.
                </p>
              </div>
              <div className='flex flex-col text-center mt-4 mb-4'>
                <Image 
                  src="/Portfolio/images/bcadd/results.png"
                  alt='results image'
                  className='place-self-center mt-4 mb-4 ml-2 mr-2 text-white h-[300px] w-[300px] md:w-[350px] md:h-[350px]'
                  width={500}
                  height={500}
                />
                <p>
                  Image of the results screen for a fake patient
                </p>
              </div>
              <div className='flex flex-col text-center mt-4 mb-4'>
                <Image 
                  src="/Portfolio/images/bcadd/famhistory.png"
                  alt='family history image'
                  className='place-self-center mt-4 mb-4 ml-2 mr-2 text-white h-[300px] w-[300px] md:w-[350px] md:h-[350px]'
                  width={500}
                  height={500}
                />
                <p>
                  This image shows the Family History Section with an example
                  Manchester Score.
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
                    Encrypted Patient Data Storage
                  </li>
                  <li>
                    Treatment Path logic automation
                  </li>
                  <li>
                    Data input forms
                  </li>
                  <li>
                    Family History Menu form
                  </li>
                  <li>                    
                    Manchester Score Calculations
                  </li>
                  <li>
                    Staging Calculation logic
                  </li>
                  <li>
                    Table View with access to individual records
                  </li>
                  <li>
                    Basic Search Function
                  </li>
                  <li>
                    Password Protected
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
                    Java
                  </li>
                  <li>
                    JavaFX
                  </li>
                  <li>
                    Jackson (for JSON manipulation)
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