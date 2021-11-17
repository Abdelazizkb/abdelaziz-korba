import React,{useEffect} from 'react'
import Form from './Form'
import SocialMedia from './SocialMedia'
import AOS from 'aos';
import 'aos/dist/aos.css';



function Contact() {
    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])
    return (
        <div id="contact" data-aos="fade-up" className="mt-24 py-8 bg-gray-700 overflow-hidden">
            <div className="container mx-auto xl:px-20  flex justify-around items-center flex-wrap">
                <div className="relative flex flex-col items-center md:items-start text-white">
                    <span className="text-2xl md:text-4xl font-pop font-bold text-custom-orange my-4 md:my-2">
                        Contact me
                    </span>
                    <p className="hidden md:block text-lg md:text-xl font-pop font-medium  mt-2 mb-1">Feel free to contact me in one of </p>
                    <p className="hidden md:block text-lg md:text-xl font-pop font-medium  mb-4">following social media platforms</p>   
                    <SocialMedia/>
                </div>
                <div>
                    <Form/>
                </div>


            </div>
        </div>
    )
}

export default Contact
