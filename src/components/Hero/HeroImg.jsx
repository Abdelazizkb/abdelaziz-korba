import React from 'react'
import hero from '../../assets/icons/hero.svg'
import planet from '../../assets/icons/planet.svg'

function HeroImg() {
  return (
    <div className="relative lg:-mr-10 z-0 overflow-hidden max-h-min">
        <img style={{maxHeight:450}}  className=""  src={hero} />
    </div>
  )
}

export default HeroImg