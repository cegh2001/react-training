import React from 'react'

const Header = () => {
  return (
    <header className="fixed flex justify-betwee items-center w-full h-4 px-4">
      {/* Logo */}
      <div className="bg-primary text-tertiary text-center text-2xl w-1/6">
        <h1>Gonavi IT Logo</h1>
      </div>
      {/* Menu */}
      <div className="bg-secondary flex-1 text-tertiary text-center">
        <ul>
          <li>Home</li>
          <li>Functions</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
      {/* Menu Mobile */}
      <div className="bg-secondary flex-1 text-tertiary text-center hidden">
        <ul>
          <li>Home</li>
          <li>Functions</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
      
    </header>
  );
}

export default Header
