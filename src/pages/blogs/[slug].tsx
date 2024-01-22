import React from 'react';
import Link from 'next/link';
import { gql } from '@apollo/client';
import Head from 'next/head';
import Image from 'next/image';
import hygraphClient from '@/lib/_client';
import { useRouter } from 'next/router';
import Error from 'next/error';
import Markdown from 'react-markdown';

export const getStaticProps = async ({ params }) => {
  const { data } = await hygraphClient.query({
    query: gql`
      query ($slug: String!) {
        blogPost(where: { slug: $slug }) {
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
          content
          category
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });

  return {
    props: {
      blog: data.blogPost,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { data } = await hygraphClient.query({
    query: gql`
      query {
        blogPosts {
          slug
        }
      }
    `,
  });
  return {
    paths: data.blogPosts.map((blog) => ({
      params: {
        slug: blog.slug,
      },
    })),
    fallback: true,
  };
};

const IndexPage = ({ blog }) => {
  const title = `${blog?.title} | Walls Research`;
  const convertToTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{convertToTitleCase(title)}</title>
        <meta name='description' content={blog?.excerpt.slice(0, 160)} />
      </Head>
      <div>
        {blog?.slug ? (
          <div className='relative py-16 overflow-hidden'>
            <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
              <div
                className='relative h-full text-lg max-w-prose mx-auto'
                aria-hidden='true'
              >
                <svg
                  className='absolute top-12 left-full transform translate-x-32'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                >
                  <defs>
                    <pattern
                      id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-gray-100 dark:text-gray-900'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)'
                  />
                </svg>
                <svg
                  className='absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                >
                  <defs>
                    <pattern
                      id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-gray-100 dark:text-gray-900'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
                  />
                </svg>
                <svg
                  className='absolute bottom-12 left-full transform translate-x-32'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                >
                  <defs>
                    <pattern
                      id='d3eb07ae-5182-43e6-857d-35c643af9034'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-gray-200 dark:text-gray-900'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)'
                  />
                </svg>
              </div>
            </div>
            <div className='relative px-4 sm:px-6 lg:px-8'>
              <div className='max-w-7xl mx-auto'>
                <h1 className='flex flex-col w-full'>
                  <span className='block text-2xl text-center max-w-2xl mx-auto leading-8 font-bold tracking-tighter text-gray-800 dark:text-gray-200 sm:text-4xl font-lexend py-10'>
                    {blog?.title}
                  </span>
                  <span className='text-center font-lexend pb-10 '>
                    by: WR Team
                  </span>
                </h1>
                <div className='text-firefly-800 prose-strong:font-extrabold dark:text-firefly-200 prose prose-strong:text-firefly-800 dark:prose-strong:text-firefly-200 md:prose-xl lg:prose-2xl prose-headings:text-firefly-800 dark:prose-headings:text-firefly-200 prose-a:text-firefly-800 dark:prose-a:text-firefly-200 mx-auto font-lexend'>
                  <Markdown>{blog?.content}</Markdown>
                </div>
                <div>
                  {/* <Share />*/}
                  {/* <BlogFooter /> */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Error statusCode={404} />
        )}
      </div>
    </>
  );
};

export default IndexPage;
