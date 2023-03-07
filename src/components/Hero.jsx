import React from 'react'
import {heroDesktop, maker, audiophile, databiz, meet, heroMobile} from '../assets'

const Hero = () => {
  return (
    <div className='flex sm:flex-row flex-col-reverse font-poppins'>
        <div className='flex flex-row  items-center'>
            <div className='sm:flex hidden flex-col w-[60em]'>
                <h1 className='text-9xl font-bold leading-2 m-20 	'>
                    Make <br />
                    remote work
                </h1>
                <p className=' text-2xl ml-20'>
                    Get your team in sync, no matter your location.<br />
                    Streamline processes, create team rituals, and <br />
                    watch productivity soar.
                </p>
                <button className='flex mt-20 ml-20 text-white bg-black w-[150px] justify-center 
                p-4 rounded-xl font-medium'>
                    Learn More
                </button>
                <div className='flex gap-10 justify-evenly mt-20 ml-20 '>
                    <img src={maker} className=' object-contain'  />
                    <img src={audiophile} className='object-contain' />
                    <img src={databiz} className='object-contain'/>
                    <img src={meet} className='object-contain'/>
                </div>
            </div>
            <div className='sm:flex hidden '>
                <img src={heroDesktop} className = 'sm:w-[40em] sm:h-[30em] md:w-[50em] md:h-[50em] ml-20 object-contain'/>
            </div>
        </div>
        
        {/* Mobile */}
        <div className='sm:hidden flex items-center justify-between flex-col sm:m-[200px] sm:mr-[140px]'>
            <h1 className='sm:text-[100px] text-justify text-7xl font-bold leading-[80px] mt-20	'>
                Make <br />
                remote <br className='xs:hidden'/>
                work
            </h1>
            <p className='sm:w-[800px] text-center text-xl mt-20 m-10'>
                Get your team in sync, no matter your location.
                Streamline processes, create team rituals, and 
                watch productivity soar.
            </p>
            <button className='flex mt-20 text-white bg-black w-[150px] justify-center 
             p-4 rounded-xl font-medium'>
                Learn More
            </button>
            <div className='flex jutify-between items-center gap-10 
            flex-wrap flex-col mt-20 mb-20  '>
                <div className='flex-row gap-10 flex'>
                    <img src={maker} className=' object-contain  w-32'  />
                    <img src={audiophile} className='object-contain  w-32 ' />
                </div>
                <div className='flex-row  gap-10 flex'>
                    <img src={databiz} className='object-contain  w-32 '/>
                    <img src={meet} className='object-contain  w-32 '/>    
                </div>
               
            </div>
        </div>
       
        <div className='sm:hidden flex '>
            <img src={heroMobile} className = '  object-contain'/>
        </div>
       
    </div>
  )
}

export default Hero