import React, { useContext } from 'react'
import gonavi  from '../assets/gonavi-icon.png'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MenuContext } from '../hooks/MenuContext';


const Header = () => {
  const {showMenu}= useContext(MenuContext)
  const {setShowMenu}= useContext(MenuContext)
  const handleClick = () => setShowMenu(!showMenu);
    
  return (
    <header className="relative bg-primary w-full h-[80px] flex justify-between items-center px-4 font-bold">
      {/* Logo */}
      <div className="flex transition ease-in-out text-tertiary hover:text-quinary">
        <img src={gonavi} alt="logo" style={{ width: "" }} />
        <h1 className="ml-1"> T </h1>
        <h1 className=" ml-0.5"> I </h1>
      </div>
      {/* Menu */}
      <div className="transition-ease-in-out text-tertiary  hover:text-quinary">
        <ul className="hidden md:flex">
          <li className="">Inicio</li>
          <li>Funciones</li>
          <li>Proyectos</li>
          <li>Acerca de</li>
          <li>Contactanos</li>
        </ul>
      </div>
      {/* Bar */}
      <div onClick={handleClick} className="md:hidden text-tertiary z-10">
        {!showMenu ? <FaBars /> : <FaTimes />}
      </div>
      {/* Menu Mobile */}
      <div
        className={
          !showMenu
            ? "hidden"
            : "bg-primary absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center"
        }
      >
        <ul className="text-4xl text-tertiary transition ease-in-out hover:text-quinary ">
          <li className="py-6">Inicio</li>
          <li className="py-6">Funciones</li>
          <li className="py-6">Proyectos</li>
          <li className="py-6">Acerca de</li>
          <li className="py-6">Contactanos</li>
        </ul>
      </div>
      {/* Social Media */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 text-quinary">
        <ul>
          <li className="w-[160px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between w-full items-center transition ease-in-out  hover:text-tertiary"
              href="https://www.linkedin.com/in/carlos-eduardo-gonzalez-henriquez/"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="pl-3 pb-2">Linkedin</h1>
              <FaLinkedin className="text-4xl mb-4" />
            </a>
          </li>
          <li className="w-[160px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between w-full items-center transition ease-in-out  hover:text-tertiary"
              href="https://github.com/cegh2001"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="pl-5 pb-2">Github</h1>
              <FaGithub className="text-4xl mb-4" />
            </a>
          </li>
          <li className="w-[160px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between w-full items-center transition ease-in-out  hover:text-tertiary"
              href="mailto:cargonzalez0601@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="pl-5 pb-2">Gmail</h1>
              <BiLogoGmail className="text-4xl mb-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header 
