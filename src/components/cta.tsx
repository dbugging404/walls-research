/* eslint-disable @next/next/no-img-element */
import React from 'react';
import screenshot from '@/assets/images/cta.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@material-tailwind/react';

const CTA = () => {
  return (
    <div>
      <div className='bg-firefly-50 dark:bg-firefly-950'>
        <div className='mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8'>
          <div className='relative isolate overflow-hidden bg-gradient-to-b dark:bg-gradient-to-b from-asparagus-500 to-asparagus-700 dark:from-firefly-600 dark:to-firefly-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
            <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl font-lexend'>
                Supercharge
                <br />
                Your Investments Now!
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-200 font-lexend'>
                Unlock the full potential of your financial journey. Join us for
                exclusive access to cutting-edge tools and insights, empowering
                you to make smarter investment decisions. Your path to financial
                mastery begins here.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start font-lexend'>
                <Link href='#'>
                  <Button
                    placeholder={''}
                    className='rounded-full font-lexend bg-gradient-to-b dark:bg-gradient-to-b dark:from-asparagus-500 dark:to-asparagus-700 from-firefly-600 to-firefly-900 dark:hover:from-asparagus-600 dark:hover:to-asparagus-800 hover:from-firefly-700 hover:to-firefly-800'
                  >
                    Get Started
                  </Button>
                </Link>
                <Link
                  href='#'
                  className='text-sm font-semibold leading-6 text-white'
                >
                  Learn more <span aria-hidden='true'>→</span>
                </Link>
              </div>
            </div>
            <div className='mt-16 h-80 lg:mt-8 mx-auto'>
              <Image
                className='max-w-sm md:max-w-md mx-auto rounded-md object-cover'
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
