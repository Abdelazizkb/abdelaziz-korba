import React from 'react'
import Projet from './Projet'
import imdb from '../../assets/projects/imdb.jpg'
import dzoxygen from '../../assets/projects/dzoxygen.png'
import pshare from '../../assets/projects/pshare.png'
import hexacotic from '../../assets/projects/hexacotic.png'

function Projects() {
    return (
        <div class=" flex flex-col items-center bg-about py-4 md:py-8 " id="projects">
            <span class="text-primary  font-bold text-6xl mb-7 font-[Poppins]">Projects</span>

            <div class="max-w-screen-5xl px-4  mx-auto flex flex-wrap justify-center">


                <Projet title="dzoxygene" image={dzoxygen}>
                    Platform for sale and share oxygen bottle,developed within the corona pandemic
                </Projet>
                <Projet title="Pshare" image={pshare}>
                    Platform for sale and share oxygen bottle,developed within the corona pandemic
                </Projet>
                <Projet title="IMDb" image={ imdb}>
                    Platform for sale and share oxygen bottle,developed within the corona pandemic
                </Projet>
                <Projet title="Hexacotic" image={hexacotic}>
                    Platform for sale and share oxygen bottle,developed within the corona pandemic
                </Projet>

            </div>
        </div >
    )
}

export default Projects