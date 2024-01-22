import hygraphClient from '@/lib/_client';
import { gql } from '@apollo/client';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import WRLogo from '@/assets/logos/walls-research.svg';

const limit = 6;

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const IndexPage = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Blogs | Walls Research</title>
      </Head>
      <div className='py-24 text-firefly-800 dark:text-firefly-100 max-w-7xl mx-auto font-lexend'>
        <div className='text-center'>
          <div>
            <h2 className='text-3xl tracking-tight font-extrabold sm:text-4xl'>
              Recent Blogs
            </h2>
            <p className='mt-3 text-xl text-gray-500 sm:mt-4'>
              Our latest thoughts on the markets and investing.
            </p>
          </div>
        </div>
        <div className='py-12 max-w-xl mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none p-3'>
          {blogs &&
            blogs.map((post) => (
              <Link
                href={`/blogs/${post.node.slug}`}
                key={post.node.title}
                className='border border-firefly-200 dark:border-firefly-700 p-4 rounded-md shadow-md hover:shadow-xl dark:shadow-firefly-900/20 dark:hover:dark:shadow-firefly-900/20 transition duration-300 ease-in-out flex items-start justify-between flex-col'
              >
                <div>
                  <span
                    className={classNames(
                      post.node.category === 'INVESTING'
                        ? 'bg-blue-100 text-blue-800 px-3 rounded-3xl'
                        : '',
                      post.node.category === 'ANNOUNCEMENT'
                        ? 'bg-red-100 text-red-800 px-3 rounded-3xl'
                        : '',
                      post.node.category === 'GUIDE'
                        ? 'bg-asparagus-200 text-asparagus-700 px-3 rounded-3xl'
                        : '',
                      post.node.category === 'ANALYSIS'
                        ? 'bg-amber-100 text-amber-800 px-3 rounded-3xl'
                        : '',
                      post.node.category === 'ARTICLE'
                        ? 'bg-teal-100 text-teal-800 px-3 rounded-3xl'
                        : '',
                      post.node.category === 'NEWS'
                        ? 'bg-cyan-100 text-cyan-800 px-3 rounded-3xl'
                        : ''
                    )}
                  >
                    {post.node.category}
                  </span>
                  <div className='block mt-4'>
                    <p className='text-xl font-semibold text-firefly-800 dark:text-firefly-200'>
                      {post.node.title}
                    </p>
                    <p className='mt-3 text-sm text-firefly-400'>
                      {post.node.excerpt}
                    </p>
                  </div>
                </div>
                <div className='mt-6'>
                  <div className='flex-shrink-0'>
                    <span className='sr-only'>
                      {post.node.authors.map((author) => author.name + ', ')}
                    </span>
                  </div>
                  <div className='flex items-center justify-start space-x-3'>
                    <Image
                      src={WRLogo}
                      className='w-12 h-12 bg-firefly-950 rounded-md p-0.5'
                      alt={'Walls Research Team'}
                    />
                    <div className='flex flex-col space-x-1 text-sm '>
                      <p className='ml-1 text-sm font-medium'>
                        {post.node.authors.map((author) => author.name + ', ')}
                      </p>
                      <div className='space-x-2'>
                        <time dateTime={post.node.published}>
                          {new Date(post.node.published).toLocaleDateString(
                            'en-GB',
                            {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                            }
                          )}
                        </time>
                        <span aria-hidden='true'>&middot;</span>
                        <span>{post.node.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default IndexPage;

export const getStaticProps = async ({ params }) => {
  const { data } = await hygraphClient.query({
    query: gql`
      query BlogsPageQuery($limit: Int!, $offset: Int!) {
        blogPostsConnection(
          first: $limit
          skip: $offset
          orderBy: published_DESC
        ) {
          blogs: edges {
            node {
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
          pageInfo {
            hasNextPage
            hasPreviousPage
            pageSize
          }
          aggregate {
            count
          }
        }
      }
    `,
    variables: {
      limit,
      offset: (params.page - 1) * limit,
    },
  });

  return {
    props: {
      blogs: data.blogPostsConnection.blogs,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { data } = await hygraphClient.query({
    query: gql`
      query {
        blogPostsConnection {
          aggregate {
            count
          }
        }
      }
    `,
  });
  function* numberOfPages({ total, limit }) {
    let page = 1;
    let offset = 0;
    while (offset < total) {
      yield page;
      page++;
      offset += limit;
    }
  }

  const paths = [
    ...numberOfPages({
      total: data.blogPostsConnection.aggregate.count,
      limit,
    }),
  ].map((page) => ({
    params: { page: String(page) },
  }));

  return {
    paths,
    fallback: true,
  };
};
