import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BannerImage from '@/assets/images/banner.svg';
import Button from '@/components/button';
import { Progress } from '@material-tailwind/react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface FactsProps {
  facts: string[];
}

const FactsComponent: React.FC<FactsProps> = ({ facts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const factChangeInterval = 8000; // 5 seconds
    const progressBarInterval = 10; // 1 second

    const factChangeIncrement =
      (100 / factChangeInterval) * progressBarInterval;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < facts.length - 1 ? prevIndex + 1 : 0
      );
      setProgress(0); // Reset progress when changing the fact
    }, factChangeInterval);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + factChangeIncrement);
    }, progressBarInterval);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [facts]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setProgress(0); // Reset progress when changing the fact
  };

  return (
    <div className='py-4'>
      <div className=''>
        <h2 className='text-3xl font-bold pb-8 md:pb-2'>Did you know?</h2>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            className='opacity-100'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className={`text-xl mb-6 h-32 flex items-center `}>
              &quot;{facts[currentIndex]}&quot;
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <Progress
        value={progress}
        placeholder={''}
        size='sm'
        color='green'
        className='bg-firefly-900'
      />
      <div className='flex items-center justify-end space-x-2 mt-4'>
        {facts.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`cursor-pointer h-2 w-2 rounded-full ${
              index === currentIndex
                ? 'bg-green-500 scale-150 dark:bg-green-300 transition-all duration-150 ease-in-out'
                : 'bg-firefly-950 dark:bg-firefly-700'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

const Banner = () => {
  function formatDate() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  }

  const formattedDateString = formatDate();

  const facts = [
    'A 2014 study by the University of Chicago found that between 45% and 80% of day traders lose money over time. So, strong research is a must before making an investment.',
    'Rs. 100 invested in 2013 in BSE index would have become Rs. 311 (3x of initial investment!). CAGR is 12%.',
    `The most expensive stock is MRF, share price is ₹1,31,509.75 per share (as of ${formattedDateString}).`,
    'Integrated Industries Ltd share price (BOM: 531889) delivered a 4500% return in one year. It is Rs. 440, and was just Rs. 9.64 just 12 months ago!',
    'Berkshire makes over USD$2B income per year just through dividends only! Dividends are a great way to build long-term wealth.',
    'There are over 12 crore investors who are trading at BSE and growing at a double-digit rate.',
    'BSE Sensex is Asia’s first stock exchange, started operation in 1875!',
  ];
  return (
    <div className='bg-gray-100 dark:bg-firefly-950 border-b border-firefly-200 dark:border-firefly-900 flex items-center justify-center'>
      <div className='max-w-7xl h-full mx-auto z-10'>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
          <div className='px-3 flex items-start justify-center flex-col max-w-4xl mx-auto'>
            <div className='text-3xl lg:text-4xl font-lexend text-firefly-700 dark:text-firefly-100 pt-8 pb-4'>
              <h1 className=''>Discover a New Era of Stock Investment !</h1>
              {/* <p className='text-lg mt-4 font-medium'>
                Where Extensive Knowledge Meets Intelligent Algorithmic Insights
                for Unmatched Wealth Growth.
              </p> */}
            </div>
            <div className='text-base text-firefly-800 dark:text-firefly-100'>
              <div className='font-lexend font-light space-y-2'>
                <div className='text-left'>
                  <FactsComponent facts={facts} />
                </div>
              </div>
            </div>
            <div className='w-full flex items-center justify-center lg:justify-start  space-x-3 mt-10 text-gray-200 font-lexend pb-8'>
              <Link href={'/download'}>
                <Button size='md'>Download</Button>
              </Link>
              <Link href={'/wr-score'}>
                <Button size='md'>WR Score</Button>
              </Link>
            </div>
          </div>
          <div className='hidden lg:block mx-auto'>
            <Image
              src={BannerImage}
              alt='Banner Image'
              className='rounded-lg max-w-lg pt-24'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
