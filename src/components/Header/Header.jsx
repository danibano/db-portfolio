import React from "react";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'


const Header = () => {
  return (
    <div>
      <nav className='py-10 flex justify-between'>
      <h1 className='text-xl'><a href="#home">Dani Bano</a></h1>  
      <ul className='flex items-center'>
          <li>
          <BsFillMoonStarsFill className='cursor-pointer text-xl hover:text-gray-500'/>
          </li>
          <li>
          <a href='#about' className='bg-emerald-700 hover:bg-emerald-500 ease-in duration-200 text-white px-4 py-2 rounded-md ml-8'>About Me</a>
          </li>
          <li>
          <a href='#projects' className='bg-emerald-700 hover:bg-emerald-500 ease-in duration-200 text-white px-4 py-2 rounded-md ml-8'>Projects</a>
          </li>
          {/* <li>
          <a href='#resume' className='bg-emerald-700 hover:bg-gradient-to-r from-emerald-700 to-emerald-400 text-white px-4 py-2 rounded-md ml-8'>Resume</a>
          </li> */}
          <li>
          <a href='#connect' className='bg-emerald-700 hover:bg-emerald-500 ease-in duration-200 text-white px-4 py-2 rounded-md ml-8'>Connect</a>
          </li>
      </ul>
      </nav>

      {/* <AiOutlineMenu className=" text-2xl md:hidden cursor-pointer"/> */}
    </div>
  )
}

export default Header