import { Carousel, IconButton } from '@material-tailwind/react';
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { FaXTwitter } from 'react-icons/fa6';

const Reviews = () => {
  return (
    <div className='max-w-7xl mx-auto py-6 md:py-8 lg:py-10'>
      <Carousel
        className='rounded-xl'
        placeholder={''}
        loop
        // autoplay
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
            {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i
                    ? 'w-8 bg-gray-600 dark:bg-firefly-100'
                    : 'w-4 bg-gray-400 dark:bg-firefly-400 '
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant='text'
            placeholder={''}
            color='white'
            size='lg'
            onClick={handlePrev}
            className='!absolute top-2/4 left-4 -translate-y-2/4 text-gray-600 dark:text-firefly-300'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant='text'
            placeholder={''}
            color='white'
            size='lg'
            onClick={handleNext}
            className='!absolute top-2/4 !right-4 -translate-y-2/4 text-gray-600 dark:text-firefly-300'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
              />
            </svg>
          </IconButton>
        )}
      >
        {data.map((item) => (
          <div className='p-10 flex items-center justify-center' key={item.id}>
            <div className='bg-white dark:bg-firefly-700 border-gray-200 dark:border-firefly-400 p-4 rounded-xl border max-w-xl'>
              <div className='flex justify-between'>
                <div className='flex items-center'>
                  <Link href={item.profile}>
                    <CgProfile className='text-4xl' />
                  </Link>
                  <div className='ml-1.5 text-sm leading-tight'>
                    <span className='text-black dark:text-white font-bold block font-inter'>
                      {item.name}
                    </span>
                    <span className='text-gray-500 dark:text-gray-400 font-normal block font-inter'>
                      {item.handle}
                    </span>
                  </div>
                </div>
                <FaXTwitter className='text-2xl text-black dark:text-white' />
              </div>
              <p className='text-black dark:text-white block text-xl leading-snug mt-3'>
                {item.review}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;

const data = [
  {
    id: 1,
    name: 'Lorem, ipsum.',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit illo dolorem dolore provident voluptatibus.',
    handle: '@lorem',
    profile: 'https://twitter.com',
    icon: '',
  },
  {
    id: 2,
    name: 'Lorem, ipsum.',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit illo dolorem dolore provident voluptatibus.',
    handle: '@lorem',
    profile: 'https://twitter.com',
    icon: '',
  },
  {
    id: 3,
    name: 'Lorem, ipsum.',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit illo dolorem dolore provident voluptatibus.',
    handle: '@lorem',
    profile: 'https://twitter.com',
    icon: '',
  },
  {
    id: 4,
    name: 'Lorem, ipsum.',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit illo dolorem dolore provident voluptatibus.',
    handle: '@lorem',
    profile: 'https://twitter.com',
    icon: '',
  },
  {
    id: 5,
    name: 'Lorem, ipsum.',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit illo dolorem dolore provident voluptatibus.',
    handle: '@lorem',
    profile: 'https://twitter.com',
    icon: '',
  },
];
