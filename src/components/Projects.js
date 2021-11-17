import React from 'react'
import DzOxygen from './DzOxygen'

import MyBlog from './MyBlog'

function Projects() {
    return (
            <div id="projects" className="container mx-auto 2xl:px-20 flex flex-col items-center ">
                <div className="text-xl md:text-4xl font-pop font-bold text-custom-orange my-8 md:mb-12">
                    My works
                </div>
                <MyBlog/>   
                <DzOxygen/>
            </div>
    )
}

export default Projects
