import Image from 'next/image';
import React from 'react';
import screenshot from '@/assets/images/content.svg';
import { HiChevronRight } from 'react-icons/hi';
import Link from 'next/link';
import { MdNewspaper, MdCreditScore, MdContactSupport } from 'react-icons/md';

const Content = () => {
  return (
    <div className='bg-firefly-100 dark:bg-firefly-950  text-firefly-800 dark:text-firefly-100'>
      <div className='mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='w-full flex items-center justify-center bg-gradient-to-b from-asparagus-600 to-asparagus-800 bg-asparagus-600 dark:from-firefly-950 dark:to-gray-900'>
            <Image
              src={screenshot}
              alt='Banner Image'
              className='w-screen rounded-lg max-w-lg mx-auto lg:mx-0 p-6 md:p-0'
            />
          </div>
          <div className='flex flex-col mx-auto lg:mx-0 justify-center py-6 md:py-8 lg:py-10 px-6 border-b dark:border-firefly-900 inset-0'>
            <div className='max-w-xl text-center lg:text-justify text-firefly-800 dark:text-firefly-100'>
              <h3 className='text-5xl sm:text-3xl font-lexend pb-6'>
                Expert Analysis at your Fingertips...
              </h3>
              <div className='text-lg font-lexend pb-6 font-light'>
                Walls Research team provides you with our extensive research
                knowledge in equities, ensuring that we become your trusted
                partner in the pursuit of wealth creation.
              </div>
              <div className='space-y-2 mt-8'>
                {data.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className='flex items-center justify-between w-full mx-auto md:mx-0 max-w-sm p-2 border border-asparagus-500 dark:border-firefly-600 rounded-md dark:hover:bg-firefly-900 hover:bg-firefly-300 hover:bg-opacity-40 hover:border-transparent transition-all duration-150 ease-in-out'
                  >
                    <div className='flex space-x-3 items-center'>
                      <div className='py-1.5 text-asparagus-500'>
                        {item.icon}
                      </div>
                      <div className='text-base font-lexend'>{item.title}</div>
                    </div>
                    <div>
                      <HiChevronRight className='w-8 h-8 text-asparagus-500' />
                    </div>
                  </Link>
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
    title: 'WR Score',
    icon: <MdCreditScore className='text-3xl' />,
    link: '/wr-score',
  },
  {
    id: 2,
    title: 'Blogs',
    icon: <MdNewspaper className='text-3xl' />,
    link: '/blogs/page/1',
  },
  {
    id: 3,
    title: 'Contact Us',
    icon: <MdContactSupport className='text-3xl' />,
    link: '/contact',
  },
];
