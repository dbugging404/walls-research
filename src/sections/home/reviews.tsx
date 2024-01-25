import { Carousel, IconButton } from '@material-tailwind/react';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import WallsResearchLogo from '@/assets/logos/walls-research.svg';
import Image from 'next/image';

const Reviews = () => {
  return (
    <div className='max-w-7xl mx-auto py-6 md:py-8 lg:py-10'>
      <div className='flex items-center justify-center'>
        <h2 className='text-3xl font-bold font-lexend'>Recent Tweets</h2>
      </div>
      <Carousel
        className='rounded-xl'
        placeholder={''}
        loop
        autoplay
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
                    <Image
                      src={item.icon}
                      alt='Features Icon'
                      width={30}
                      height={30}
                      className='w-14 h-14 p-1 rounded-full bg-asparagus-500 dark:bg-firefly-950'
                    />
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
              <div className='text-black dark:text-white block text-xl leading-snug mt-3'>
                {item.review}
              </div>
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
    name: 'Walls Research',
    review: (
      <div>
        Tata Power is expected to reach ₹450. The company is plan to boost
        renewable capacity 15 gigawatts by 2027 which accelerate clean energy.
        The company has signed MoU with Gujarat (invest ₹70,000 cr.)and Tamil
        Nadu (invest ₹70,800 cr.){' '}
        <span className='text-blue-500'>#TataPower</span>{' '}
        <span className='text-blue-500'>#VibrantGujaratGlobalSummit2024</span>
      </div>
    ),
    handle: '@wallsresearch',
    profile: 'https://twitter.com/wallsresearch',
    icon: WallsResearchLogo,
  },
  {
    id: 2,
    name: 'Walls Research',
    review:
      'Indian Government will offer 50% discount on revenue sharing with states and reduced bank guarantees to boost Underground coal mining. Underground coal mining proves to be a less polluting method',
    handle: '@wallsresearch',
    profile: 'https://twitter.com/wallsresearch',
    icon: WallsResearchLogo,
  },
  {
    id: 2,
    name: 'Walls Research',
    review: (
      <div>
        India Government plan to launch 2nd phase of Startup India program on
        January 16 with a focus on deep technology startups. These Startups will
        work in areas including semiconductor chips and related R&D areas,
        quantum and high-performance computing, AI & cybersecurity{' '}
        <span className='text-blue-500'>#startups</span>
      </div>
    ),
    handle: '@wallsresearch',
    profile: 'https://twitter.com/wallsresearch',
    icon: WallsResearchLogo,
  },
  {
    id: 2,
    name: 'Walls Research',
    review: (
      <div>
        Worldwide PC shipment is decline by (14.8)% which shipped 241.8 million
        unites in 2023. <span className='text-blue-500'>#pcshippment</span>{' '}
        First time, PC shipment volume has dipped below 250 million since 2006
      </div>
    ),
    handle: '@wallsresearch',
    profile: 'https://twitter.com/wallsresearch',
    icon: WallsResearchLogo,
  },
  {
    id: 2,
    name: 'Walls Research',
    review: (
      <div>
        Paytm announced to invest ₹1,000 cr. in Gujarat International Finance
        Tech (GIFT City) to build a global financial ecosystem{' '}
        <span className='text-blue-500'>#Paytm</span>{' '}
        <span className='text-blue-500'>#VibrantGujaratGlobalSummit</span> Paytm
        will use its proven capability to innovate & build new tech for users
        across the globe looking to invest in India
      </div>
    ),
    handle: '@wallsresearch',
    profile: 'https://twitter.com/wallsresearch',
    icon: WallsResearchLogo,
  },
];
