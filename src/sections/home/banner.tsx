import React from 'react';
import Image from 'next/image';
import BannerImage from '@/assets/images/banner.png';
import { Button } from '@material-tailwind/react';

const Banner = () => {
  return (
    <div className='relative lg:min-h-screen bg-gray-300 dark:bg-firefly-600 rounded-bg-[8rem] lg:rounded-br-[13rem] flex items-center justify-center'>
      <div
        className={`absolute bg-[url(https://res.cloudinary.com/djcvh6ko8/image/upload/v1703574423/Home/bg-pattern_vj4a8y.png)] object-cover opacity-40 dark:opacity-5 w-full h-full rounded-bg-[8rem] lg:rounded-br-[13rem] overflow-hidden`}
      ></div>
      <div className='max-w-7xl h-full mx-auto py-32 z-10'>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
          <div className='px-3 flex items-start justify-center flex-col max-w-4xl mx-auto'>
            <div className='text-5xl lg:text-6xl font-bold font-lexend text-firefly-700 dark:text-firefly-100 pt-16 pb-8'>
              <h1 className=''>
                Stay ahead of the Pack when it comes to investment
              </h1>
            </div>
            <div className='text-lg lg:text-xl text-firefly-800 dark:text-firefly-100'>
              <p className='font-lexend font-light'>
                With Walls Research you can get the latest investment news and
                analysis from the best in the business. With our team of
                experts, we can help you make the right decisions when it comes
                to your investments.
              </p>
            </div>
            <div className='w-full flex items-center justify-center lg:justify-start  space-x-3 mt-10 text-gray-200 font-lexend'>
              <Button
                className='font-lexend font-medium rounded-full bg-asparagus-500 hover:bg-asparagus-400 border-transparent transition-all duration-150'
                placeholder={'Watch Video'}
                variant='filled'
                size='lg'
                ripple
              >
                Watch Video
              </Button>
              <Button
                className='font-medium font-lexend rounded-full bg-asparagus-500 hover:bg-asparagus-400 border-transparent transition-all duration-150'
                placeholder={'Learn More'}
                variant='filled'
                size='lg'
                ripple
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className='hidden lg:block mx-auto'>
            <Image
              src={BannerImage}
              alt='Banner Image'
              className='w-screen rounded-lg max-w-4xl'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
