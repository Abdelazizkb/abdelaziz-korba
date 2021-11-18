import React,{useEffect,useState} from 'react'
import dzoxygen from '../images/dzoxygen.png'
import mailB from '../icons/mailB.png'
import django from '../icons/django.png'
import react from '../icons/react.png'
import tailwind from '../icons/tailwind.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import demo from '../icons/demo.png'


function DzOxygen() {
    const [show, setShow] = useState(false)
    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])
    
    return (
        <div className="container mx-auto 2xl:px-20 flex flex-wrap-reverse justify-center md:justify-around items-center"  >
        <div>
            <div className="my-2">
                <span className="text-custom-blue text-lg md:text-2xl font-pop font-bold ">DzOxygene (prototype)</span>
                <div className="">
                    <p className="text-sm md:text-xl font-pop font-medium text-gray-700 mt-2">Dzoxygen platform for sale and donate </p> 
                    <p className="text-sm md:text-xl font-pop font-medium text-gray-700 my-2">oxygen within the covid-19 panedemic </p> 
                    <p className="text-sm md:text-xl font-pop font-medium text-gray-700 my-2">90% completed </p> 
                </div>
                <div className="flex flex-wrap items-center justify-around -mt-6 md:mt-2 ">
                    <img src={django} title="django" alt="django"/>
                    <img src={react} title="django" alt="django"/>
                    <img src={tailwind} title="django" alt="django"/>
{/*                     <span className="flex items-center text-sm md:text-lg font-pop font-medium text-gray-700 mr-10 "><img className="mr-3" src={mailB}/>korbaabdo@gmail.com</span>
                    <span className="flex items-center text-sm md:text-lg font-pop font-medium text-gray-700 mt-2 md:mt-0"><img className="mr-2"src={phone}/>+213 779 247 735</span>
           */}      </div>
            </div>

        </div>
        <a className="relative" href="#"  onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>setShow(false)}>
            <img data-aos="flip-left" className="w-72 md:w-80 2xl:w-auto " src={dzoxygen}/>
            <div className={`absolute w-full h-full text-lg font-pop font-medium rounded-lg bg-white top-0 left-0 flex items-center justify-center opacity-50 ${(!show)&&" hidden"}`}><img className="mr-2" src={demo} alt="demo"/>Coming soon</div>
        </a>
        
    </div>
    )
}

export default DzOxygen
