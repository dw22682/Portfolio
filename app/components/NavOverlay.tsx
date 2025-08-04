import React from 'react'
import NavLink from './NavLink'

type nl = {
    title:string,
    reference:string
}

type def = {
    navLinks:Array<nl>
}

const NavOverlay = ({navLinks}: def) => {
  return (
    <div>
        <ul className='flex flex-col p-4 items-center text-2xl bg-[#131313]/80'>
            {
                navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink title={link.title} reference={link.reference} />
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default NavOverlay