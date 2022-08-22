import React from "react";
import mail from '../assets/icons/mail.png'

const Button = () => {
  return (
    <button className="flex items-center bg-primary text-white  px-4 py-2 rounded-md text-xs font-bold lg:text-md font-[Poppins]">
      <img className="mr-1" src={mail}/> Contact me
    </button>
  );
};

export default Button;
