import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Header = () => {
    let[isMenuOpen,setIsMenuOpen]=useState(false)
  return (
    <>
    <div className='flex justify-between items-center flex-wrap px-5 py-3'>
        <div className='sm:hidden'>
            <button className='font-2xl text-[#5C3018] font-bold ' onClick={()=>setIsMenuOpen(!isMenuOpen)}>&#9776;</button>
        </div>
        <img src="/Logo.png" className='w-12 sm:w-14' alt='logo'/>
        <div className={`md:text-3xl text-2xl  font-medium gap-4 text-[#5C3018] ${isMenuOpen? "flex flex-col sm:flex-row sm:block absolute sm:static top-18 left-0 bg-[#5C3018] p-5 text-white" : "hidden sm:flex" }`}>
            <Link to={'/'} className='hover:border-b-2 border:[#5C3018]'>home</Link>
            <Link to={'/menu'} className='hover:border-b-2 border:[#5C3018]'>menu</Link>
            <Link to={'/service'} className='hover:border-b-2 border:[#5C3018]'>service</Link>
            <Link to={'/contact'} className='hover:border-b-2 border:[#5C3018]'>contact</Link>
        </div>
        <div className='flex gap-4 items-center'>
        <i className="bi bi-cart3" style={{ fontSize: '24px', color: '#5C3018' }}></i>
        <Link to={'/login'} className='bg-[#5C3018] px-4 py-1.5 rounded-lg text-xl md:text-2xl text-white '>login</Link>
        </div>
    </div>
    </>
  )
}

export default Header