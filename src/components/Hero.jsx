import React from 'react'
import {heroDesktop, maker, audiophile, databiz, meet, heroMobile} from '../assets'

const Hero = () => {
  return (
    <div className='flex sm:flex-row flex-col-reverse font-poppins'>
        <div className='sm:flex hidden flex-col sm:m-[200px] sm:mr-[140px]'>
            <h1 className='sm:text-[100px] text-[80px] font-bold sm:leading-[100px]	'>
                Make <br />
                remote work
            </h1>
            <p className='sm:w-[800px] text-xl mt-20'>
                Get your team in sync, no matter your location.<br />
                Streamline processes, create team rituals, and <br />
                watch productivity soar.
            </p>
            <button className='flex mt-20 text-white bg-black w-[150px] justify-center 
             p-4 rounded-xl font-medium'>
                Learn More
            </button>
            <div className='flex sm:items-between justify-between mt-20 flex-row '>
                <img src={maker} className=' object-contain'  />
                <img src={audiophile} className='object-contain' />
                <img src={databiz} className='object-contain'/>
                <img src={meet} className='object-contain'/>
            </div>
        </div>
        {/* Mobile */}
        <div className='sm:hidden items-center justify-between flex flex-col sm:m-[200px] sm:mr-[140px]'>
            <h1 className='sm:text-[100px]  text-[80px] font-bold leading-[80px] mt-20	'>
                Make <br />
                remote work
            </h1>
            <p className='sm:w-[800px] text-xl mt-20'>
                Get your team in sync, no matter your location.<br />
                Streamline processes, create team rituals, and <br />
                watch productivity soar.
            </p>
            <button className='flex mt-20 text-white bg-black w-[150px] justify-center 
             p-4 rounded-xl font-medium'>
                Learn More
            </button>
            <div className='flex justify-between mt-20 flex-row '>
                <img src={maker} className=' object-contain'  />
                <img src={audiophile} className='object-contain ml-20' />
                <img src={databiz} className='object-contain ml-20'/>
                <img src={meet} className='object-contain ml-20'/>
            </div>
        </div>
        <div className='sm:flex  hidden'>
            <img src={heroDesktop} className = 'w-[75%] mb-[115px]  object-contain'/>
        </div>
        <div className='sm:hidden flex '>
            <img src={heroMobile} className = '  object-contain'/>
        </div>
       
    </div>
  )
}

export default Hero