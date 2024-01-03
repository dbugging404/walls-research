import React from 'react';
import Logo from '@/components/logo';
import Link from 'next/link';
import {
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
  BsFacebook,
  BsFillEnvelopeAtFill,
} from 'react-icons/bs';
import { RiTwitterXFill } from 'react-icons/ri';
import { IoLogoGooglePlaystore, IoLogoApple } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className='border-t border-firefly-400'>
      <footer className='bg-asparagus-500 dark:bg-firefly-500'>
        <div className='mx-auto w-full font-lexend max-w-screen-xl p-4 py-6 lg:py-8'>
          <div className='md:flex md:justify-evenly md:items-start'>
            <div className='grid grid-cols-3 gap-8 md:gap-6 md:grid-cols-4'>
              <div className='mb-6 md:mb-0'>
                <Link href='/' className='flex items-center'>
                  <Logo />
                </Link>
              </div>
              <div className='flex flex-col '>
                <h2 className='mb-6 text-sm font-semibold text-firefly-50 uppercase dark:text-firefly-200'>
                  Resources
                </h2>
                <ul className='text-firefly-50 dark:text-firefly-200 font-medium'>
                  <li className='mb-4'>
                    <a
                      href='/about'
                      className='hover:underline dark:hover:text-firefly-100 hover:text-firefly-100'
                    >
                      About Us
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a
                      href='https://tailwindcss.com/'
                      className='hover:underline dark:hover:text-firefly-100 hover:text-firefly-100'
                    >
                      WR Score
                    </a>
                  </li>
                </ul>
              </div>

              <div className='flex flex-col '>
                <h2 className='mb-6 text-sm font-semibold text-firefly-50 uppercase dark:text-firefly-200'>
                  Legal
                </h2>
                <ul className='text-firefly-50 dark:text-firefly-200  font-medium'>
                  <li className='mb-4'>
                    <a
                      href='#'
                      className='hover:underline dark:hover:text-firefly-100 hover:text-firefly-100'
                    >
                      Disclaimer
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a
                      href='#'
                      className='hover:underline dark:hover:text-firefly-100 hover:text-firefly-100'
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className='pb-6'>
                <h2 className='mb-6 text-sm font-semibold text-firefly-50 uppercase dark:text-firefly-200'>
                  Download
                </h2>
                <div className='flex flex-col justify-center space-y-2'>
                  <Link
                    href={'#'}
                    className='flex items-center border dark:border-gray-600 rounded-lg px-4 py-2 w-56'
                  >
                    <IoLogoGooglePlaystore className='w-7 h-7 text-firefly-50' />
                    <div className='text-left ml-3'>
                      <p className='text-xs text-firefly-50'>Download on </p>
                      <p className='text-sm md:text-base text-firefly-50 dark:text-firefly-100'>
                        {' '}
                        Google Play Store{' '}
                      </p>
                    </div>
                  </Link>
                  <Link
                    href={'#'}
                    className='flex items-center border dark:border-gray-600 rounded-lg px-4 py-2 w-56'
                  >
                    <IoLogoApple className='w-7 h-7 text-firefly-50' />
                    <div className='text-left ml-3'>
                      <p className='text-xs text-firefly-50'>Download on </p>
                      <p className='text-sm md:text-base text-firefly-50 dark:text-firefly-100'>
                        {' '}
                        Apple Store{' '}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-600 lg:my-8' />
          <div className='sm:flex sm:items-center sm:justify-between'>
            <span className='text-sm text-firefly-50 sm:text-center dark:text-firefly-300'>
              © 2023{' '}
              <a href='https://flowbite.com/' className='hover:underline'>
                Walls Research™
              </a>
              . All Rights Reserved.
            </span>
            <div className='flex sm:mt-0'>
              <div className='mt-2 space-x-2 sm:space-x-3 flex items-ceter justify-center'>
                {SocialIcon.map((item) => (
                  <Link
                    key={item.name}
                    href={item.url}
                    target='_blank'
                    rel='noreferrer'
                    className=''
                  >
                    <span className='sr-only'>{item.name}</span>
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

const SocialIcon = [
  {
    name: 'Youtube',
    url: '#',
    icon: <BsYoutube className='text-xl text-white dark:text-red-500' />,
  },
  {
    name: 'Facebook',
    url: '#',
    icon: <BsFacebook className='text-xl text-white dark:text-blue-500' />,
  },
  {
    name: 'Instagram',
    url: '#',
    icon: <BsInstagram className='text-xl text-white dark:text-pink-500' />,
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: <BsLinkedin className='text-xl text-white dark:text-blue-500' />,
  },
  {
    name: 'WhatsApp',
    url: '#',
    icon: <BsWhatsapp className='text-xl text-white dark:text-green-500' />,
  },
  {
    name: 'X',
    url: '#',
    icon: <RiTwitterXFill className='text-xl text-white dark:text-white' />,
  },
  {
    name: 'Mail',
    url: 'mailto:#',
    icon: (
      <BsFillEnvelopeAtFill className='text-xl text-white dark:text-gray-200' />
    ),
  },
];
