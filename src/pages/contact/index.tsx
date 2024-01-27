import React from 'react';
import { NextPage } from 'next';
import ContactImage from '@/assets/images/contact.webp';
import { BsInstagram, BsLinkedin, BsFillEnvelopeAtFill } from 'react-icons/bs';
import { RiTwitterXFill } from 'react-icons/ri';
import { HiChevronRight } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';

const IndexPage: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2'>
        <div>
          <h1 className='text-4xl text-center font-lexend pt-6 md:pt-8 lg:pt-10 font-bold dark:text-firefly-100 text-firefly-800'>
            Contact Us
          </h1>
          <p className='pb-6 md:pb-8 lg:pb-10 font-lexend text-center pt-4'>
            Have a question or feedback? We&apos;d love to hear from you! Reach
            out to us at:
          </p>
          <div className='flex items-center justify-center flex-col space-y-1.5 px-3'>
            {SocialIcon.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                target='_blank'
                className='p-2 border border-asparagus-500 w-full mx-auto md:mx-0 max-w-sm dark:border-firefly-600 rounded-md dark:hover:bg-firefly-900 hover:bg-firefly-300 hover:bg-opacity-40 hover:border-transparent transition-all duration-150 ease-in-out'
              >
                <div
                  key={item.name}
                  className='flex items-center justify-between '
                >
                  <div className='flex space-x-3 items-center'>
                    <div className=''>{item.icon}</div>
                    <div className='text-base font-lexend'>{item.name}</div>
                  </div>
                  <div>
                    <HiChevronRight className='w-8 h-8 text-asparagus-500' />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className='pb-6 md:pb-8 lg:pb-10 font-lexend text-center pt-4 px-3'>
            Follow us for the latest updates and insights. Let&apos;s connect!
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <Image src={ContactImage} alt='Contact Us' width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

const SocialIcon = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/wallsresearch/',
    icon: <BsInstagram className='text-xl text-pink-500' />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/walls-research-inc-a548b127a/',
    icon: <BsLinkedin className='text-xl text-blue-500' />,
  },
  {
    name: 'X',
    url: 'https://x.com/wallsresearch',
    icon: <RiTwitterXFill className='text-xl text-black dark:text-white' />,
  },
  {
    name: 'Mail',
    url: 'mailto:admin@wallsresearch.in',
    icon: (
      <BsFillEnvelopeAtFill className='text-xl text-firefly-950 dark:text-gray-100' />
    ),
  },
];
