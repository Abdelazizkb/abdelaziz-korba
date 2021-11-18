import React,{useEffect} from 'react'
import heroXl from '../images/hero-xl.png'
import cercles from '../images/cercles.png'
import Typical from 'react-typical'


function Hero() {
    useEffect(() => {

    })
    return (
        <div className="container mx-auto xl:px-20  mt-20 mb-16 md:mt-32 lg:mb-32">
            <div className="flex flex-wrap-reverse  justify-center xl:justify-between items-center">
             <div className="text-gray-800 flex flex-col items-center md:items-start">
                <p className="animate text-sm md:text-4xl font-bold font-pop ">Abdelaziz Korba</p> 
                <Typical
                   className="text-sm md:text-lg font-meduim font-pop text-gray-400 my-4"
                    steps={['Freelance | full stack web developer', 1000]}
                    loop={Infinity}
                    wrapper="p"
                />
                <p className="text-xl font-meduim font-pop text-gray-700 hidden md:block ">Experienced Full Stack web developer Skilled in ReactJs</p>
                <p className="text-xl font-meduim font-pop text-gray-700 my-2 hidden md:block">    and Django... , Strong engineering professional with a</p>
                <p className="text-xl font-meduim font-pop text-gray-700 hidden md:block">    Licentiate degree . </p>
                <img className="mt-12  hidden md:block" src={cercles} alt=""/>
             </div>  
             <img className="w-80 md:w-96 2xl:w-auto " src={heroXl} alt="my" />
            </div>
        </div>
    )
}

export default Hero
