import React,{useEffect}  from 'react'
import circle from '../images/circle.png'
import django from '../images/django.png'
import react from '../images/react.png'
import tailwind from '../images/tailwind.png'
import js from '../images/js.png'
import python from '../images/python.png'
import boostrap from '../images/boostrap.png'
import mysql from '../images/mysql.png'
import html from '../images/html.png'
import css from '../images/css.png'
import jquery from '../images/jquery.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {

    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])

    return (
        <div data-aos="fade-up" className="py-8 ">
            <div className="container mx-auto 2xl:px-20  flex justify-center md:justify-around items-center flex-wrap">
                <div className="flex flex-col items-center md:my-10 lg:items-start">
                    <span data-aos="ease-in" className="text-xl md:text-4xl font-pop font-bold text-custom-orange md:mb-0 md:-mt-16">
                       My skills
                    </span>
                    <p className=" md:block text-lg md:text-xl font-pop md:font-medium  md:my-2">Technologies that I will use to  </p>
                    <p className=" md:block text-lg md:text-xl font-pop md:font-medium  ">implement your website</p>

                </div>

                <div data-aos="zoom-in" className="relative w-64 h-64 md:w-auto md:h-auto overflow-hidden">
                    <img className="animate-spin-slow w-64 h-64 md:w-auto md:h-auto" src={circle}/>
                    <p className="hidden md:block absolute bottom-1/2 left-1/2 -ml-8 -mb-4 text-lg md:text-2xl font-pop font-bold ">AB-K</p>
                    <img className="w-8 md:w-auto absolute bottom-24 left-16 md:bottom-64 md:left-44" src={django}/>
                    <img className="w-8 md:w-auto absolute top-20 right-20 md:top-48 md:right-56" src={react}/>
                    <img className="w-8 md:w-auto absolute bottom-20 right-20  md:bottom-52 md:right-52" src={tailwind}/>
                    <img className="w-8 md:w-auto absolute top-28 right-8 md:top-80 md:right-20" src={js}/>
                    <img className="w-8 md:w-auto absolute bottom-8 left-24 md:bottom-24 md:left-72" src={python}/>
                    <img className="w-8 md:w-auto absolute top-16 left-12 md:top-40 md:left-36" src={boostrap}/>
                    <img className="w-8 md:w-auto absolute bottom-5 right-12 md:bottom-16 md:right-36" src={mysql}/>
                    <img className="w-8 md:w-auto absolute top-10 right-7 md:top-20 md:right-28" src={html}/>
                    <img className="w-8 md:w-auto absolute top-1 left-28 md:top-2 md:left-72" src={css}/>
                    <img className="w-8 md:w-auto absolute bottom-24 left-1 md:bottom-64 md:left-2" src={jquery}/> 


                    {/*            
                    <img className="absolute bottom-52 right-52" src={tailwind}/>
                    <img className="absolute top-80 right-20" src={js}/>
                    <img className="absolute bottom-24 left-72" src={python}/>
                    <img className="absolute top-40 left-36" src={boostrap}/>
                    <img className="absolute bottom-16 right-36" src={mysql}/>
                    <img className="absolute top-20 right-28" src={html}/>
                    <img className="absolute top-2 left-72" src={css}/>
                    <img className="absolute bottom-64 left-2" src={jquery}/> */}
                </div>


            </div>
        </div>
    )
}

export default Skills
