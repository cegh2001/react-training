import React, { useContext, useState } from 'react'
import { Transition } from "@headlessui/react";
import { MenuContext } from '../hooks/MenuContext';
import { MdOutlineArrowCircleRight } from "react-icons/md";



const Home = () => {
  const {showMenu}= useContext(MenuContext)
  const [isOpen, setIsOpen] = useState(false);

    return (
      //Contenido
      <div name= "home" className=" w-full h-screen bg-primary">
        {/* Contenido del home */}
        <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          {/* Contenido especifico del home */}
          <div className="">
            <p className="animate-pulse text-quinary">Bienvenido, esta es</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-tertiary">
              La landing page del
            </h1>
            <h2 className=" text-4xl sm:text-7xl font-bold text-quaternary">
              Equipo de Desarrollo de GTI
            </h2>
            <p className="text-tertiary py-4 max-w-[700px]">Conoce mas</p>
          </div>
          <div>
            <button className="text-quaternary group border-2 px-6 py-3 my-3 flex items-center hover:bg-secondary">
              Nuestros proyectos
              <span className="ml-3 group-hover:rotate-90 duration-300"> <MdOutlineArrowCircleRight className='w-5 h-5'/> </span>
            </button>
          </div>
          {/* Contenido animado */}
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={!showMenu ? "relative text-tertiary" : "hidden"}
          >
            <div className="mt-3 pt-3">
              <p>Alternar</p>
            </div>
            <Transition
              show={isOpen}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100 "
              leave="transition-opacity duration-75"
              leaveFrom="opacity-100 "
              leaveTo="opacity-0"
            >
              {/* Contenido que se desvanecerá */}
              <div className="absolute">
                <li> Contenido animado </li>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    );
  }

export default Home