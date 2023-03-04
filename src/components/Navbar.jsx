import React from 'react'
import { logo, menu } from '../assets'



const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex justify-evenly items-center'>
            <div className='flex justify-evenly items-center'>
                <img src={logo} alt='logo' className='w-[100%] h-[100%]'/>
            </div>
            <ul className='flex flex-row gap-5'>
                    <li>Features</li> 
                    <li>Company</li> 
                    <li>Careers</li> 
                    <li>About</li> 
                </ul>       
        </div>
        <div className='flex flex-row  gap-5'>
                <h4>Login</h4>
                <h4>Register</h4>
        </div>
    </div>
  )
}

export default Navbar