import Image from 'next/image';
import React from 'react';
import screenshot from '@/assets/images/content.svg';
import { HiChevronRight } from 'react-icons/hi';
import FeaturesIcon from '@/assets/icons/features.svg';
import PricingIcon from '@/assets/icons/Pricing.svg';
import TeamIcon from '@/assets/icons/team.svg';

const Content = () => {
  return (
    <div className='bg-firefly-100 dark:bg-firefly-900 text-firefly-800 dark:text-firefly-100'>
      <div className='mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div className='w-full flex items-center justify-center bg-firefly-900'>
            <Image
              src={screenshot}
              alt='Banner Image'
              className='w-screen rounded-lg max-w-lg mx-auto lg:mx-0 p-6 md:p-0'
            />
          </div>
          <div className='max-w-xl flex flex-col mx-auto lg:mx-0 justify-center py-6 md:py-8 lg:py-10 px-6'>
            <div className='text-center lg:text-justify text-firefly-800 dark:text-firefly-100'>
              <h3 className='text-5xl sm:text-3xl font-lexend pb-6'>
                Insights that guide your investing decisions...
              </h3>
              <div className='text-lg font-lexend pb-6 font-light'>
                ...with Walls Research&apos;s proprietary algorithm. We do the
                hard work for you.
              </div>
              <div className='space-y-2 mt-8'>
                {data.map((item) => (
                  <div
                    key={item.id}
                    className='flex items-center justify-between w-full mx-auto md:mx-0 max-w-sm p-2 border-2 border-firefly-300 dark:border-firefly-600 rounded-md dark:hover:bg-firefly-600 hover:bg-firefly-400  hover:bg-opacity-40 hover:border-transparent transition-all duration-150'
                  >
                    <div className='flex space-x-3 items-center'>
                      <div>
                        <Image
                          src={item.icon}
                          alt='Features Icon'
                          width={30}
                          height={30}
                          className='w-14 h-14'
                        />
                      </div>
                      <div className='text-base font-lexend'>{item.title}</div>
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
    title: 'WR Score',
    icon: FeaturesIcon,
  },
  {
    id: 2,
    title: 'Our Team',
    icon: TeamIcon,
  },
  {
    id: 3,
    title: 'Pricing',
    icon: PricingIcon,
  },
];
