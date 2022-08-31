import React from 'react'
import Step from './Step'

const Road = {

}

function Roadmap() {
    return (
        <div className="relative h-96 container max-w-6xl mx-auto flex flex-col justify-start items-center flex-wrap">
            <div className="flex flex-col items-center ">
                <span className="text-primary  font-bold text-6xl mb-7 font-[Poppins]">
                    Roadmap
                </span>
                <p className="text-black/80 font-semibold text-justify font-[Poppins]">
                    -- roadmap to excute your idea
                </p>

                <div className='absolute left-5 top-2/3 w-[2000px] h-1 border-b-2 border-dashed border-primary'/>



            </div>


        </div>

    )
}

export default Roadmap