import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import {AiOutlineClose} from 'react-icons/ai';

import bgnav  from '../assets/img/bg-nav.png';

const isNotActiveClass = 'flex items-center gap-3 text-gray-500 hover:text-default transition-all duration-200 ease-in-out'
const isActiveClass = 'flex items-center gap-3 font-extrabold transition-all duration-200 ease-in-out'


const Sidebar = ({closeToggle}) => {
  const handleCloseSidebar = () => {
    if(closeToggle) closeToggle(false);
  };
  return (
    <div className='flex flex-col justify-between p-5 w-full h-full overflow-y-scroll min-w-210 hide-scrollbar'>
      <div className='flex flex-col'>
        <div className='flex justify-end mt-3'>
          <AiOutlineClose className='cursor-pointer' onClick={handleCloseSidebar}/>
        </div>
        <div className='flex text-sm flex-col gap-5 mt-[7rem] uppercase'>
          <NavLink 
            to='/'
            className={({ isActive}) => isActive ? isActiveClass : isNotActiveClass}
            onClick={handleCloseSidebar}
          >
            Home
          </NavLink>
          <NavLink 
            to='/about'
            className={({ isActive}) => isActive ? isActiveClass : isNotActiveClass}
            onClick={handleCloseSidebar}
          >
            About
          </NavLink>
          <NavLink 
            to='/services'
            className={({ isActive}) => isActive ? isActiveClass : isNotActiveClass}
            onClick={handleCloseSidebar}
          >
            Services
          </NavLink>
          <NavLink 
            to='/industries'
            className={({ isActive}) => isActive ? isActiveClass : isNotActiveClass}
            onClick={handleCloseSidebar}
          >
            Industries
          </NavLink>
          <NavLink 
            to='/contact'
            className={({ isActive}) => isActive ? isActiveClass : isNotActiveClass}
            onClick={handleCloseSidebar}
          >
            Contact
          </NavLink>
        </div>
        <div className='flex justify-end my-5'>
          <img className='' alt='sidebar-pic' src={bgnav}/>
        </div>
        <div className='flex flex-col gap-4 w-full'>
          <div className='flex flex-row gap-3 items-center'>
            Get in Touch
          </div>
          <div className='flex flex-row gap-3 items-center'>
            <BsTelephoneFill className='text-orange-500' />
            <a href='tel:01615117873' className='text-[.7rem]'>0161 511 7873</a>
          </div>
          <div className='flex flex-row gap-3 items-center'>
            <BsEnvelopeFill className='text-orange-500' />
            <a href="mailto:info@sarathealthcare.ltd" className='text-[.7rem]'>info@sarathealthcare.ltd</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
