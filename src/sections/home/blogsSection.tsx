import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import WRLogo from '@/assets/logos/walls-research.svg';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const BlogsSection = ({ blogs }) => {
  return (
    <div className='py-6 ,d:py-8 lg:py-10 border-t border-firefly-200 dark:border-firefly-700 font-lexend'>
      <div className='max-w-7xl mx-auto px-3'>
        <h2 className='text-center font-lexend text-4xl font-bold pb-5 text-firefly-800 dark:text-firefly-100'>
          Recent Blogs
        </h2>
        <p className='text-center pb-5 font-lexend'>
          Our most recent blogs selection.
        </p>
        <div className='py-12 max-w-xl mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none p-3'>
          {blogs &&
            blogs.map((post) => (
              <Link
                href={`/blogs/${post.slug}`}
                key={post.title}
                className='border border-firefly-200 dark:border-firefly-700 p-4 rounded-md shadow-md hover:shadow-xl dark:shadow-firefly-900/20 dark:hover:dark:shadow-firefly-900/20 transition duration-300 ease-in-out flex items-start justify-between flex-col'
              >
                <div>
                  <span
                    className={classNames(
                      post.category === 'INVESTING'
                        ? 'bg-blue-100 text-blue-800 px-3 rounded-3xl'
                        : '',
                      post.category === 'ANNOUNCEMENT'
                        ? 'bg-red-100 text-red-800 px-3 rounded-3xl'
                        : '',
                      post.category === 'GUIDE'
                        ? 'bg-asparagus-200 text-asparagus-700 px-3 rounded-3xl'
                        : '',
                      post.category === 'ANALYSIS'
                        ? 'bg-amber-100 text-amber-800 px-3 rounded-3xl'
                        : '',
                      post.category === 'ARTICLE'
                        ? 'bg-teal-100 text-teal-800 px-3 rounded-3xl'
                        : '',
                      post.category === 'NEWS'
                        ? 'bg-cyan-100 text-cyan-800 px-3 rounded-3xl'
                        : ''
                    )}
                  >
                    {post.category}
                  </span>
                  <div className='block mt-4'>
                    <p className='text-xl font-semibold text-firefly-800 dark:text-firefly-200'>
                      {post.title}
                    </p>
                    <p className='mt-3 text-sm text-firefly-400'>
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className='mt-6'>
                  <div className='flex-shrink-0'>
                    <span className='sr-only'>
                      {post.authors.map((author) => author.name + ', ')}
                    </span>
                  </div>
                  <div className='flex items-center justify-start space-x-3'>
                    <Image
                      src={WRLogo}
                      className='w-12 h-12 bg-asparagus-500 dark:bg-firefly-950 rounded-md p-0.5'
                      alt={'Walls Research Team'}
                    />
                    <div className='flex flex-col space-x-1 text-sm '>
                      <p className='ml-1 text-sm font-medium'>
                        {post.authors.map((author) => author.name + ', ')}
                      </p>
                      <div className='space-x-2'>
                        <time dateTime={post.published}>
                          {new Date(post.published).toLocaleDateString(
                            'en-GB',
                            {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                            }
                          )}
                        </time>
                        <span aria-hidden='true'>&middot;</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
