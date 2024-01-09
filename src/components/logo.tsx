import React from 'react';
import Image from 'next/image';
import WallsResearchDesktop from '@/assets/logos/walls-research-full.svg';
import WallsResearchMobile from '@/assets/logos/walls-research.svg';

const Logo = () => {
  return (
    <div>
      <Image
        src={WallsResearchDesktop}
        alt='Walls Research'
        width={500}
        height={500}
        className='w-40 h-20'
      />
    </div>
  );
};

export default Logo;

export const LogoMobile = () => {
  return (
    <div>
      <Image
        src={WallsResearchMobile}
        alt='Walls Research'
        width={500}
        height={500}
        className='w-20 h-20'
      />
    </div>
  );
};
