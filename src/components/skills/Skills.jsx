import React,{useState,useEffect} from 'react'
import django from '../../assets/icons/skills/django.png'
import react from '../../assets/icons/skills/react.png'
import tailwind from '../../assets/icons/skills/tailwind.png'
import js from '../../assets/icons/skills/javascript.png'
import python from '../../assets/icons/skills/python.png'
import boostrap from '../../assets/icons/skills/bootstrap.png'
import mysql from '../../assets/icons/skills/mysql.png'
import html from '../../assets/icons/skills/html.png'
import css from '../../assets/icons/skills/css.png'
import jquery from '../../assets/icons/skills/jquery.png'
import circle from '../../assets/icons/skills/circle.png'
import logo from '../../assets/logo.png'
import Skillslist from './Skillslist'
import Skill from './Skill'

function Skills() {
  const [item, setItem] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      if(item==LIST.length-1)
        setItem(0)
      else
        setItem(item+1)
    }, 1000);
    return () => clearInterval(interval);
  }, [item])
  
  return (
    <div data-aos="fade-up" className=" ">
      <div className="container max-w-6xl mx-auto flex flex-col justify-center items-center flex-wrap">
        <div className="flex flex-col items-center ">
          <span className="text-primary  font-bold text-6xl mb-7 font-[Poppins]">
            My skills
          </span>
          <p className="w-96 text-black/80 font-semibold text-justify font-[Poppins]">
            -- I help ambitious bussiness like your generate more profits
            by establishing a connection with customers and growing  sales
          </p>
        </div>

        <div className='relative'>
          <div data-aos="zoom-in" className="relative w-64 h-64 md:w-128 md:h-128 overflow-hidden my-4">
            <img className="animate-spin-slow w-64 h-64 xl:w-auto xl:h-auto size-circle" src={circle} alt="circle" />
            <p className="hidden md:block absolute bottom-1/2 left-1/2 -ml-8 -mb-4 text-lg md:text-2xl font-pop font-bold ">AB-K</p>
            <img className="w-8 xl:w-auto absolute bottom-24 left-16 xl:bottom-48 xl:left-28" src={django} alt="django" />
            <img className="w-8 xl:w-auto absolute top-20 right-20 xl:top-28 xl:right-44" src={react} alt="react" />
            <img className="w-8 xl:w-auto absolute bottom-20 right-20  xl:bottom-44 xl:right-28" src={tailwind} alt="tailwind" />
            <img className="w-8 xl:w-auto absolute top-28 right-8 xl:top-56 xl:right-8" src={js} alt="js" />
            <img className="w-8 xl:w-auto absolute bottom-8 left-24 xl:bottom-16 xl:left-48" src={python} alt="python" />
            <img className="w-8 xl:w-auto absolute top-16 left-12 xl:top-40 xl:left-8" src={boostrap} alt="boostrap" />
            <img className="w-8 xl:w-auto absolute bottom-5 right-12 xl:bottom-16 xl:right-12" src={mysql} alt="mysql" />
            <img className="w-8 xl:w-auto absolute top-10 right-7 xl:top-20 xl:right-8" src={html} alt="html" />
            <img className="w-8 xl:w-auto absolute top-1 left-28 xl:top-1 xl:left-40" src={css} alt="css" />
            <img className="w-8 xl:w-auto absolute bottom-24 left-1 xl:top-68 xl:left-6" src={jquery} alt="jquery" />
          </div>
          <div className={`hidden md:block absolute ${LIST[item].position}`}>
            <Skill name={LIST[item].name} src={LIST[item].src} star={LIST[item].star}/>
          </div>
        </div>




      </div>
    </div>
  )
}

export default Skills

const LIST =[
  {
    name:"css",
    src:css,
    star:5,
    position:"-top-8 left-52 ml-2"
  },
  {
    name:"html",
    src:html,
    star:5,
    position:"top-6 left-124"
  },
  {
    name:"javascript",
    src:js,
    star:4,
    position : "top-44 left-124"
  },
  {
    name:"django",
    src:django,
    star:4,
    position:"left-40 bottom-48 mb-9"
  },
  {
    name:"python",
    src:python,
    star:4,
    position:"left-60 bottom-20 mb-4"
  },
  {
    name:"tailwind",
    src:tailwind,
    star:5,
    position :"left-80 bottom-48 mb-6"
  },
  {
    name:"bootstrap",
    src:boostrap,
    star:5,
    position:"left-20 bottom-64 mb-4"
  },
  {
    name:"react",
    src:react,
    star:5,
    position: "left-68 bottom-72 mb-4"
  },
  {
    name:"mysql",
    src:mysql,
    star:4,
    position:"bottom-24 -right-68"
  },
  {
    name:"jquery",
    src:jquery,
    star:2,
    position:"left-16 bottom-36 mb-4"
  }
]