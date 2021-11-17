import React,{useEffect} from 'react'
import facebook from '../icons/facebook.png'
import instagram from '../icons/instagram.png'
import linkedin from '../icons/linkedin.png'
import github from '../icons/github.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function SocialMedia() {
    useEffect(() => {
        AOS.init({duration: 4000});
    }, [])
    return (
        <div className="flex justify-between items-center w-44">
          <a data-aos="zoom-in" href="https://www.facebook.com/abdelaziz.korba.7" target="_blank"><img class="w-8" src={facebook}/></a>
          <a data-aos="zoom-in" href="https://github.com/Abdelazizkb" target="_blank"><img class="w-8 pl-1" src={github}/></a>
          <a data-aos="zoom-in" href="https://dz.linkedin.com/in/abdelaziz-korba" target="_blank"><img class="w-8 mx-2" src={linkedin}/></a>
          <a data-aos="zoom-in" href="https://www.instagram.com/abdelaziz_krb" target="_blank"><img class="w-8" src={instagram}/></a>
        </div>
    )
}

export default SocialMedia
