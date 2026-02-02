"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectData = [
    {
        id: 1,
        title: "Shifting Sands",
        description: "Best Video Game of ALL TIME!",
        image: "/Portfolio/images/projects/seal_team7_group_photo.jpg",
        tag: ["All", "Game"],
        gitUrl: "https://github.com/lm22433/2024-SealTeam7",
        previewUrl: "/ProjectPages/ShiftingSands"
    },
    {
        id: 2,
        title: "BCADD (NHS)",
        description: "Breast Cancer Assessment and Decision Database",
        image: "/Portfolio/images/projects/bcaddhome.png",
        tag: ["All"],
        gitUrl: "https://dw22682.github.io/BcaddPilot/",
        previewUrl: "/ProjectPages/bcadd"
    },
    {
        id: 3,
        title: "Svelte Dashboard",
        description: "An interactive whiteboard webapp",
        image: "/Portfolio/images/projects/whiteboard.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/dw22682/Svelte_Whiteboard",
        previewUrl: "/ProjectPages/Whiteboard"
    },
    {
        id: 4,
        title: "Ray Traced SDL Renderer",
        description: "A ray traced renderer created for coursework written in pure c++",
        image: "/Portfolio/images/projects/cornell_ray.png",
        tag: ["All", "Other"],
        gitUrl: "/ProjectPages/CGCoursework",
        previewUrl: "/ProjectPages/CGCoursework"
    }
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All")
    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    }
    const filteredData = projectData.filter((project) => {
        return project.tag.includes(tag);
    })

  return (
    <section id={"projects"}>
        <div>
            <h2 className='text-center text-4xl font-bold text-amber-100 mb-4 mt-4'>
                My Projects
            </h2>
            <div className='text-amber-50 flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                onClick={handleTagChange}
                    name='All'
                    isSelected={tag === "All"}
                />
                <ProjectTag
                onClick={handleTagChange}
                    name='Game'
                    isSelected={tag === "Game"}
                /> 
                <ProjectTag
                onClick={handleTagChange}
                    name='Web'
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                onClick={handleTagChange}
                    name='Other'
                    isSelected={tag === "Other"}
                /> 
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-12'>
                {
                    filteredData.map((project) =>(
                    <ProjectCard key={project.id}
                                title={project.title}
                                description={project.description}
                                imgURL={project.image}
                                gitURL={project.gitUrl}
                                previewURL={project.previewUrl} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default ProjectSection