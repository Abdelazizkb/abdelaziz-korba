import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo1.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className={` bg-white z-50 ${open ? "fixed w-full" : "relative"}`}>
      <div className="container max-w-6xl  mx-auto flex items-center font-medium justify-between">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-12" />
          <div className="flex items-center text-3xl md:hidden" >
            <Button />
            <ion-icon onClick={() => setOpen(!open)} name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              About
            </Link>
          </li>          
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Services
            </Link>
          </li>        
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Experience
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-gray-100 fixed w-screen top-0 overflow-y-auto bottom-0 pt-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block w-full">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
               About
            </Link>
          </li>         
           <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Services
            </Link>
          </li>          
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Experience
            </Link>
          </li>          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
