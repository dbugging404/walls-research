import { Typography } from '@material-tailwind/react';
import Logo, { LogoMobile } from '@/components/logo';
import Image from 'next/image';
import Link from 'next/link';
import { BsInstagram, BsLinkedin, BsFillEnvelopeAtFill } from 'react-icons/bs';
import { RiTwitterXFill } from 'react-icons/ri';

const LINKS = [
  {
    title: 'Product',
    items: [
      { name: 'WR Score', url: '/wr-score' },
      { name: 'Features', url: '/#features' },
      { name: 'Join BETA', url: '/download' },
    ],
  },
  {
    title: 'Company',
    items: [
      // {
      //   name: 'About Us',
      //   url: '/about',
      // },
      {
        name: 'Career',
        url: '/career',
      },
      {
        name: 'Contact',
        url: '/contact',
      },
    ],
  },
  {
    title: 'Resource',
    items: [
      {
        name: 'Blog',
        url: '/blogs/page/1',
      },
    ],
  },
  {
    title: 'Legal',
    items: [
      {
        name: 'Disclaimer',
        url: '/docs/disclaimer',
      },
      {
        name: 'Privacy Policy',
        url: '/docs/privacy-policy',
      },
      {
        name: 'Terms & Conditions',
        url: '/docs/terms-and-conditions',
      },
      {
        name: 'Cancellation & Refund Policy',
        url: '/docs/cancellation-and-refund-policy',
      },
      {
        name: 'Shipping & Delivery Policy',
        url: '/docs/shipping-and-delivery-policy',
      },
    ],
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
              <LogoMobile />
            </div>
            {/* <div className='hidden md:block'>
              <Download />
            </div> */}
          </div>
          {/* <div className='md:hidden flex items-center justify-center mx-auto pb-6 md:pb-6'>
            <Download />
          </div> */}
          <div className='grid grid-cols-2 md:grid-cols-4 justify-between items-start text-center md:text-left gap-4'>
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant='small'
                  className='mb-3 font-medium opacity-70 font-lexend text-firefly-50'
                  placeholder={''}
                >
                  {title}
                </Typography>
                {items.map((menu) => (
                  <li key={menu.name}>
                    <Link href={menu.url}>
                      <Typography
                        className='py-1 text-sm transition-colors duration-500 font-lexend text-firefly-100 hover:text-asparagus-500'
                        placeholder={''}
                      >
                        {menu.name}
                      </Typography>
                    </Link>
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
