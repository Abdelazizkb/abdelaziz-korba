import React,{useEffect} from 'react'
import Carousel from './Carousel'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {

    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])

    return (
        <div id="services" data-aos="fade-up" className="bg-custom-backSm md:bg-custom-backXl py-8 md:py-28">
            <div className="container mx-auto 2xl:px-20  flex justify-around items-center flex-wrap">
                <div className="flex flex-col items-center md:items-start mb-4 md:mb-16">
                    <span className="text-xl md:text-4xl font-pop font-bold text-custom-orange md:-mt-16">
                       My services
                    </span>
                    <p className="text-lg md:text-xl font-pop md:font-bold  my-2">I provide a wide range of creative </p>
                    <p className="text-lg md:text-xl font-pop md:font-bold  ">services</p>
                </div>

                <div>
                    <Carousel/>
                </div>


            </div>
        </div>
    )
}

export default Services
