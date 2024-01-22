import React, { useState, useEffect } from 'react';
import Logo, { LogoMobile } from '@/components/logo';
import ThemeToggle from '@/styles/next-toggle';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import Link from 'next/link';
import Button from '@/components/button';
import { Transition } from '@headlessui/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='sticky top-0 z-50 w-full'>
      <div className='bg-firefly-950 border-b dark:border-firefly-800 border-firefly-200 bg-opacity-95 dark:bg-opacity-95'>
        <nav className='max-w-7xl mx-auto flex items-center justify-between px-3'>
          <div>
            <Link href='/' className='hidden md:block'>
              <Logo />
            </Link>
            <Link href='/' className='md:hidden'>
              <LogoMobile />
            </Link>
          </div>
          <div className='font-lexend font-light space-x-6 text-white text-sm md:text-base hidden lg:block'>
            <Link href={'/'}>Home</Link>
            <Link href={'/wr-score'}>WR Score</Link>
            {/* <Link href={'/blogs/page/1'}>Pricing</Link> */}
            {/* <Link href={'/blogs/page/1'}>Love for WR</Link> */}
            <Link href={'/blogs/page/1'}>Blog</Link>
            <Link href={'/career'}>Career</Link>
            <Link href={'/blogs/page/1'}>Contact</Link>
          </div>
          <div className='flex items-center justify-center space-x-3'>
            <Link href={'/download'}>
              <Button additionalClasses='' size='sm'>
                Download
              </Button>
            </Link>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='inline-flex mr-1 lg:hidden items-center justify-center p-2 text-firefly-100 rounded-lg hover:text-white hover:bg-firefly-900 focus:outline-none'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <div className='sr-only'>Open main menu</div>
              {!isOpen ? (
                <HiOutlineMenuAlt3 className='block w-6 h-6' />
              ) : (
                <HiX className='block w-6 h-6' />
              )}
            </button>
          </div>
        </nav>
        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <div className='xl:hidden' id='mobile-menu'>
            <div className='py-3'>
              <div className='text-sm rounded-md font-semibold text-gray-800 dark:text-gray-200 hover:bg-gg-500 dark:hover:bg-gg-400 hover:text-white dark:hover:text-gray-800 font-content'>
                <div className='font-lexend font-light flex flex-col space-y-1.5 px-3 text-white text-sm md:text-base'>
                  <Link
                    href={'/'}
                    className='hover:bg-gradient-to-b from-asparagus-500 to-asparagus-700 px-3 py-1.5 rounded-3xl'
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href={'/wr-score'}
                    className='hover:bg-gradient-to-b from-asparagus-500 to-asparagus-700 px-3 py-1.5 rounded-3xl'
                    onClick={() => setIsOpen(false)}
                  >
                    WR Score
                  </Link>
                  <Link
                    href={'/blogs/page/1'}
                    className='hover:bg-gradient-to-b from-asparagus-500 to-asparagus-700 px-3 py-1.5 rounded-3xl'
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href={'/blogs/page/1'}
                    className='hover:bg-gradient-to-b from-asparagus-500 to-asparagus-700 px-3 py-1.5 rounded-3xl'
                    onClick={() => setIsOpen(false)}
                  >
                    Love for WR
                  </Link>
                  <Link
                    href={'/blogs/page/1'}
                    className='hover:bg-gradient-to-b from-asparagus-500 to-asparagus-700 px-3 py-1.5 rounded-3xl'
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href={'/blogs/page/1'}
                    className='hover:bg-gradient-to-b from-asparagus-500 to-asparagus-700 px-3 py-1.5 rounded-3xl'
                    onClick={() => setIsOpen(false)}
                  >
                    Career
                  </Link>
                  <Link
                    href={'/blogs/page/1'}
                    className='hover:bg-gradient-to-b from-asparagus-500 to-asparagus-700 px-3 py-1.5 rounded-3xl'
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default Header;
