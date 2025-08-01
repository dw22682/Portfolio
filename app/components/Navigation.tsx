import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
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
  return (
    <nav>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
            <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
                LOGO
            </Link>
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
    </nav>
  )
}

export default Navigation