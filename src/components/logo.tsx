import React from 'react';
import Image from 'next/image';
import WallsResearchLogo from '@/assets/logos/walls-research.svg';

const Logo = () => {
  return (
    <div>
      <Image
        src={WallsResearchLogo}
        alt='Walls Research'
        width={100}
        height={100}
        className=''
      />
    </div>
  );
};

export default Logo;
