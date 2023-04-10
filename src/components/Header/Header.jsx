import React from "react";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react';


const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)


  const stickyHeader = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header')
      } else {
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(()=> {
    stickyHeader()

    return window.removeEventListener('scroll', stickyHeader)
  }, [])

  const handleClick = e => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      top: location - 80,
      left: 0
    })
  }

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')


  return (
      <div ref={headerRef} className="flex items-center justify-between h-[80px] px-10" >
        <h1 className='text-xl '><a href="#home">Dani Bano</a></h1> 
        <nav ref={menuRef} onClick={toggleMenu} className='flex justify-between items-center h-[80px] menu'> 
        <ul className='flex items-center'>
            {/* <li>
            <BsFillMoonStarsFill className='cursor-pointer text-xl hover:text-gray-500'/>
            </li> */}
            <li>
            <a onClick={handleClick} href='#about' className='bg-emerald-700 hover:bg-emerald-500 ease-in duration-200 text-white px-4 py-2 rounded-md ml-8'>About Me</a>
            </li>
            <li>
            <a onClick={handleClick} href='#projects' className='bg-emerald-700 hover:bg-emerald-500 ease-in duration-200 text-white px-4 py-2 rounded-md ml-8'>Projects</a>
            </li>
            {/* <li>
            <a href='#resume' className='bg-emerald-700 hover:bg-gradient-to-r from-emerald-700 to-emerald-400 text-white px-4 py-2 rounded-md ml-8'>Resume</a>
            </li> */}
            <li>
            <a onClick={handleClick}  href='#connect' className='bg-emerald-700 hover:bg-emerald-500 ease-in duration-200 text-white px-4 py-2 rounded-md ml-8'>Connect</a>
            </li>
        </ul>
        </nav>

        <AiOutlineMenu onClick={toggleMenu} className=" text-2xl md:hidden cursor-pointer"/>
      </div>

  )
}

export default Header