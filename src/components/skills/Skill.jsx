import React from 'react'
import golden from '../../assets/icons/skills/goldenstar.png'
import gray from '../../assets/icons/skills/graystar.png'
import jquery from '../../assets/icons/skills/jquery.png'
import SkillBorder from '../../assets/skill-border.svg'

function Skill({ name, src, star}) {

    const GOLDEN = [...Array(star).keys()];
    const GRAY = [...Array(5-star).keys()];

    return (
        <div className='my-8 w-auto  h-auto'>
            <img className='absolute top-0 left-0 w-full h-full' src={SkillBorder}/>
            <div className='  w-80 h-10 -mt-1   bg-white rounded-md flex items-center justify-around my-2 cursor-pointer'>
                <img className='h-8 ml-2' src={src} alt="" />
                <p className='text-black/80 font-semibold text-center font-[Poppins] w-24  capitalize'>{name}</p>
                <div className='flex items-center justify-between w-32'>
                    {GOLDEN.map((e,i)=>(
                        <img src={golden} alt="" />
                    ))}
                    {GRAY.map((e,i)=>(
                        <img src={gray} alt="" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skill

