"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import NavOverlay from './NavOverlay'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { title } from 'process'
import { link } from 'fs';

const navLinks = [
  {
    title: "About",
    reference: "#about"
  },
  {
    title: "Projects",
    reference: "#projects"
  },
  {
    title: "Contact",
    reference: "#contact"
  }
];

const Navigation = () => {
  const [barOpen, setBarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 hover:bg-[#131313]'>
      <div className={barOpen ? 'bg-[#131313]' : ''}>
        <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
            <Link href={"/"} className='text-2xl md:text-4xl text-white font-semibold'>
                HOME
            </Link>
            <div className='mobile-menu block md:hidden'>
              {
                !barOpen ? (
                  <button onClick={() => setBarOpen(true)} className='flex items-center px-3 py-2 border rounded border-amber-100 text-amber-50 hover:text-white hover:border-white'>
                    <Bars3Icon className='h5- w-5' />
                  </button>
                 ) : (
                  <button onClick={() => setBarOpen(false)} className='flex items-center px-3 py-2 border rounded border-amber-100 text-amber-50 hover:text-white hover:border-white'>
                    <XMarkIcon className='h5- w-5' />
                  </button>
                 )
              }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navigation">
              <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {
                  navLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink title={link.title} reference={link.reference} />
                    </li>
                    )
                  )
                }
              </ul>
            </div>
        </div>
      </div>
      {barOpen ? <NavOverlay navLinks={navLinks}/> : null}
    </nav>
  )
}

export default Navigation