/* eslint-disable @next/next/no-img-element */
import React from 'react';
import screenshot from '@/assets/images/Screenshot_2.bmp';
import Image from 'next/image';
import Link from 'next/link';

const CTA = () => {
  return (
    <div>
      <div className='bg-firefly-100 dark:bg-firefly-500'>
        <div className='mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8'>
          <div className='relative isolate overflow-hidden bg-asparagus-400 dark:bg-firefly-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
            <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl font-lexend'>
                Lorem ipsum sit amet.
                <br />
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-300 font-lexend'>
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start font-lexend'>
                <Link
                  href='#'
                  className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                >
                  Get started
                </Link>
                <Link
                  href='#'
                  className='text-sm font-semibold leading-6 text-white'
                >
                  Learn more <span aria-hidden='true'>→</span>
                </Link>
              </div>
            </div>
            <div className='relative mt-16 h-80 lg:mt-8'>
              <Image
                className='absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                src={screenshot}
                alt='App screenshot'
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
