import React from 'react';
import Link from 'next/link';
import { IoLogoGooglePlaystore, IoLogoApple } from 'react-icons/io5';
import Image from 'next/image';

const IndexPage = () => {
  return (
    <div className='bg-firefly-50 dark:bg-firefly-500 min-h-screen px-3 lg:px-6'>
      <div className='max-w-7xl mx-auto pt-32 pb-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex items-start justify-center flex-col'>
            <h1 className='font-lexend text-5xl lg:text-6xl py-8 lg:py-10 leading-tight'>
              Download the{' '}
              <span className='text-asparagus-500 font-bold dark:text-asparagus-600'>
                Walls Research
              </span>{' '}
              for your Android & iOS devices
            </h1>
            <div className='flex flex-col lg:flex-row items-start justify-start lg:space-x-3 space-y-3 lg:space-y-0 font-lexend'>
              <Link
                href={'#'}
                className='flex items-center border border-firefly-500 dark:border-gray-600 rounded-lg px-4 py-2 w-56'
              >
                <IoLogoGooglePlaystore className='w-7 h-7 dark:text-firefly-50 text-firefly-500' />
                <div className='text-left ml-3'>
                  <p className='text-xs dark:text-firefly-50 '>Download on </p>
                  <p className='text-sm md:text-base text-firefly-500 dark:text-firefly-100'>
                    {' '}
                    Google Play Store{' '}
                  </p>
                </div>
              </Link>
              <Link
                href={'#'}
                className='flex items-center border border-firefly-500 dark:border-gray-600 rounded-lg px-4 py-2 w-56'
              >
                <IoLogoApple className='w-7 h-7 dark:text-firefly-50 text-firefly-500' />
                <div className='text-left ml-3'>
                  <p className='text-xs dark:text-firefly-50 '>Download on </p>
                  <p className='text-sm md:text-base text-firefly-500 dark:text-firefly-100'>
                    {' '}
                    Apple Store
                  </p>
                </div>
              </Link>
            </div>
            <div>
              <p className='text-sm dark:text-firefly-300 text-firefly-400 font-inter pt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                perferendis, blanditiis soluta porro ipsam quam aliquam!
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center py-6'>
            <Image
              src='https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3'
              width={500}
              height={500}
              alt='app download'
              className='rounded-md'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
