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

const IndexPage: NextPage = ({ blogs }: any) => {
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
