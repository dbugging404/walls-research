/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Team = () => {
  return (
    <div>
      <div className='py-36 bg-firefly-50 dark:bg-firefly-500'>
        <div className='container mx-auto px-6 md:px-12 xl:px-32 font-lexend'>
          <div className='mb-16 text-center'>
            <h2 className='mb-4 text-center text-2xl  text-firefly-800 dark:text-firefly-100 font-bold md:text-4xl font-lexend'>
              Walls Research leadership
            </h2>
            <p className='text-firefly-600 dark:text-firefly-300 lg:w-8/12 lg:mx-auto'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              laboriosam saepe harum.
            </p>
          </div>
          <div className='grid gap-12 items-center md:grid-cols-3'>
            <div className='space-y-4 text-center'>
              <img
                className='w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64'
                src='https://source.unsplash.com/random/780x400'
                alt='woman'
                loading='lazy'
                width='640'
                height='805'
              />
              <div>
                <h4 className='text-2xl'>Lorem, ipsum.</h4>
                <span className='block text-sm text-firefly-600 dark:text-firefly-300'>
                  CEO-Founder
                </span>
              </div>
            </div>
            <div className='space-y-4 text-center'>
              <img
                className='w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80'
                src='https://source.unsplash.com/random/780x401'
                alt='man'
                loading='lazy'
                width='1000'
                height='667'
              />
              <div>
                <h4 className='text-2xl'>Lorem, ipsum.</h4>
                <span className='block text-sm text-firefly-600 dark:text-firefly-300'>
                  Chief Technical Officer
                </span>
              </div>
            </div>
            <div className='space-y-4 text-center'>
              <img
                className='w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64'
                src='https://source.unsplash.com/random/780x399'
                alt='woman'
                loading='lazy'
                width='1000'
                height='667'
              />
              <div>
                <h4 className='text-2xl'>Lorem, ipsum.</h4>
                <span className='block text-sm text-firefly-600 dark:text-firefly-300'>
                  Chief Operations Officer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
