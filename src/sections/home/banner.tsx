import React from 'react';
import Image from 'next/image';
import BannerImage from '@/assets/images/banner.svg';
import Button from '@/components/button';

const Banner = () => {
  return (
    <div className='relative bg-gray-300 dark:bg-firefly-900 flex items-center justify-center'>
      <div
        className={`absolute bg-[url(https://res.cloudinary.com/djcvh6ko8/image/upload/v1703574423/Home/bg-pattern_vj4a8y.png)] object-cover opacity-40 dark:opacity-5 w-full h-full`}
      ></div>
      <div className='max-w-7xl h-full mx-auto pt-32 z-10'>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
          <div className='px-3 flex items-start justify-center flex-col max-w-4xl mx-auto'>
            <div className='text-5xl lg:text-6xl font-bold font-lexend text-firefly-700 dark:text-firefly-100 pt-16 pb-8'>
              <h1 className=''>
                Stay ahead of the Pack when it comes to investment
              </h1>
            </div>
            <div className='text-base lg:text-lg text-firefly-800 dark:text-firefly-100'>
              <div className='font-lexend font-light space-y-2'>
                <div>
                  Walls Research team provides you with our extensive research
                  knowledge in equities, ensuring that we become your trusted
                  partner in the pursuit of wealth creation.
                </div>
                <div>
                  We completely change the way individuals invest in stocks by
                  offering an Algorithm analysis score that unlocks unexplored
                  liquidity opportunities and turn the information into
                  intelligent trading decisions.
                </div>
              </div>
            </div>
            <div className='w-full flex items-center justify-center lg:justify-start  space-x-3 mt-10 text-gray-200 font-lexend pb-8'>
              <Button size='md'>Watch Video</Button>
              <Button size='md'>Learn More</Button>
            </div>
          </div>
          <div className='hidden lg:block mx-auto'>
            <Image
              src={BannerImage}
              alt='Banner Image'
              className='rounded-lg max-w-3xl'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
