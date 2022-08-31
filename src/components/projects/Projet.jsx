import React from 'react'

function Projet({children,title,image,link=" "}) {
    return (
        <a class="rounded-lg bg-white flex flex-col items-center shadow-xl mx-4 md:-mx-8 my-4 border-1 z-0 hover:mx-9 " href={link}>
            <div class="w-68 md:w-80 h-40  "><img class="w-full h-full rounded-t-lg border-b-1" src={image} /></div>
            <div class="w-5/6 md:w-80 h-40 p-4 flex flex-col items-start">
                <p class="text-xl font-bold capitalize">{title}</p>
                <p class="font-medium text-gray-500 leading-relaxed">
                    {children}
                </p>
            </div>
        </a>
    )
}

export default Projet