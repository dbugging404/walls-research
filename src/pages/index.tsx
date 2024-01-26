import CTA from '@/components/cta';
import Banner from '@/sections/home/banner';
import Content from '@/sections/home/content';
import Faq from '@/sections/home/faq';
import Features from '@/sections/home/features';
import Reviews from '@/sections/home/reviews';
import { NextPage } from 'next';
import React from 'react';
import Animate from '@/components/animate';
import BlogsSection from '@/sections/home/blogsSection';
import { gql } from '@apollo/client';
import hygraphClient from '@/lib/_client';
import Head from 'next/head';
import SeoImage from '@/assets/images/banner.svg';

const IndexPage: NextPage = ({ blogs }: any) => {
  return (
    <div className=''>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Home | Walls Research</title>
        <meta name='title' content='Careers | Walls Research' />
        <meta
          name='description'
          content='Extensive Knowledge Meets Intelligent Algorithmic Insights for Unmatched Wealth Growth.'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Home | Walls Research' />
        <meta property='og:site_name' content='Walls Research' />
        <meta property='og:url' content='https://wallsresearch.com' />
        <meta
          property='og:description'
          content='Extensive Knowledge Meets Intelligent Algorithmic Insights for Unmatched Wealth Growth.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={SeoImage} />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@wallsresearch' />
        <meta name='twitter:title' content='Home | Walls Research' />
        <meta
          name='twitter:description'
          content='Extensive Knowledge Meets Intelligent Algorithmic Insights for Unmatched Wealth Growth.'
        />
        <meta name='twitter:image' content={SeoImage} />
      </Head>
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
        <BlogsSection blogs={blogs} />
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

export const getStaticProps = async () => {
  const { data } = await hygraphClient.query({
    query: gql`
      query {
        blogPosts(first: 6) {
          id
          title
          slug
          excerpt
          published
          readTime
          coverImage {
            url
          }
          authors {
            id
            name
            role
          }
          category
        }
      }
    `,
  });

  return {
    props: {
      blogs: data.blogPosts,
    },
    revalidate: 180,
  };
};
