import React, { useCallback, useEffect } from 'react'
import Particles from '@tsparticles/react'
import { loadAll } from '@tsparticles/all'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ParticlesComponent from '../utls/ParticlesComponent'

const TimelineBox = ({ text, h1, date, src, bgcolor, border, left, p, arrow, tc }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="800"
            className={`p-[10px_50px] max-md:p-0 max-lg:p-0 max-lg:w-full max-lg:left-0  max-md:w-full relative w-1/2 max-md:left-0 ${left} ${p} ${tc}`}
        >
            {src && (
                <img
                    className="absolute w-[40px] right-[-20px] top-[32px] rounded-4xl z-10"
                    src={src}
                    alt=""
                />
            )}
            <div className={`relative p-[50px] rounded-3xl ${bgcolor} border-2 ${border}`}>
                <h2 className="text-xl font-bold mb-2">{h1}</h2>
                <div className="text-sm opacity-70 mb-4">{date}</div>
                <p className="leading-relaxed">{text}</p>
                <span className={`${arrow}`}></span>
            </div>
        </div>
    )
}

const TimelineSec = () => {

    useEffect(() => {
        AOS.init()
    }, [])

   

    const ay = [
        {
            h1: 'Early Hustle',
            date: '2022',
            left: 'left-0',
            text: 'Started grinding with HTML/CSS and didn’t stop. Learning to code felt like unlocking the matrix.',
            p: 'pr-10',
            src: '',
            bgcolor: 'bg-[#000]',
            border: 'border-[#222222]',
            arrow: 'left-container-arrow',
            tc: 'text-white',
        },
        {
            h1: 'Real Projects',
            date: '2023',
            left: 'left-1/2',
            text: 'Masterd Js at that time so my Level went very up and i made alot of real projects with it',
            p: 'pl-10',
            src: '',
            bgcolor: 'bg-[#fff]',
            border: 'border-[#222222]',
            arrow: 'right-container-arrow',
            tc: 'text-black',
        },
        {
            h1: 'Started Learning React',
            date: '2024',
            left: 'left-0',
            text: ' Redux Toolkit, and performance optimization and props driling',
            p: 'pr-10',
            src: '',
            bgcolor: 'bg-[#000]',
            border: 'border-[#222222]',
            arrow: 'left-container-arrow',
            tc: 'text-white',
        },
        {
            h1: 'I think am ready Now!',
            date: '2025',
            left: 'left-1/2',
            text: 'Claimed the title. Made alot of Projects (Easy ones and hard ones),Ready to deliver serious value. with My Mern Stack Skills.',
            p: 'pl-10',
            src: '',
            bgcolor: 'bg-[#fff]',
            border: 'border-[#222222]',
            arrow: 'right-container-arrow',
            tc: 'text-black',
        },
    ]

    return (
<div className="relative  max-w-[1200px] max-h-800 mt-[100px] max-md:mx-10 max-lg:mx-10  max-md:flex max-md:flex-col max-lg:flex max-lg:flex-col max-md:gap-y-10  max-lg:gap-y-20 timeline mb-50 ">
  <div className="absolute inset-0 h-full w-full overflow-hidden    pointer-events-none">
    <ParticlesComponent id="tsparticles-timeline" />
  </div>
            <div className="absolute w-[20px] h-[20px] rounded-full -top-12 z-10 left-[48.92%] bg-white border border-[#222222]"></div>

            {ay.map((Timeline, i) => (
                <TimelineBox key={i} {...Timeline} />
            ))}

            <div className="absolute w-[20px] h-[20px] -bottom-22 z-10 left-[48.92%] rounded-full bg-white border border-[#080808]"></div>
        </div>
    )
}

export default TimelineSec
