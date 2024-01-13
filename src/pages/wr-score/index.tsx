import React from 'react';

const IndexPage = () => {
  return (
    <div className='bg-white dark:bg-firefly-950'>
      <div className='max-w-7xl mx-auto px-3'>
        <div className='py-24'>
          <h1 className='font-lexend text-4xl lg:text-5xl py-10 font-bold'>
            WR Score
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='flex flex-col items-start justify-center font-lexend px-3 space-y-4 dark:text-firefly-100 text-firefly-800'>
              <h2 className='text-3xl font-bold bg-gradient-to-b from-asparagus-500 to-asparagus-700 rounded-full px-5 py-1.5'>
                How it works:
              </h2>
              <div className='text-lg underline'>Quantitative Analysis:</div>
              <ul className='space-y-2 list-outside list-disc font-base'>
                <li>
                  Dive deep into a company&apos;s financial health through a
                  comprehensive analysis of its Income Statement, Balance Sheet,
                  and Cashflow Statement.
                </li>
                <li>
                  Our platform assigns a score between 0 and 5, providing a
                  clear snapshot of the company&apos;s performance.
                </li>
              </ul>
              <div className='text-lg underline'>Holistic Evaluation:</div>
              <ul className='space-y-2 list-outside list-disc font-base'>
                <li>
                  Beyond the numbers, we objectively assess company strategy,
                  financial management, and operations.
                </li>
                <li>
                  Scores ranging from 0 to 5 offer a nuanced understanding of
                  how the company is positioned in key areas.
                </li>
              </ul>
              <div className='text-lg underline'>Global Reach:</div>
              <ul className='space-y-2 list-outside list-disc font-base'>
                <li>
                  ur insights are not confined to a specific market. Extend your
                  investment horizons with analysis that transcends global stock
                  exchanges.
                </li>
              </ul>
              <h2 className='text-3xl font-bold bg-gradient-to-b from-asparagus-500 to-asparagus-700 rounded-full px-5 py-1.5'>
                The Power of Insights:
              </h2>
              <div className='text-lg underline'>
                Clarity at Your Fingertips:
              </div>
              <ul className='space-y-2 list-outside list-disc font-base'>
                <li>
                  Gain a deep understanding of a company&apos;s business
                  performance without drowning in complex data. Our platform
                  translates intricate financial details into user-friendly
                  scores.
                </li>
              </ul>
              <div className='text-lg underline'>Informed Decision-Making:</div>
              <ul className='space-y-2 list-outside list-disc font-base'>
                <li>
                  Empower your investment decisions with insights that matter.
                  Our platform equips you with the knowledge to make strategic
                  choices in a rapidly changing market.
                </li>
              </ul>
              <div className='text-lg underline'>
                Uncomplicated Understanding:
              </div>
              <ul className='space-y-2 list-outside list-disc font-base'>
                <li>
                  No finance degree required. Our platform presents insights in
                  a way that everyone can comprehend, demystifying the
                  intricacies of company performance.
                </li>
              </ul>
              <h2 className='text-3xl font-bold bg-gradient-to-b from-asparagus-500 to-asparagus-700 rounded-full px-5 py-1.5'>
                Why Choose WR:
              </h2>
              <div className='text-lg underline'>Simplicity Redefined:</div>
              <ul className='space-y-2 list-outside list-disc font-base'>
                <li>
                  We believe in cutting through the noise. Our platform is
                  designed to simplify the investment process, ensuring that you
                  focus on what truly matters.
                </li>
              </ul>
              <div className='text-lg underline'>Objective Analysis:</div>
              <ul className='space-y-2 list-outside list-disc font-base'>
                <li>
                  Say goodbye to biased information. Our scores are derived from
                  objective assessments, providing you with a clear and unbiased
                  view of each company.
                </li>
              </ul>
              <div className='text-lg underline'>Invest with Confidence:</div>
              <ul className='space-y-2 list-outside list-disc font-base'>
                <li>
                  Whether you&apos;re a seasoned investor or just starting, our
                  platform gives you the confidence to make decisions backed by
                  robust analysis.
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
