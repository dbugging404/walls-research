import Image from 'next/image';
import React from 'react';
import wrScore from '@/assets/images/wrScore.svg';
import wrScoreMoble from '@/assets/images/wrScoreMobile.svg';
import { MdAnalytics } from 'react-icons/md';
import {
  FaHandHoldingUsd,
  FaGlobeAmericas,
  FaRegHandPointer,
} from 'react-icons/fa';
import { BiSolidAnalyse, BiLogoGraphql } from 'react-icons/bi';
import { GiPayMoney } from 'react-icons/gi';
import { FaCircleCheck } from 'react-icons/fa6';
import { HiOutlineLightBulb } from 'react-icons/hi';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>WR Score | Walls Research</title>
        <meta name='title' content='WR Score | Walls Research' />
        <meta
          name='description'
          content='Extensive Knowledge Meets Intelligent Algorithmic Insights for Unmatched Wealth Growth.'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='WR Score | Walls Research' />
        <meta property='og:site_name' content='Walls Research' />
        <meta property='og:url' content='https://wallsresearch.com' />
        <meta
          property='og:description'
          content='Extensive Knowledge Meets Intelligent Algorithmic Insights for Unmatched Wealth Growth.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={wrScore} />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@wallsresearch' />
        <meta name='twitter:title' content='WR Score | Walls Research' />
        <meta
          name='twitter:description'
          content='Extensive Knowledge Meets Intelligent Algorithmic Insights for Unmatched Wealth Growth.'
        />
        <meta name='twitter:image' content={wrScore} />
      </Head>
      <div className='bg-white dark:bg-firefly-950'>
        <div className='max-w-7xl mx-auto px-3'>
          <div className='py-8'>
            <h1 className='font-lexend text-4xl pb-10 pt-6 font-bold text-center'>
              WR Score
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <div className='flex flex-col items-start justify-center font-lexend px-3 dark:text-firefly-100 text-firefly-800 space-y-5 pb-20'>
                <h2 className='text-2xl font-bold mx-auto bg-gradient-to-b from-asparagus-500 to-asparagus-700 rounded-full px-5 py-1.5 text-firefly-100'>
                  How it works:
                </h2>
                <div className='flex flex-wrap md:flex-nowrap mx-auto gap-2 items-center justify-center'>
                  {Data[0].how.map((item) => (
                    <div
                      key={item.id}
                      className='relative w-40 h-40 text-center group bg-firefly-700 bg-opacity-20 dark:bg-opacity-40 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-opacity-100 '
                    >
                      <div className='absolute flex items-center justify-center w-full h-full'>
                        <div className='text-base font-lexend opacity-100 transition-opacity group-hover:opacity-0 z-10 px-2'>
                          {item.title}
                        </div>
                        <div className='absolute opacity-0 text-xs group-hover:opacity-80 transition-all duration-150 ease-in-out group-hover:text-firefly-100 px-0.5'>
                          {item.description}
                        </div>
                        <div className='opacity-0 group-hover:opacity-20 transition-opacity absolute text-firefly-950'>
                          {item.icon}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <h2 className='text-2xl font-bold mx-auto bg-gradient-to-b from-asparagus-500 to-asparagus-700 rounded-full px-5 py-1.5 text-firefly-100'>
                  The Power of Insights:
                </h2>
                <div className='flex flex-wrap md:flex-nowrap mx-auto gap-2 items-center justify-center'>
                  {Data[0].power.map((item) => (
                    <div
                      key={item.id}
                      className='relative w-40 h-40 text-center group bg-firefly-700 bg-opacity-20 dark:bg-opacity-40 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-opacity-100 '
                    >
                      <div className='absolute flex items-center justify-center w-full h-full'>
                        <div className='text-base font-lexend opacity-100 transition-opacity group-hover:opacity-0 z-10 px-2'>
                          {item.title}
                        </div>
                        <div className='absolute opacity-0 text-xs group-hover:opacity-80 transition-all duration-150 ease-in-out group-hover:text-firefly-100 px-0.5'>
                          {item.description}
                        </div>
                        <div className='opacity-0 group-hover:opacity-20 transition-opacity absolute text-firefly-950'>
                          {item.icon}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <h2 className='text-2xl font-bold mx-auto bg-gradient-to-b from-asparagus-500 to-asparagus-700 rounded-full px-5 py-1.5 text-firefly-100'>
                  Why Walls Research ?
                </h2>
                <div className='flex flex-wrap md:flex-nowrap mx-auto gap-2 items-center justify-center'>
                  {Data[0].why.map((item) => (
                    <div
                      key={item.id}
                      className='relative w-40 h-40 text-center group bg-firefly-700 bg-opacity-20 dark:bg-opacity-40 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-opacity-100 '
                    >
                      <div className='absolute flex items-center justify-center w-full h-full'>
                        <div className='text-base font-lexend opacity-100 transition-opacity group-hover:opacity-0 z-10 px-2'>
                          {item.title}
                        </div>
                        <div className='absolute opacity-0 text-xs group-hover:opacity-80 transition-all duration-150 ease-in-out group-hover:text-firefly-100 px-0.5'>
                          {item.description}
                        </div>
                        <div className='opacity-0 group-hover:opacity-20 transition-opacity absolute text-firefly-950'>
                          {item.icon}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className='text-center font-lexend text-base font-bold'>
                  How does it work ?
                </div>
                <Image
                  src={wrScore}
                  alt='How Does it work?'
                  width={500}
                  height={500}
                  className='hidden lg:block md:w-full md:h-full object-cover '
                />
                <Image
                  src={wrScoreMoble}
                  alt='How Does it work?'
                  width={500}
                  height={500}
                  className='block lg:hidden md:w-full md:h-2/3 object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;

const Data = [
  {
    how: [
      {
        id: 1,
        title: 'Quantitative Analysis',
        description:
          "Dive deep into a company's financial health through a comprehensive analysis of its Income Statement, Balance Sheet, and Cashflow Statement.",
        icon: <MdAnalytics className='text-6xl' />,
      },
      {
        id: 2,
        title: 'Holistic Evaluation',
        description:
          'Beyond the numbers, we objectively assess company strategy, financial management, and operations.',
        icon: <FaHandHoldingUsd className='text-6xl' />,
      },
      {
        id: 3,
        title: 'Global Reach',
        description:
          'Our insights are not confined to a specific market. Extend your investment horizons with analysis that transcends global stock exchanges.',
        icon: <FaGlobeAmericas className='text-6xl' />,
      },
    ],
    why: [
      {
        id: 1,
        title: 'Simplicity Redefined',
        description:
          "Gain a deep understanding of a company's business performance without drowning in complex data.",
        icon: <FaCircleCheck className='text-6xl' />,
      },
      {
        id: 2,
        title: 'Objective Analysis',
        description:
          'Empower your investment decisions with insights that matter. Our platform equips you with the knowledge to make strategic choices in a rapidly changing market.',
        icon: <BiSolidAnalyse className='text-6xl' />,
      },
      {
        id: 3,
        title: 'Invest with Confidence',
        description:
          'No finance degree required. Our platform presents insights in a way that everyone can comprehend, demystifying the intricacies of company performance.',
        icon: <GiPayMoney className='text-6xl' />,
      },
    ],
    power: [
      {
        id: 1,
        title: 'Clarity at Your Fingertips',
        description:
          'We believe in cutting through the noise. Our platform is designed to simplify the investment process, ensuring that you focus on what truly matters.',
        icon: <FaRegHandPointer className='text-6xl' />,
      },
      {
        id: 2,
        title: 'Informed Decision-Making',
        description:
          'Say goodbye to biased information. Our scores are derived from objective assessments, providing you with a clear and unbiased view of each company.',
        icon: <HiOutlineLightBulb className='text-6xl' />,
      },
      {
        id: 3,
        title: 'Uncomplicated Understanding',
        description:
          "Whether you're a seasoned investor or just starting, our platform gives you the confidence to make decisions backed by robust analysis.",
        icon: <BiLogoGraphql className='text-6xl' />,
      },
    ],
  },
];
