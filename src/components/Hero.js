import React,{useEffect} from 'react'
import heroXl from '../images/hero.png'
import cercles from '../images/cercles.png'
import Typical from 'react-typical'


function Hero() {
    useEffect(() => {

    })
    return (
        <div className="container mx-auto 2xl:px-20 h-screen flex items-center">
            <div className="flex flex-wrap-reverse w-full justify-center md:justify-around items-center md:mt-24">
             <div className="text-gray-800 flex flex-col items-center md:items-start 2x:-ml-8">
                <p className="animate text-sm md:text-2xl xl:text-4xl font-bold font-pop ">Abdelaziz Korba</p> 
                <Typical
                   className="text-sm md:text-lg font-meduim font-pop text-gray-400 my-4"
                    steps={['Freelance | full stack web developer', 1000]}
                    loop={Infinity}
                    wrapper="p"
                />
                <p className="text-md xl:text-xl font-meduim font-pop text-gray-700 hidden md:block ">Experienced Full Stack web developer Skilled in ReactJs</p>
                <p className="text-md xl:text-xl font-meduim font-pop text-gray-700 my-2 hidden md:block">    and Django... , Strong engineering professional with a</p>
                <p className="text-md xl:text-xl font-meduim font-pop text-gray-700 hidden md:block">    Licentiate degree . </p>
                <img className="mt-12  hidden md:block" src={cercles} alt=""/>
             </div>  
             <img className="w-64 md:w-96 2xl:w-auto " src={heroXl} alt="my" style={{maxWidth:450}} />
            </div>
        </div>
    )
}

export default Hero
