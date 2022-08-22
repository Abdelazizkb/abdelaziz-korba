import React, { useEffect, useState } from 'react'
import '../../assets/services.css'
import Avatr from './Avatr'

const style =(color)=>( `   background-color: ${color};
                            box-shadow: 0 0 0 5px ${color}33,
                            0 0 0 10px ${color}22,
                            0 0  20px ${color}11,
                            0 0  50px ${color};`)

function Service({ id, color }) {

    const [item, setItem] = useState(0)
    var styleElem = document.head.appendChild(document.createElement("style"));

    

    useEffect(() => {
        const gardian = () => ` linear-gradient(90deg, ${color} ${item}%, white 0%)`;
        let interval = setInterval(() => {
            let border = document.getElementsByClassName("service-border")[id];
            border.style.backgroundImage = gardian(item)
            if (item !== 100) {
                setItem(item + 1)
            }
            console.log(item)
        }, 20)
        return () => clearInterval(interval);
    }, [item])
    
    useEffect(() => {
        styleElem.innerHTML = `.service-title:nth-child(${id+1})::after {${style(color)}}`;
        console.log(styleElem)
    }, [color])
    


    return (
        <div class="service mx-16 my-8">
            <div class="service-title flex items-center justify-center">
                <p className='text-3xl text-center text-black/70 font-medium '>Build your website Professionally</p>
                <Avatr color={color} />
            </div>
            <div class="service-border">

            </div>
        </div>
    )
}

export default Service