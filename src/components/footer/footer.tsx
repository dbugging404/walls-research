import { Typography } from '@material-tailwind/react';
import WallsResearchDesktop from '@/assets/logos/walls-research-full.svg';
import Image from 'next/image';
import Link from 'next/link';
import Download from '@/components/download';
import {
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsFillEnvelopeAtFill,
} from 'react-icons/bs';
import { RiTwitterXFill } from 'react-icons/ri';

const LINKS = [
  {
    title: 'Product',
    items: ['Overview', 'Features', 'Solutions', 'Tutorials'],
  },
  {
    title: 'Company',
    items: ['About us', 'Careers', 'Press', 'News'],
  },
  {
    title: 'Resource',
    items: ['Blog', 'Newsletter', 'Events', 'Help center'],
  },
  {
    title: 'Legal',
    items: ['Disclaimer', 'Privacy', 'Cookies', 'Terms'],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='relative w-full border-t border-firefly-600 py-6 md:py-8 lg:py-10 bg-firefly-950'>
      <div className='mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8'>
        <div className='grid grid-cols-1 justify-between gap-4 md:grid-cols-2'>
          <div className='flex py-4 w-full md:flex-col items-start justify-start space-x-2 md:space-x-0'>
            <div className='flex items-center justify-center h-full mx-auto md:mx-0 pb-0 md:pb-2'>
              <Image
                src={WallsResearchDesktop}
                alt='Walls Research'
                className='p-2 fill-white grayscale brightness-0 invert flex items-center justify-center'
              />
            </div>
            <div className='hidden md:block'>
              <Download />
            </div>
          </div>
          <div className='md:hidden flex items-center justify-center mx-auto pb-6 md:pb-6'>
            <Download />
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 justify-between items-center text-center md:text-left gap-4'>
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant='small'
                  className='mb-3 font-medium opacity-70 font-lexend text-firefly-50'
                  placeholder={''}
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as='a'
                      href='#'
                      className='py-0.5 text-base transition-colors duration-500 font-lexend text-firefly-100 hover:text-asparagus-500'
                      placeholder={''}
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className='mt-12 flex w-full flex-col items-center justify-center border-t border-gray-600 py-4 md:flex-row md:justify-between'>
          <Typography
            variant='small'
            className='mb-4 text-center font-normal text-firefly-200 md:mb-0 font-lexend'
            placeholder={''}
          >
            &copy; {currentYear}{' '}
            <a href='https://material-tailwind.com/'>Walls Research</a>. All
            Rights Reserved.
          </Typography>
          <div className='flex gap-4 text-blue-gray-900 sm:justify-center'>
            <div className='mt-2 space-x-2 sm:space-x-3 flex items-ceter justify-center'>
              {SocialIcon.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  target='_blank'
                  rel='noreferrer'
                  className=''
                >
                  <span className='sr-only'>{item.name}</span>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const SocialIcon = [
  {
    name: 'Youtube',
    url: '#',
    icon: <BsYoutube className='text-xl text-white dark:text-red-500' />,
  },
  {
    name: 'Instagram',
    url: '#',
    icon: <BsInstagram className='text-xl text-white dark:text-pink-500' />,
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: <BsLinkedin className='text-xl text-white dark:text-blue-500' />,
  },
  {
    name: 'X',
    url: '#',
    icon: <RiTwitterXFill className='text-xl text-white dark:text-white' />,
  },
  {
    name: 'Mail',
    url: 'mailto:#',
    icon: (
      <BsFillEnvelopeAtFill className='text-xl text-white dark:text-gray-200' />
    ),
  },
];
