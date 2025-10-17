"use client";
import React, { useTransition, useState, useEffect } from 'react'
import Image from "next/image"
import AboutTab from './AboutTab';
import { title } from 'process';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-6'>
                <li>C</li>
                <li>C++</li>
                <li>C#</li>
                <li>Java</li>
                <li>Python</li>
                <li>Go</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Unity</li>
                <li>Git and Github</li>
            </ul>
        )
    },
    {
        title: "Education",
        id:"education",
        content: (
            <ul className='list-disc pl-6'>
                <li>On track for a 1st class M-eng</li>
                    in Computer Science from
                    University of Bristol
            </ul>
        )
    },
    {
        title: "Awards",
        id: "awards",
        content: (
            <ul className='list-disc pl-6'>
                <li>2024 BrisHack "Best Wearable Tech" Award *team of 5*</li>
                <li>2024 UoB CSS GameJam "People's Choice" Award *team of 6*</li>
            </ul>
        )
    }
];

const AboutSection = () => {

    const [SRC, setFractalURL] = useState('/Portfolio/images/projects/seal_team7_group_photo.jpg');

    useEffect(() => {
        const SRCC:string = window.location.hostname === "localhost" ? '/images/projects/seal_team7_group_photo.jpg' : '/Portfolio/images/projects/seal_team7_group_photo.jpg';
        const fetchData = async () => {
            const result:string = await new Promise(resolve => setTimeout(() => resolve(SRCC), 1000));
            setFractalURL(result);
        };

        fetchData();
        return () => {};
    }, []);

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
    <section id={"about"} className='text-amber-50'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image className='mt-4 md:mt-0' src={SRC} alt={'Image of me'} width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-amber-100 mb-4 mt-4'>
                    About Me
                </h2>
                <p className='text-base md:text-lg text-white mb-3'>
                    I am a Computer Science student at University of Bristol
                    with a passion in Software Development and Game Design.
                    I have experience working with many languages such as
                    C, C++, Java, Python, Go as well as web development
                    tech stacks such as React, Next.js, CSS and HTML.
                    I also have experience making games with the Unity engine.
                </p>
                <p className='text-base md:text-lg text-white mt-3 mb-3'>
                    Beyond computer science, I play tennis competitively both
                    in university and for multiple clubs around Bristol and Gloucestershire.
                    I also coach tennis at Frampton on Severn Tennis Club. I love video
                    games, both competitive and casual.
                </p>
                <p className='text-base md:text-lg text-white mt-3'>
                    I am a highly motivated and aspirational person. I pay attention to
                    small details and am always searching for ways to improve myself,
                    no matter what I am doing. My time as a coach has helped me learn
                    key life skills such as communication and leadership and I hope to be
                    able to bring those skills into any future work endeavours.
                </p>
                <div className='flex flex-row mt-8'>
                    <AboutTab selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        Skills
                    </AboutTab>
                    <AboutTab selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        Education
                    </AboutTab>
                    <AboutTab selectTab={() => handleTabChange("awards")} active={tab === "awards"}>
                        Awards
                    </AboutTab>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t: { id: string; }) => t.id === tab)?.content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection