import React, { useState, useEffect } from 'react';
import Logo from '@/components/logo';
import ThemeToggle from '@/styles/next-toggle';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Change the threshold value as needed
      setIsScrolled(scrollTop > 50);
    };
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='sticky top-0 z-50 w-full'>
      <div
        className={`absolute w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-asparagus-400 dark:bg-firefly-500 shadow-lg bg-opacity-95 dark:bg-opacity-95'
            : 'bg-asparagus-500 dark:bg-firefly-500 shadow-lg hover:shadow-asparagus-300 transition-all bg-opacity-95 dark:bg-opacity-95 duration-300 dark:hover:shadow-firefly-700'
        }`}
        style={{ transitionDelay: isScrolled ? '0s' : '0.3s' }}
      >
        <div className='max-w-7xl mx-auto flex items-center justify-between px-3'>
          <Link href='/'>
            <Logo />
          </Link>
          <div className='flex items-center justify-center space-x-3'>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='inline-flex mr-1 items-center justify-center p-2 text-firefly-100 rounded-lg hover:text-white hover:bg-firefly-400 focus:outline-none'
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
        </div>
      </div>
    </div>
  );
};

export default Header;
