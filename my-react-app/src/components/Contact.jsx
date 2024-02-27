import React from 'react'
import plane from '../assets/plane.png'

const Contact = () => {
  return (
    <div className="py-12 w-full md:h-screen text-tertiary bg-primary">
      <div className='earth translate-x-10'>
        <img src= {plane} alt="plane" className="w-1/2 md:w-1/4" />
      </div>
    </div>
  );
}

export default Contact