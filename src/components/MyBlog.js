import React,{useEffect,useState} from 'react'
import myblog from '../images/myblog.png'
import django from '../icons/django.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import demo from '../icons/demo.png'



function MyBlog() {

    const [show, setShow] = useState(false)

    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])
    
    return (
    <div className="container mx-auto 2xl:px-20 flex flex-wrap justify-center md:justify-around md:items-center md:mb-16">
        <a className="relative" href="https://abdelazizkb-blog.herokuapp.com/" target="_blank" rel="noopener noreferrer" onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>setShow(false)}>
            <img data-aos="flip-right" className="w-72 md:w-80 2xl:w-auto " src={myblog} alt="my blog"/>
            <div className={`absolute w-full h-full text-lg font-pop font-medium rounded-lg bg-white top-0 left-0 flex items-center justify-center opacity-50 ${(!show)&&" hidden"}`}><img className="mr-2" src={demo} alt="demo"/>Demo</div>
        </a>
        <div>
            <div className="my-2">
                <span className="text-custom-blue text-lg md:text-2xl font-pop font-bold ">Personel blog (prototype)</span>
                <div className="">
                    <p className="text-sm md:text-xl font-pop font-medium text-gray-700 mt-2">Blog post where users can sign in </p> 
                    <p className="text-sm md:text-xl font-pop font-medium text-gray-700 my-2">sign up and add new posts or</p> 
                    <p className="text-sm md:text-xl font-pop font-medium text-gray-700 my-2">delete/update thier posts</p> 
                </div>
                <div className="flex flex-wrap justify-start items-center -mt-6 md:-mt-4 w-4/6 ">
                    <img src={django} title="django" alt="django"/>  
               </div>
            </div>

        </div>
    </div>
    )
}

export default MyBlog
