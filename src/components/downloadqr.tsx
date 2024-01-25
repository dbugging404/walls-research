import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@material-tailwind/react';
import GooglePlayIcon from '@/assets//logos/google-play-icon.svg';
import AppleAppStoreIcon from '@/assets/logos/apple-app-store.svg';
import qrCode from '@/assets/images/dwl_qr_code.svg';

const DownloadQR = () => {
  return (
    <div>
      <div className='flex flex-col max-w-lg items-center justify-center p-6 w-full dark:bg-firefly-900 bg-firefly-200 rounded-lg z-10'>
        <div className='pb-3 font-lexend font-sm'>
          (Scan the QR code to download the App)
        </div>
        <Image src={qrCode} alt='QR Code' />
        <div className='pt-3 font-lexend'>Available on</div>
        <div className='mt-3 flex flex-col items-center md:flex-row md:space-x-3 space-y-3 md:space-y-0'>
          <Button
            placeholder={''}
            ripple
            className='font-lexend rounded-md text-base font-bold text-firefly-100 hover:bg-gradient-to-b from-asparagus-500 to-asparagus-700 transition duration-300 ease-in-out hover:shadow-lg'
          >
            <Link href={'#'} className=''>
              <div className='flex items-center justify-center space-x-3'>
                <Image
                  src={GooglePlayIcon}
                  alt='Google Play Icon'
                  className='w-8 h-8'
                />
                <span>Download</span>
              </div>
            </Link>
          </Button>

          <Button
            placeholder={''}
            ripple
            className='font-lexend rounded-md text-base font-bold text-firefly-100 hover:bg-gradient-to-b from-asparagus-500 to-asparagus-700 transition duration-300 ease-in-out hover:shadow-lg'
          >
            <Link href={'#'} className=''>
              <div className='flex items-center justify-center space-x-3'>
                <Image
                  src={AppleAppStoreIcon}
                  alt='Google Play Icon'
                  className='w-8 h-8'
                />
                <span>Download</span>
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DownloadQR;
