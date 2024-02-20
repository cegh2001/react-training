import React from 'react'
import { Transition } from "@headlessui/react";
import { useState } from "react";


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
      <div name="home" className="w-full h-screen bg-secondary">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-quinary">Hola</p>
          <h1 className="text-tertiary text-5xl font-bold">Soy Carlos</h1>
          <h2 className="text-quaternary text-3xl font-bold">
            Desarrollador de Software
          </h2>
          <div>
            <div
              className=""
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              Alternar
            </div>
            <Transition
              show={isOpen}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/* Contenido que se desvanecerá */}
              <div className="my-element">Contenido animado</div>
            </Transition>
          </div>
        </div>
      </div>
    );
  }

export default Home