import React, { useState } from 'react'
import { logo, menu, close, arrowUp, arrowDown, toDoList, calendar, reminders, planning  } from '../assets'


const DropDown = ({className, navbar}) => {
    
    const [menuStates, setMenuStates] = useState({
        features: false,
        company: false
    });

    const toggleMenu = (menu) => {
        setMenuStates(prevState => ({
            ...prevState,
            [menu]: !prevState[menu]
        }));
    };

    return (
        <ul className={`${className} `} >
            <li className='relative'>
                                    <div 
                                    className='flex items-center'
                                    onClick={() => toggleMenu('features')}> 
                                        Features
                                        <img 
                                        src={menuStates.features ? arrowDown : arrowUp} 
                                        className='w-2 h-2 ml-1 white--arrow'
                                        
                                        />
                                    </div>                                   
                                    {menuStates.features && ( 
                                    <div className={`${navbar} sidebar--micro`}>
                                        <div className='flex flex-row items-center  '>                                    
                                            <img className='w-4 h-4 mr-2' 
                                            alt="to do icon" src={toDoList} /> 
                                            <p>Todo List</p>
                                        </div>
                                        <div className='flex flex-row items-center mt-1 '>                                    
                                            <img className='w-4 h-4 mr-2' 
                                            alt="calendar icon" src={calendar} /> 
                                            <p>Calendar</p>
                                        </div>
                                        <div className='flex flex-row items-center mt-1 '>                                    
                                            <img className='w-4 h-4 mr-2' 
                                            alt="reminders icon" src={reminders} /> 
                                            <p>Reminders</p>
                                        </div>
                                        <div className='flex flex-row items-center mt-1 '>                                    
                                            <img className='w-4 h-4 mr-2' 
                                            alt="planning icon" src={planning} /> 
                                            <p>Planning</p>
                                        </div>
                                    </div>
                                    
                                    
                                    
                                    )}
            </li> 
            <li className='relative' >
                                        <div 
                                        className='flex items-center'
                                        onClick={() => toggleMenu('company')}> 
                                            Company
                                            <img 
                                            src={menuStates.company ? arrowDown : arrowUp} 
                                            className='w-2 h-2 ml-1 white--arrow'
                                            
                                            />
                                        </div>                                   
                                        {menuStates.company && ( 
                                        <div className={`${navbar} sidebar--micro`}>
                                            <div className='flex flex-row items-center mt-1 '>                                    
                                                <p>History</p>
                                            </div>
                                            <div className='flex flex-row items-center mt-1 '>                                    
                                                <p>Our Team</p>
                                            </div>
                                            <div className='flex flex-row items-center  mt-1'>                                    
                                                <p>Blog</p>
                                            </div>
                                            
                                        </div>
                                        
                                        
                                        
                                        )}
            </li> 
            <li className='' >Careers</li> 
            <li className='' >About</li> 
        </ul> 
    )

}

const Navbar = () => {
    const [toggle, setToggle] = useState(false)    

  return (
    <nav className='flex justify-between items-center font-poppins'>
        <div className='justify-evenly items-center sm:flex hidden'>
            <div className='flex justify-evenly'>
                <img src={logo} alt='logo' className='w-[100%] h-[100%] mt-6 m-5'/>
            </div>
            <DropDown 
            className='flex flex-row gap-10 ml-8' 
            navbar = 'absolute top-full left-0 mt-2 w-[500px] items-center' 
            />
          
        </div>
        <div className='flex-row sm:flex hidden gap-8 mr-10 font-poppins items-center'>
                <button className=''>Login</button>
                <button className='border-2 rounded-xl border-black p-2'>Register</button>
        </div>


        {/* Mobile device */}
            <div className='sm:hidden flex justify-evenly'>
                <img src={logo} alt='logo' className='w-[100%] h-[100%] mt-6 m-5'/>
            </div>
            <div className='sm:hidden flex flex-1 p-5 justify-end items-center font-poppins'>
                <img 
                    src={toggle ? close : menu} 
                    alt='menu'
                    className='w-[30px] h-[20%]  object-contain'
                    onClick={() => setToggle((prev) => !prev)}      
                />               
                <div 
                    className={`
                    ${toggle ? 'flex' : 'hidden'}
                    p-6 bg-black absolute top-10 right-0
                    mx-4 my-2 min-w-[140px] rounded-xl sidebar
                    flex-col`}
                    > 
                        
                    <DropDown 
                    className='flex flex-col gap-5 text-white'
                    navbar = 'flex flex-col  ml-7'
                    />
                                
                                
                    <ul className='flex flex-col items-start text-white gap-5 mt-10'>
                        <li>Login</li>
                        <button>Register</button>
                    </ul>
                </div>

            </div>   

    </nav>
  )
}

export default Navbar