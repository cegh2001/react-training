import React from 'react'

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-secondary"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className='text-quinary'>
          Hola
        </p>
        <h1 className='text-tertiary text-5xl font-bold'>
          Soy Carlos
        </h1>
        <h2 className='text-quaternary text-3xl font-bold'>
          Desarrollador de Software
        </h2>
      </div>
    </div>
  );
}

export default Home