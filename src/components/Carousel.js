import React,{useState} from 'react'
import back from "../icons/back.png"
import next from "../icons/next.png"
import Development from './Development'
import ellipse from "../icons/ellipse.png"
import polygon from "../icons/polygon.png"
import rectangle from "../icons/rectangle.png"
import Design from './Design'
import Api from './Api'



function Carousel() {
    const [show, setShow] = useState(1)
    const handleClick=(num)=>{
          if(num>0){
              if(show===3){
                 setShow(1)  
              }
              else
                setShow(show+1)
          }
          else {
             if(show===1)
               setShow(3)
             else
               setShow(show-1) 
            }  
    }
/*     useEffect(() => {
        window.setInterval(()=>{handleClick(+1)}, 5000);
    },[]) */


    return (
        <div className="relative flex flex-col items-center w-auto md:w-custom overflow-hidden">
            <div className="flex justify-between items-center">
                <img className="cursor-pointer" src={back} onClick={()=>{handleClick(-1)}} alt=""/>
                {(show===1)&&<Development/>}
                {(show===2)&&<Design/>}
                {(show===3)&&<Api/>}
                 
                <img className="cursor-pointer" src={next} onClick={()=>{handleClick(+1)}} alt=""/>
            </div>
            <div className="mt-8 md:mt-20 py-1 flex">
                <img className={((show===1)?"animate-spin-rectangle":"")} src={rectangle} alt="rectangle"/>
                <img className={`mx-2 ${(show===2)&&" animate-pulse"}`} src={ellipse} alt="ellipse"/>
                <img className={((show===3)?"animate-bounce":"")} src={polygon} alt="polygon"/>
            </div>
        </div>
    )
}

export default Carousel
