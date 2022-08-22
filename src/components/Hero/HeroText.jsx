import React from 'react'
import Socialmedia from './Socialmedia'

function HeroText() {
    return (
            <div className="text-gray-800 flex flex-col items-center md:items-start m">
                <p className="animate text-xl md:text-2xl xl:text-4xl font-bold font-[Poppins]">I'm Abdelaziz Korba</p>
                <p className="my-2 mb-4 md:my-4 text-md xl:text-xl font-meduim font-[Poppins] text-gray-400">Freelance | full stack web developer</p>
                <p className="text-md xl:text-xl font-meduim font-[Poppins] text-gray-700 hidden md:block ">Experienced Full Stack web developer Skilled in ReactJs</p>
                <p className="text-md xl:text-xl font-meduim font-[Poppins] text-gray-700 my-2 hidden md:block">    and Django... , Strong engineering professional with a</p>
                <p className="text-md xl:text-xl font-meduim font-[Poppins] text-gray-700 hidden md:block">    Master degree . </p>
                <Socialmedia/>
            </div>
    )
}

export default HeroText