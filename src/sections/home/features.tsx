import React from 'react';
import Image from 'next/image';
import FeaturesImage from '@/assets/images/guy-with-laptop.png';
import { CgProfile } from 'react-icons/cg';
import { Button } from '@material-tailwind/react';

const Features = () => {
  return (
    <div className='py-6 md:py-8 lg:py-16 px-3 z-20'>
      <div className='max-w-7xl mx-auto flex items-start justify-center'>
        <div className='grid lg:grid-cols-2 gap-5'>
          <div className='flex flex-col items-center lg:items-start justify-center'>
            <h2 className='font-lexend text-4xl lg:text-5xl text-firefly-800 dark:text-firefly-100'>
              Stress Free Trading
            </h2>
            <div className='text-firefly-800 dark:text-firefly-100 mt-6 font-lexend text-center lg:text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              similique, magni impedit corporis quo unde. Adipisci minus aperiam
              velit vero?
            </div>
            <div className='grid grid-cols-2 gap-4'>
              {data.map((item) => (
                <div
                  className='flex items-center justify-start space-x-3 mt-10 text-firefly-800 dark:text-firefly-100 font-lexend'
                  key={item.id}
                >
                  <CgProfile className='w-8 h-8 text-asparagus-500' />
                  <div className='flex flex-col items-start justify-center'>
                    <h3 className='text-lg font-bold'>{item.title}</h3>
                    <p className='text-firefly-800 dark:text-firefly-100'>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-8 md:mt-14'>
              <Button
                className='font-medium font-lexend rounded-full bg-asparagus-500 hover:bg-asparagus-400 border-transparent transition-all duration-150'
                placeholder={'Learn More'}
                variant='filled'
                size='lg'
                ripple
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <Image
              src={FeaturesImage}
              alt='Features Image'
              className='w-screen rounded-lg sm:max-w-xl'
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
    title: 'Stress Free Trading',
    description: 'Lorem ipsum dolor sit',
    icon: '',
  },
  {
    id: 2,
    title: 'Stress Free Trading',
    description: 'Lorem ipsum dolor sit',
    icon: '',
  },
  {
    id: 3,
    title: 'Stress Free Trading',
    description: 'Lorem ipsum dolor sit',
    icon: '',
  },
  {
    id: 4,
    title: 'Stress Free Trading',
    description: 'Lorem ipsum dolor sit',
    icon: '',
  },
  {
    id: 5,
    title: 'Stress Free Trading',
    description: 'Lorem ipsum dolor sit',
    icon: '',
  },
  {
    id: 6,
    title: 'Stress Free Trading',
    description: 'Lorem ipsum dolor sit',
    icon: '',
  },
];
