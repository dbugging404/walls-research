import CTA from '@/components/cta';
import Banner from '@/sections/home/banner';
import Content from '@/sections/home/content';
import Faq from '@/sections/home/faq';
import Features from '@/sections/home/features';
import Reviews from '@/sections/home/reviews';
import { NextPage } from 'next';
import React from 'react';
import Animate from '@/components/animate';

const IndexPage: NextPage = () => {
  return (
    <div className=''>
      <Animate>
        <Banner />
      </Animate>
      <Animate>
        <Features />
      </Animate>
      <Animate>
        <Content />
      </Animate>
      <Animate>
        <Reviews />
      </Animate>
      <Animate>
        <Faq />
      </Animate>
      <Animate>
        <CTA />
      </Animate>
    </div>
  );
};

export default IndexPage;
