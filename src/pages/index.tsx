// import TwitterFeed from '@/sections/home/TwitterFeed';
import CTA from '@/components/cta';
import Banner from '@/sections/home/banner';
import Content from '@/sections/home/content';
import Faq from '@/sections/home/faq';
import Features from '@/sections/home/features';
import Reviews from '@/sections/home/reviews';
import { NextPage } from 'next';
import React from 'react';

const IndexPage: NextPage = () => {
  return (
    <div className=''>
      <Banner />
      <Features />
      <Content />
      {/* <TwitterFeed /> */}
      <Reviews />
      <Faq />
      <CTA />
    </div>
  );
};

export default IndexPage;
