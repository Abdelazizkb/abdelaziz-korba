import React,{useEffect} from 'react'
import menu from '../icons/menu.png'
import mail from '../icons/mail.png'

function NavBar() {

    useEffect(() => {
        window.onscroll = function() {myFunction()};

        // Get the header
        var header = document.getElementById("myHeader");
        
        // Get the offset position of the navbar
        var sticky = header.offsetTop;
        
        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
          if (window.pageYOffset > 100 ) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        };
        window.onresize = function(event) {
             if (window.matchMedia("(max-width: 852px)").matches) {
            header.classList.remove("sticky");
          } 
        };
    }, [])

    return (
        <header className="fixed top-0 z-40" id="myHeader" >
        <nav className="container mx-auto xl:px-20">
            <input type="checkbox" id="checkbox" />
            <label for="checkbox" className="checkbtn">
                <img src={menu} />
            </label>
            <label className="logo font-pop lg:ml-10 xl:ml-0">Abdelazizkb</label>
            <ul>
                <li><a className="font-pop font-meduim hover:text-custom-orange" href="#about">About</a></li>
                <li><a className="font-pop font-meduim hover:text-custom-orange" href="#services">Services</a></li>
                <li><a className="font-pop font-meduim hover:text-custom-orange" href="#projects">Experience</a></li>
                <li><a className="font-pop font-normal bg-custom-orange text-white p-2 rounded-md block " href="#contact"><span className="flex align-text-center items-center"><img className="w-6 h-6 mr-2 inline" src={mail} />Contact me</span> </a></li>
            </ul>
        </nav>
        </header>
    )
}

export default NavBar