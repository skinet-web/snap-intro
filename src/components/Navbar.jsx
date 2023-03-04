import React, { useState } from 'react'
import { logo, menu, close } from '../assets'



const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className='flex justify-between items-center font-poppins'>
        <div className='justify-evenly items-center sm:flex hidden'>
            <div className='flex justify-evenly'>
                <img src={logo} alt='logo' className='w-[100%] h-[100%] m-5'/>
            </div>
            <ul className='flex flex-row gap-8 ml-10 mt-'>
                    <li>Features</li> 
                    <li>Company</li> 
                    <li>Careers</li> 
                    <li>About</li> 
                </ul>       
        </div>
        <div className='flex-row sm:flex hidden gap-8 mr-10 font-poppins items-center'>
                <p className=''>Login</p>
                <button className='border-2 rounded-xl border-black p-2'>Register</button>
        </div>


        {/* Mobile device */}
        <div className='sm:hidden flex flex-1 justify-end items-center font-poppins'>
          <img 
            src={toggle ? close : menu} 
            alt='menu'
            className='w-[28px] h-[28px]  object-contain'
            onClick={() => setToggle((prev) => !prev)}      
          />               
           <div 
            className={`
            ${toggle ? 'flex' : 'hidden'}
            p-6 bg-black absolute top-5 right-0
            mx-4 my-2 min-w-[140px] rounded-xl sidebar
            flex-col`}
            > 
                <ul className='flex flex-col gap-5 text-white'>
                        <li>Features</li> 
                        <li>Company</li> 
                        <li>Careers</li> 
                        <li>About</li> 
                </ul> 
                <ul className='flex flex-col text-white gap-5 mt-10'>
                    <li>Login</li>
                    <button>Register</button>
                 </ul>
            </div>

        </div>   

    </nav>
  )
}

export default Navbar