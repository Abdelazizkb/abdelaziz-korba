import React from 'react'
import HeroImg from './HeroImg'
import HeroText from './HeroText'

function Hero() {
  return (
    <div className='container max-w-6xl mx-auto flex flex-wrap-reverse items-center justify-around w-full py-0 md:mt-8 '>
        <HeroText />
        <HeroImg/>
    </div>
  )
}

export default Hero