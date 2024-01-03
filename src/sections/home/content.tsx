import Image from 'next/image';
import React from 'react';
import screenshot from '@/assets/images/549m0ujd.bmp';
import { CgProfile } from 'react-icons/cg';
import { HiChevronRight } from 'react-icons/hi';

const Content = () => {
  return (
    <div className='bg-firefly-100 dark:bg-firefly-600 text-firefly-800 dark:text-firefly-100 py-6 md:py-8 lg:py-10'>
      <div className='max-w-7xl mx-auto px-3'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='w-full py-6'>
            <Image
              src={screenshot}
              alt='Banner Image'
              className='w-screen rounded-lg max-w-sm mx-auto lg:mx-0'
            />
          </div>
          <div className='max-w-xl flex py-6 lg:py-0 flex-col mx-auto lg:mx-0 justify-center'>
            <div className='text-center lg:text-justify'>
              <h3 className='text-5xl sm:text-6xl font-lexend pb-6'>
                Expert Analysis
              </h3>
              <div className='text-5xl sm:text-6xl font-lexend pb-6'>
                at your fingetips...
              </div>
              <div className='text-xl font-lexend pb-6 font-light'>
                ...with Walls Research&apos;s proprietary algorithm. We&apos;ve
                done the hard work for you.
              </div>
              <div className='space-y-2 mt-8'>
                {data.map((item) => (
                  <div
                    key={item.id}
                    className='flex items-center justify-between w-full p-4 border-2 border-firefly-200 dark:border-firefly-400 rounded-md hover:bg-firefly-400 hover:bg-opacity-40 hover:border-transparent transition-all duration-150'
                  >
                    <div className='flex space-x-3 items-center'>
                      <div>
                        <CgProfile className='w-10 h-10 text-asparagus-500' />
                      </div>
                      <div className='text-xl font-lexend'>{item.title}</div>
                    </div>
                    <div>
                      <HiChevronRight className='w-8 h-8' />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

const data = [
  {
    id: 1,
    title: 'Stress Free Trading',
    icon: 'CgProfile',
  },
  {
    id: 2,
    title: 'Stress Free Trading',
    icon: 'CgProfile',
  },
  {
    id: 3,
    title: 'Stress Free Trading',
    icon: 'CgProfile',
  },
];
