import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className='flex items-center justify-between px-5 py-5 flex-wrap'>
        <div className='flex items-center gap-2'>
            <img src='/Logo.png' className='w-12 lg:w-14' alt="Logo"/>
            <div className=' text-2xl lg:text-3xl  text-[#5C3018] font-medium lg:font-bold'>fooddeli</div>
        </div>
        <div className='x'>
            <div className='flex items-center gap-4 justify-center mb-2  '>
            <i class="bi bi-facebook border-2 border-[#5C3018] rounded-full w-9 h-9 flex items-center justify-center text-[#5C3018] text-xl"></i>
            <i class="bi bi-instagram border-2 border-[#5C3018] rounded-full w-9 h-9 flex items-center justify-center text-[#5C3018] text-xl"></i>
            <i class="bi bi-twitter border-2 border-[#5C3018] rounded-full w-9 h-9 flex items-center justify-center text-[#5C3018] text-xl"></i>
            </div>
            <h3>@copyright 2025</h3>
        </div>
        <div>
            <Link to={'/contact'} className='bg-[#5C3018] px-4 py-2 rounded-lg text-xl md:text-2xl text-white '>Contact us</Link>
        </div>
    </div>
    </>
  )
}

export default Footer