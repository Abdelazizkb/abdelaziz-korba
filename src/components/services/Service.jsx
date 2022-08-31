import React, { useEffect, useState } from 'react'
import '../../assets/services.css'
import Avatr from './Avatr'


function Service({ id, color }) {

    const [item, setItem] = useState(0)



    useEffect(() => {
        const gardian = () => ` linear-gradient(90deg, ${color} ${item}%, white 0%)`;
        let interval = setInterval(() => {
            let border = document.getElementsByClassName("service-border")[id];
            border.style.backgroundImage = gardian(item)
            setItem(item+1)
            if (item === 100) {
                clearInterval(interval)
            }
            console.log(1)
        }, 20)
        return () => clearInterval(interval);
    }, [item])

    useEffect(() => {
            let afterIcon = document.createElement("style");
            afterIcon.innerHTML =
            `.service:nth-child(${id+1})::after{
                content: '';
                z-index: 8;
                position: absolute;
                top: 46%;
                left: 97%;
                margin-left: 2px;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background-color: ${color};
                box-shadow: 0 0 0 5px ${color}33,
                0 0 0 10px ${color}22,
                0 0  20px ${color}11,
                0 0  50px ${color};
            }`;
            document.head.appendChild(afterIcon);
    }, [])



    return (
        <div class="service mx-16 my-8 ">
            <div class="service-title flex items-center justify-center bg-cover">
                <p className='text-3xl text-center text-black/70 font-medium '>Build your website Professionally</p>
                <Avatr color={color} />
            </div>
            <div class="service-border">

            </div>
        </div>
    )
}

export default Service