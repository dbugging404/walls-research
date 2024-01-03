/* eslint-disable @next/next/no-img-element */
import { CgProfile } from 'react-icons/cg';
const posts = [
  {
    title: 'Lorem ipsum dolor sit.',
    href: '#',
    category: {
      name: 'Article',
      href: '#',
      color: 'bg-indigo-100 text-indigo-800',
    },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'John Doe',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '6 min',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    href: '#',
    category: { name: 'Video', href: '#', color: 'bg-pink-100 text-pink-800' },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Jane Doe',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '4 min',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    href: '#',
    category: {
      name: 'Case Study',
      href: '#',
      color: 'bg-green-100 text-green-800',
    },
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Bilbo Baggins',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '11 min',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div className='bg-firefly-50 dark:bg-firefly-500 min-h-screen pt-16 pb-20 px-4 sm:px-6 lg:py-32 lg:px-8'>
      <div className='relative max-w-lg mx-auto divide-y-2 divide-firefly-200 dark:divide-firefly-400 lg:max-w-7xl'>
        <div>
          <h2 className='text-3xl tracking-tight font-extrabold dark:text-firefly-50 text-firefly-800 sm:text-4xl font-lexend'>
            Recent blogs
          </h2>
          <p className='mt-3 text-xl dark:text-firefly-200 text-firefly-400 sm:mt-4 font-inter'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            perferendis, blanditiis soluta porro ipsam quam aliquam!
          </p>
        </div>
        <div className='mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12'>
          {posts.map((post) => (
            <div key={post.title}>
              <div>
                <a href={post.category.href} className='inline-block'>
                  <span
                    className={classNames(
                      post.category.color,
                      'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium font-lexend'
                    )}
                  >
                    {post.category.name}
                  </span>
                </a>
              </div>
              <a href={post.href} className='block mt-4'>
                <p className='text-xl font-semibold text-firefly-800 dark:text-firefly-50 font-lexend'>
                  {post.title}
                </p>
                <p className='mt-3 text-base dark:text-firefly-300 text-firefly-400 font-inter'>
                  {post.description}
                </p>
              </a>
              <div className='mt-6 flex items-center'>
                <div className='flex-shrink-0'>
                  <a href={post.author.href}>
                    <span className='sr-only'>{post.author.name}</span>
                    <CgProfile className='h-10 w-10 rounded-full text-firefly-300' />
                  </a>
                </div>
                <div className='ml-3'>
                  <p className='text-sm font-medium text-firefly-800 dark:text-firefly-200 font-lexend'>
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <div className='flex space-x-1 text-sm dark:text-firefly-300 text-firefly-400 font-lexend'>
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden='true'>&middot;</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
