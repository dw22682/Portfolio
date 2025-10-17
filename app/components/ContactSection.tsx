import React from 'react'
import Link from 'next/link'

const ContactSection = () => {
  return (
    <section id={"contact"} className='text-amber-50'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-amber-100 mb-4 mt-4'>
                    Get In Touch!
                </h2>
                <p className='text-base md:text-lg text-white'>I am currently
                    looking for new opportunities, my inbox is always open.
                    Whether you have a question, an offer or just want to say hi,
                    I'll try my best to get back to you.
                </p>
                <div className='grid grid-cols-2 items-center text-center mb-5 mt-5'>
                    <Link href={"https://www.linkedin.com/in/joshua-chatten-264564294/"} className='mr-7 font-semibold border border-amber-500 hover:border-teal-300 hover:text-teal-200 text-amber-200'>
                        LinkedIn
                    </Link>
                    <Link href={"https://github.com/dw22682"} className='mr-7 font-semibold border border-amber-500 hover:border-teal-300 hover:text-teal-200 text-amber-200'>
                        Github
                    </Link>
                </div>
                <h3 className='text-2xl font-semibold text-amber-50 mb-4 mt-4'>
                    Email: joshchatuk@gmail.com
                </h3>
            </div>
        </div>
    </section>
  )
}

export default ContactSection