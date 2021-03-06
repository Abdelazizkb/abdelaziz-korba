import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';




function Form() {


    const sendMail=(e)=>{
      e.preventDefault()

      emailjs.sendForm('service_95twc0g', 'template_vymu68f',e.target, 'user_OJonQWPjlzQZjKVUQEkib')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    }
    
    useEffect(() => {
        AOS.init({duration: 4000});
    }, [])

    return (
    <form data-aos="fade-left" className="relative w-full  flex items-center py-8 px-16 " onSubmit={(e)=>sendMail(e)}> 
      <div className="absolute h-full w-full top-0 left-0  rounded" />

      <div className="flex flex-col w-full">
        <div className="relative flex flex-wrap -mx-3">
          <div className="w-full px-3">
            <input name="name"  id="name" placeholder="Full name"
              className="appearance-none block w-full font-medium font-pop font-normal bg-white border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 rounded-lg"
              type="text"  required/>
          </div>
        </div>
        <div className="relative flex flex-wrap -mx-3 ">
          <div className="w-full px-3">
            <input  name="email" placeholder="Email"
              className="appearance-none block w-full font-medium font-pop font-normal bg-white  border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 rounded-lg"
              id="email" type="email"  required/>
          </div>
        </div>
        <div className="relative flex flex-wrap -mx-3 md:mb-2">
          <div className="w-full px-3">
            <textarea  name="message" placeholder="Message"
              className=" no-resize appearance-none block w-full font-medium font-pop font-normal bg-white  border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none rounded-lg"
               id="message"></textarea>
          </div>
        </div>
        <div>
        <button data-aos="zoom-in" className="relative bg-custom-orange py-2 px-6 text-lg text-white font-pop font-medium rounded-lg shadow-md">
          send
        </button>
        </div>

      </div>

    </form>
    )
}

export default Form
