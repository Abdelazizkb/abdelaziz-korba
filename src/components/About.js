import React,{useEffect} from 'react'
import about from '../images/about.png'
import mailB from '../icons/mailB.png'
import phone from '../icons/phone.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])
    return (
        <div id="about" data-aos="fade-up" className="w-full bg-custom-backSm md:bg-custom-backXl py-16 sm:py-6 -mt-24 sm:mt-0">
            <div className="container mx-auto 2xl:px-10 flex flex-col items-center ">
                <div className="text-xl md:text-4xl font-pop font-bold text-custom-orange mb-4 md:mb-12">
                    About me
                </div>
                <div className="w-5/6 xl:w-4/6 flex flex-wrap justify-center lg:justify-between items-center">
                    <img data-aos="zoom-in" className="w-64 md:w-80 2xl:w-auto " src={about} alt="me" style={{maxWidth:340}}/>
                    <div>
                        <div className="md:mb-12">
                            <span className="text-lg md:text-2xl font-pop font-bold float">I'm Korba Abdelaziz</span>
                            <div className="hidden md:block">
                                <p className="text-xl font-meduim font-pop text-gray-700 mt-4">student master degree ,Experienced Full Stack web</p> 
                                <p className="text-xl font-meduim font-pop text-gray-700 my-2">developer Skilled in ReactJs and Django... , Strong</p> 
                                <p className="text-xl font-meduim font-pop text-gray-700 my-2">engineering professional with a  Licentiate degree</p> 
                                <p className="text-xl font-meduim font-pop text-gray-700 my-2">focused in management Information Systems,</p> 
                                <p className="text-xl font-meduim font-pop text-gray-700 ">from university constantine 2.</p> 
                            </div>
                            <div className="block md:hidden text-left">
                                <p className="text-sm  font-pop font-normal text-gray-700 mt-1">student master degree Strong  </p> 
                                <p className="text-sm  font-pop font-normal text-gray-700 my-1">engineering professional with a  Licentiate  </p> 
                                <p className="text-sm font-pop font-normal text-gray-700 ">degree focused in management </p> 
                                <p className="text-sm  font-pop font-normal text-gray-700 my-1">Information Systems,from university constantine 2.</p> 
                                <p className="text-sm  font-pop font-normal text-gray-700 ">Experienced Full Stack web developer</p> 
                                <p className="text-sm  font-pop font-normal text-gray-700 my-1">Skilled in ReactJs and Django.</p> 
                            </div>
                            <div className="flex flex-wrap items-end mt-4  ">
                                <span className="flex items-center text-sm md:text-lg font-pop font-medium text-gray-700 mr-10 "><img className="mr-3" src={mailB} alt=""/>korbaabdo@gmail.com</span>
                                <span className="flex items-center text-sm md:text-lg font-pop font-medium text-gray-700 mt-2 md:mt-0"><img className="mr-2"src={phone} alt=""/>+213 779 247 735</span>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default About
