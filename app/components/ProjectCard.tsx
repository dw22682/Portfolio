import React from 'react'
import { EyeIcon, CodeBracketIcon} from "@heroicons/react/24/outline"
import Link from "next/link"

type typeDef = {
    imgURL:string,
    title:string,
    description:string,
    gitURL:string,
    previewURL:string
}

const ProjectCard = ({ imgURL, title, description, gitURL, previewURL }: typeDef) => {
    //                <Link href={previewURL} className='md:hidden lg:hidden'> -- more info --</Link>
  return (
    <div className='mt-4 mb-4 mr-2 ml-2 md:mt-10'>
        <div 
            className='h-72 lg:h-92 rounded-t-xl relative group'
            style={{ background: `url(${imgURL})`, backgroundSize:"cover"}}
            role='button'
        >
            <div className='overlay flex items-center justify-center absolute top-0 left-0 w-full h-full group-hover:flex group-hover:bg-[#141414]/80 group-focus:flex bg-[#141414]/80 lg:bg-transparent md:bg-transparent'>
                <Link className='lg:hidden md:hidden block group-hover:block group-focus:block mr-2 h-14 w-14 border-2 relative rounded-full group-hover:border-amber-100 hover:border-white group-focus:border-amber-100 focus:border-white group/link' href={gitURL}>
                    <CodeBracketIcon className='h-10 w-10 group-hover:text-amber-100 group-focus:text-amber-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white group-focus/link:text-white' />
                </Link>
                <Link className='lg:hidden md:hidden block group-hover:block focus:block ml-2 h-14 w-14 border-2 relative rounded-full group-hover:border-amber-100 hover:border-white group-focus:border-amber-100 focus:border-white group/link' href={previewURL}>
                    <EyeIcon className='h-10 w-10 group-hover:text-amber-100 group-focus:text-amber-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white group-focus/link:text-white' />
                </Link>            
            </div>
        </div>
        <div className='text-amber-50 rounded-b-xl bg-[#121212]/50 py-6 px-4'>
            <h5 className='text-xl font-semibold mb-2'>
                {title}
            </h5>
            <p className='text-white'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard