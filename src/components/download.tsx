import React from 'react';
import Link from 'next/link';
import { IoLogoApple, IoLogoGooglePlaystore } from 'react-icons/io5';
import PlayStore from '@/assets/logos/google-play-icon.svg';
import AppStore from '@/assets/logos/apple-app-store.svg';
import Image from 'next/image';

const Download = () => {
  return (
    <div>
      <div className='flex md:flex-col justify-center space-x-1 md:space-x-0 md:space-y-2'>
        <Link
          href={'#'}
          className='flex items-center md:border border-gray-600 rounded-lg px-4 py-2 md:w-56'
        >
          <Image
            src={PlayStore}
            width={50}
            height={50}
            alt='Download from Play Store'
            className='w-10 h-10 md:w-9 md:h-9'
          />
          <div className='text-left ml-3 font-lexend hidden md:block'>
            <p className='text-xs text-firefly-50'>Get it on </p>
            <p className='text-sm md:text-base text-firefly-50 dark:text-firefly-100 '>
              {' '}
              Google Play Store{' '}
            </p>
          </div>
        </Link>
        <Link
          href={'#'}
          className='flex items-center md:border border-gray-600 rounded-lg px-4 py-2 md:w-56'
        >
          <Image
            src={AppStore}
            width={50}
            height={50}
            alt='Download from Play Store'
            className='w-10 h-10 md:w-9 md:h-9'
          />
          <div className='text-left ml-3 font-lexend hidden md:block'>
            <p className='text-xs text-firefly-50'>Download on </p>
            <p className='text-sm md:text-base text-firefly-50 dark:text-firefly-100'>
              {' '}
              Apple App Store{' '}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Download;
