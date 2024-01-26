import React from 'react';
import Image from 'next/image';
import FeaturesImage from '@/assets/images/features.svg';
import { CgProfile } from 'react-icons/cg';
import Button from '@/components/button';
import FeaturesIcon from '@/assets/icons/features.svg';
import Link from 'next/link';
import {
  MdAssessment,
  MdCompare,
  MdOutlineChecklist,
  MdNewspaper,
} from 'react-icons/md';
import { FaDivide } from 'react-icons/fa6';
import { SlGraph } from 'react-icons/sl';

const Features = () => {
  return (
    <div className='py-6 md:py-8 lg:py-16 px-3 z-20'>
      <div className='max-w-7xl mx-auto flex items-start justify-center'>
        <div className='grid lg:grid-cols-2 gap-5'>
          <div className='flex flex-col items-center lg:items-start justify-center'>
            <h2 className='font-lexend text-3xl lg:text-4xl text-firefly-800 dark:text-firefly-100'>
              Smart Investing, Simplified!
            </h2>
            <div className='text-firefly-800 dark:text-firefly-100 mt-6 font-lexend text-center lg:text-left'>
              Unleash the power of data for strategic investing. Our tools offer
              a seamless experience—track dividends, compare companies, and stay
              ahead of market movements
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3'>
              {data.map((item) => (
                <div
                  className='grid grid-cols-5 space-x-3 mt-8 text-firefly-900 dark:text-firefly-100 font-lexend hover:bg-asparagus-200 dark:hover:bg-firefly-900 py-3 rounded-md cursor-pointer transition duration-300 ease-in-out p-2'
                  key={item.id}
                >
                  <div className='flex items-center justify-center text-asparagus-500 w-14 h-14 mt-1 bg-asparagus-200 dark:bg-firefly-900 rounded-lg bg-opacity-80 text-3xl'>
                    {item.icon}
                  </div>
                  <div className='flex flex-col items-start justify-center col-span-4'>
                    <h3 className='text-base leading-7 font-bold'>
                      {item.title}
                    </h3>
                    <p className='text-firefly-800 dark:text-firefly-100 text-sm mt-0.5'>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-8 md:mt-14'>
              <Link href={'/wr-score'}>
                <Button
                  additionalClasses=''
                  placeholder={'Learn More'}
                  size='md'
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center mx-auto'>
            <Image
              src={FeaturesImage}
              alt='Features Image'
              className='rounded-lg md:max-w-sm h-80 md:h-auto object-cover object-top'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

const data = [
  {
    id: 1,
    title: 'WR Assessment',
    description: 'Concise summary of the business performance of the company',
    icon: <MdAssessment className='text-4xl' />,
  },
  {
    id: 2,
    title: 'Compare',
    description:
      'Compare two companies and see how they are placed against each other.',
    icon: <MdCompare className='text-4xl' />,
  },
  {
    id: 3,
    title: 'Watchlist',
    description: 'Add and track companies in which you are interested.',
    icon: <MdOutlineChecklist className='text-4xl' />,
  },
  {
    id: 4,
    title: 'Dividend List',
    description:
      "Which company and what's the current yield. All in one place.",
    icon: <FaDivide className='text-4xl' />,
  },
  {
    id: 5,
    title: 'Latest News',
    description:
      "Capture what's happening in and around the business and economy.",
    icon: <MdNewspaper className='text-4xl' />,
  },
  {
    id: 6,
    title: 'Earnings Assessment',
    description: 'Preview of upcoming earnings and performance.',
    icon: <SlGraph className='text-4xl' />,
  },
];
