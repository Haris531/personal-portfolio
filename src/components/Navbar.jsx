import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false)
  const handleShowNav = () => {
    setShowNav(!showNav)
  }

  return (
    <nav className="w-full bg-[#E3EFFD] text-black fixed top-0 left-0 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-around items-center px-6 py-4">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-red-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          Haris Ahmad
        </h1>
        <ul className="hidden sm:flex space-x-8 text-sm items-center">
          <li><Link to="/#home" className="hover:text-blue-600 transition-colors duration-200">Home</Link></li>
          <li><Link to="/#about" className="hover:text-blue-600 transition-colors duration-200">About</Link></li>
          <li><Link to="/#projects" className="hover:text-blue-600 transition-colors duration-200">Projects</Link></li>
          <li><Link to="/#skills" className="hover:text-blue-600 transition-colors duration-200">Skills</Link></li>
          <li><Link to="/#blogs" className="hover:text-blue-600 transition-colors duration-200">Blogs</Link></li>
          <li><Link to="/#contact" className="hover:text-blue-600 transition-colors duration-200">Contact</Link></li>
          <li>
            <button className="ml-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 shadow-sm">
              Hire Me
            </button>
          </li>
        </ul>

        <div className='button sm:hidden cursor-pointer text-2xl' onClick={handleShowNav}>
          {showNav ? <ImCross /> : <GiHamburgerMenu />}
        </div>
      </div>

      <div className={`${showNav ? "flex" : "hidden"} flex-col items-start gap-3 bg-white w-full shadow-md absolute right-0 text-black px-6 py-4 transition-all duration-300`}>
        <li><Link to="/#home" className="hover:text-blue-600 transition-colors duration-200">Home</Link></li>
        <li><Link to="/#about" className="hover:text-blue-600 transition-colors duration-200">About</Link></li>
        <li><Link to="/#projects" className="hover:text-blue-600 transition-colors duration-200">Projects</Link></li>
        <li><Link to="/#skills" className="hover:text-blue-600 transition-colors duration-200">Skills</Link></li>
        <li><Link to="/#blogs" className="hover:text-blue-600 transition-colors duration-200">Blogs</Link></li>
        <li><Link to="/#contact" className="hover:text-blue-600 transition-colors duration-200">Contact</Link></li>
        <button className="mt-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 shadow-sm">
          Hire Me
        </button>
      </div>
    </nav>
  )
}

