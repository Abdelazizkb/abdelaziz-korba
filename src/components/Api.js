import React,{useEffect} from 'react'
import api from "../icons/api.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Api() {
    useEffect(() => {
        AOS.init({duration: 1800});
    }, [])
    return (

        <div data-aos="fade-left" className="py-4 md:py-8 px-2 md:px-6 bg-white shadow-xl mx-2 md:mx-10 rounded-lg flex flex-wrap items-center justify-center size-card">
            <img className="md:mr-10" src={api}/>
            <div className="hidden md:block">
                <p className="text-xl font-medium font-pop text-gray-700 mb-3">Build your Api</p>
                <p className="text-lg font-medium font-pop text-gray-400">Create and integrate your web   </p>
                <p className="text-lg font-medium font-pop text-gray-400 my-1"> Strong preference for easy to use, </p>
                <p className="text-lg font-medium font-pop text-gray-400"> intuitive UX/UI..</p>
            </div>
            <div className="block md:hidden text-center">
                <p className="text-sm font-medium font-pop text-gray-700 my-1">Build your Api</p>
                <p className="text-sm font-medium font-pop text-gray-400">Create and integrate your web   </p>
                <p className="text-sm font-medium font-pop text-gray-400 my-1">application interface with django </p>
                <p className="text-sm font-medium font-pop text-gray-400">rest framework.</p>
            </div>
        </div>
    )
}

export default Api
