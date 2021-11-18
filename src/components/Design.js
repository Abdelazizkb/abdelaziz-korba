import React,{useEffect} from 'react'
import design from "../icons/design.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Design() {
    useEffect(() => {
        AOS.init({duration: 1800});
    }, [])

    return (
        <div data-aos="fade-left" className="py-4 md:py-8 px-2 md:px-6 bg-white shadow-xl mx-2 md:mx-10 rounded-lg flex flex-wrap items-center justify-center size-card">
                <img className="md:mr-10" src={design}/>
                <div className="hidden md:block">
                    <p className="text-xl font-bold font-pop text-gray-700 mb-3">Make powerfull ui-ux design</p>
                    <p className="text-lg font-medium font-pop text-gray-500">Create powerful design with figma  </p>
                    <p className="text-lg font-medium font-pop text-gray-500 my-1"> Strong preference for easy to use, </p>
                    <p className="text-lg font-medium font-pop text-gray-500"> intuitive UX/UI..</p>
                </div>
                <div className="block md:hidden text-center">
                    <p className="text-sm font-bold font-pop text-gray-700 my-1">Make powerfull ui-ux design</p>
                    <p className="text-sm font-medium font-pop text-gray-500">Create powerful design with  figma </p>
                    <p className="text-sm font-medium font-pop text-gray-500 my-1"> strong preference for easy to use,</p>
                    <p className="text-sm font-medium font-pop text-gray-500"> easy to use, intuitive UX/UI..</p>
                </div>
        </div>
    )
}

export default Design
