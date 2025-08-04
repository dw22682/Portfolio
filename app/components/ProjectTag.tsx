import React from 'react'

type typeDef = {
    name:string,
    onClick:(newTag:string) => void,
    isSelected:boolean
}

const ProjectTag = ( { name, onClick, isSelected}: typeDef) => {
    const borders = !isSelected ? "border-amber-400 hover:border-teal-300" : "border-amber-100 text-white hover:border-teal-500"
    return (
        <button 
            onClick={() => onClick(name)}
            className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${borders}`}
        >
            {name}
        </button>  )
}

export default ProjectTag