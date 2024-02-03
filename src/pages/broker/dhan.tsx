import React from 'react'
import DhanImage from '@/assets/logos/dhan.jpg'
import Image from 'next/image'
import { NextPage } from 'next'
import { FaArrowRight } from "react-icons/fa6";
import WallsResearchLogo from '@/assets/logos/walls-research.svg'

const Dhan = () => {
  return (
    <div className='min-h-screen flex items-center justify-center flex-col'>
      <div className='grid grid-cols-3 max-w-md mx-auto'>
        <div className='flex items-center justify-center rounded-lg overflow-hidden'>
          <Image src={DhanImage} alt='Dhan' className='w-20 h-20' />
        </div>
        <div className='flex items-center justify-center'> <FaArrowRight className='text-4xl' /></div>
        <div className='flex items-center justify-center dark:bg-asparagus-500 bg-firefly-900 dark rounded-lg overflow-hidden'> 
        <Image src={WallsResearchLogo} alt='Dhan' className='w-20 h-20' />
        </div>
      </div>
        <div className='font-lexend text-base py-6'>Redirecting...</div>
    </div>
  )
}

export default Dhan
