import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const BlogsSection = () => {
  return (
    <div className='py-6 ,d:py-8 lg:py-10 border-t border-firefly-200 dark:border-firefly-700'>
      <div className='max-w-7xl mx-auto px-3'>
        <h2 className='text-center font-lexend text-4xl font-bold pb-5 text-firefly-800 dark:text-firefly-100'>
          Recent Blogs
        </h2>
        <p className='text-center pb-5 font-lexend'>
          Our most recent blogs selection.
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
          {data.map((items) => (
            <Link key={items.id} href={items.link}>
              <div>
                <div className='relative rounded-md overflow-hidden group'>
                  <div className='absolute w-full h-full bg-firefly-700 dark:bg-firefly-700 dark:bg-opacity-75 bg-opacity-75'>
                    <h4 className='flex items-center justify-center h-full font-lexend text-firefly-100'>
                      <div className='group-hover:bg-gradient-to-b from-asparagus-500 to-asparagus-700 px-3 py-1.5 rounded-full transition-all duration-150 ease-in-out'>
                        {items.title}
                      </div>
                    </h4>
                  </div>
                  <Image
                    src={items.image}
                    alt='blogs'
                    height={200}
                    width={400}
                    className='w-full h-full'
                  />
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

const data = [
  {
    id: 1,
    title: 'What is WR Score?',
    image: 'https://source.unsplash.com/random/400x250',
    link: '/blogs/what-is-wr-score',
  },
  {
    id: 2,
    title: 'Is Walls Research Free?',
    image: 'https://source.unsplash.com/random/400x250',
    link: '/blogs/is-walls-research-free',
  },
  {
    id: 3,
    title: 'How to use WR Score?',
    image: 'https://source.unsplash.com/random/400x250',
    link: '/blogs/how-to-use-wr-score',
  },
];
