import React from 'react'
import abdelaziz from '../assets/about.png'
import education from '../assets/icons/education.png'
import Buttonblur from './Buttonblur'

function About() {
  return (
    <div className='w-full  bg-gray-100 mb-10'>
        <div className='container max-w-6xl mx-auto flex items-center justify-between'>
            <div className='mr-5 flex flex-col items-start'>
                <h1 className='text-primary font-bold text-6xl mb-7 font-[Poppins]'>Who I'm !</h1>
                <p className='w-72 text-black/80 font-semibold text-justify font-[Poppins]'>
                Experienced Web developer . Skilled in
                Responsive Web Design, Front-End and Back-End
                web development. Proficient in JavaScript 
                and Python. Strong engineering professional
                with a Master degree in information systems 
                and web technologies 
                from university Abdelhamid Mehri Constantine 2 ranked among the top ten.
                </p>
            </div>
            <img style={{maxHeight:550}} src={abdelaziz} alt="" />
            <div className='mt-10'>
                <h3 className='font-bold  text-4xl text-black/75 flex items-center italic mb-4'> <img style={{maxHeight:40,marginRight:10}} src={education} alt="" /> Education</h3>
                <div className='ml-3 '>
                    <p className='w-96 text-justify font-bold text-sm text-black/70 font-[Poppins]'>
                        Master degree in information systems and web technologies
                    </p>
                    <p className='w-72 text-justify  font-medium text-xs py-2 text-black/40 border-b-1 border-black/20 italic font-[Poppins]'>
                        University Abdelhamid Mehri Constantine 2
                    </p>
                </div>
                <div className='ml-3 my-2'>
                    <p className='text-justify font-bold text-sm text-black/70 font-[Poppins]'>
                        Licence degree in information systems 
                    </p>
                    <p className='w-72 text-justify font-medium text-xs text-black/40  py-2 border-b-1 border-black/20  italicfont-[Poppins]'>
                        University Abdelhamid Mehri Constantine 2
                    </p>
                </div>
                <div className='ml-3 '>
                    <p className='text-justify font-bold text-sm text-black/70 font-[Poppins]'>
                        Baccalaureate series experimental sciences
                    </p>
                    <p className='w-72 text-justify  font-medium text-xs py-2 text-black/40  border-b-1 border-black/20 italic font-[Poppins]'>
                        Si el houasse high school
                    </p>
                </div>
                <div className='flex mt-4 ml-3 items-center'>
                    <Buttonblur/>
                    <p className='ml-4 font-medium text-xs text-black/75 font-[Poppins]'>My resume </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About