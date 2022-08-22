import React from 'react'
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instagram.png'
import linkedin from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'

function Socialmedia() {
  return (
    <div className="flex justify-between items-center w-44 md:mt-4">
        <a data-aos="zoom-in" href="https://www.facebook.com/abdelaziz.korba.7" target="_blank" rel="noopener noreferrer"><img  src={facebook} alt=""/></a>
        <a data-aos="zoom-in" href="https://github.com/Abdelazizkb" target="_blank" rel="noopener noreferrer"><img  src={github} alt=""/></a>
        <a data-aos="zoom-in" href="https://dz.linkedin.com/in/abdelaziz-korba" target="_blank" rel="noopener noreferrer"><img  src={linkedin} alt=""/></a>
        <a data-aos="zoom-in" href="https://www.instagram.com/abdelaziz_krb" target="_blank" rel="noopener noreferrer"><img  src={instagram} alt=""/></a>

    </div>
  )
}

export default Socialmedia