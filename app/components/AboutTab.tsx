import React from 'react'

type typeDef = {
    active:boolean,
    selectTab:() => void,
    children:string
}

const AboutTab = ({active, selectTab, children}: typeDef) => {
    
    const buttonClasses = active ? 'hover:text-teal-200 text-amber-200' : 'hover:text-teal-100 text-amber-50';

    return (
        <button onClick={selectTab}>
            <p className={`mr-7 font-semibold border-b border-amber-500 hover:border-teal-300 ${buttonClasses}`}>
                {children}
            </p>
        </button>
  )
}

export default AboutTab