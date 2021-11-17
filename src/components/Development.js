import React,{useEffect} from 'react'
import development from "../icons/development.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Development() {
    useEffect(() => {
        AOS.init({duration: 1800});
    }, [])

    return (
        <div data-aos="fade-left" className="py-4 md:py-8 px-2 md:px-6 bg-white shadow-xl mx-2 md:mx-10 rounded-lg flex flex-wrap items-center justify-center size-card ">
                <img className="md:mr-6" src={development}/>
                <div className="hidden md:block">
                    <p className="text-sm md:text-xl font-medium font-pop text-gray-700  md:mb-3">Build your website Professionally</p>
                    <p className="text-sm md:text-lg font-medium font-pop text-gray-400">I can create dynamic website using </p>
                    <p className="text-sm md:text-lg font-medium font-pop text-gray-400 my-1">html5 and css3, bootstrap javascript </p>
                    <p className="text-sm md:text-lg font-medium font-pop text-gray-400">reactjs library , python django framework.</p>
                </div>
                <div className="block md:hidden text-center">
                    <p className="text-sm md:text-xl font-medium font-pop text-gray-700 my-1 md:mb-3">Build your website Professionally</p>
                    <p className="text-sm md:text-lg font-medium font-pop text-gray-400">I can create dynamic website  </p>
                    <p className="text-sm md:text-lg font-medium font-pop text-gray-400 my-1">using html5 and css3, bootstrap  </p>
                    <p className="text-sm md:text-lg font-medium font-pop text-gray-400">javascript reactjs library , python django framework.</p>
                </div>
        </div>
    )
}

export default Development
