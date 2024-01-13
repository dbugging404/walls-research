import React from 'react';

const TwitterFeed: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <h2>Latest Tweets</h2>
      <a
        className='twitter-timeline'
        href='https://twitter.com/wallsresearch'
        target='_blank'
        rel='noreferrer'
        data-height='400'
      >
        Tweets by wallsresearch
      </a>{' '}
    </div>
  );
};

export default TwitterFeed;
