import React from "react";
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'
import resume from '../Resume/DB_Resume.pdf'

 const Socials = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4  bg-emerald-700 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300">
          <a className="flex w-full text-white" href="https://www.linkedin.com/in/danielle-banovetz-612a33237/" target="_blank" >
            <span className="flex justify-between items-center w-full text-white" > LinkedIn <FaLinkedin size={30} /></span>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4  bg-emerald-700 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300">
          <a className="flex w-full text-white" href="https://github.com/danibano" target="_blank" >
            <span className="flex justify-between items-center w-full text-white" > Gituhb <FaGithub size={30} /></span>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4  bg-emerald-700 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300">
          <a className="flex w-full text-white" href="mailto:banovetz.danielle@gmail.com" >
            <span className="flex justify-between items-center w-full text-white" > Mail <HiOutlineMail size={30} /></span>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4  bg-emerald-700 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300">
          <a className="flex w-full text-white" href={resume} target="_blank" >
            <span className="flex justify-between items-center w-full text-white" > Resume <BsFillPersonLinesFill size={30} /></span>
          </a>
        </li>
      </ul>
    </div>
  )
 }

 export default Socials