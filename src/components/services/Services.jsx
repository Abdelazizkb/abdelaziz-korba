import React from 'react'
import Service from './Service'

function Services() {
    return (
        <div className="mt-5 ">
            <div className="container max-w-6xl mx-auto flex flex-col justify-center items-center flex-wrap">
                <span className="text-primary  font-bold text-6xl mb-7 font-[Poppins]">
                    Services I offer
                </span>
                <p className="w-96 text-black/80 font-semibold text-justify font-[Poppins]">
                    -- I help ambitious bussiness like your generate more profits
                    by establishing a connection with customers and growing  sales
                </p>
                <div className='flex flex-wrap justify-center w-full mt-8'>
                    <Service id={0} color="#FE8D7B"/>
                    <Service id={1} color="#C7DAC7"/>
                    <Service id={2} color="#03C2C9"/>
                </div>
            </div>
        </div>
    )
}

export default Services