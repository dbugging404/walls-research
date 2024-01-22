import React from 'react';
import Link from 'next/link';
import { gql } from '@apollo/client';
import Head from 'next/head';
import hygraphClient from '@/lib/_client';
import Button from '@/components/button';

interface careersProps {
  careers: careersProps[];
  id: string;
  position: string;
  location: string;
  qualification: string;
  experience: string;
  slug: string;
  description: string;
  jobDescription: string;
  link: string;
  isActive: boolean;
}

const IndexPage = ({ careers }: careersProps) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Careers | Walls Research</title>
        <meta name='title' content='Careers | Walls Research' />
        <meta
          name='description'
          content='Extensive Knowledge Meets Intelligent Algorithmic Insights for Unmatched Wealth Growth.'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Career | Walls Research' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Extensive Knowledge Meets Intelligent Algorithmic Insights for Unmatched Wealth Growth.'
        />
        <meta property='og:type' content='website' />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@wallsresearch' />
        <meta name='twitter:title' content='Career | Walls Research' />
        <meta
          name='twitter:description'
          content='Extensive Knowledge Meets Intelligent Algorithmic Insights for Unmatched Wealth Growth.'
        />
      </Head>

      <div className='max-w-7xl mx-auto font-lexend min-h-screen'>
        <div className='px-2 text-gray-800 dark:text-gray-200'>
          <div className='text-center text-2xl sm:text-4xl mb-4  pt-12 font-semibold '>
            Careers at Walls Research
          </div>

          <div className='text-center text-base mb-4 font-semibold '>
            We are looking for passionate people to join our team and help us in
            our mission to make investing simple, transparent and accessible to
            all.
          </div>
        </div>
        <div className='text-center text-3xl py-8 font-semibold'>
          Current Opportunities
        </div>
        <div className='container mb-2 flex mx-auto w-full items-center justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 mt-6 px-3'>
            {careers &&
              careers?.map((items) => (
                <Link
                  href={`career/${items?.slug}`}
                  passHref
                  key={items?.id}
                  className='group border border-firefly-200 dark:border-firefly-700 p-4 rounded-md shadow-md hover:shadow-xl dark:shadow-firefly-900/20 dark:hover:dark:shadow-firefly-900/20 transition duration-300 ease-in-out flex items-start justify-between flex-col'
                >
                  <div className=''>
                    <div className='flex flex-col justify-between p-4'>
                      <h5 className='text-xl font-bold'>{items?.position}</h5>
                      <div className='text-gray-800 dark:text-gray-200 gap-5'>
                        {items.location && (
                          <div className='font-semibold mt-4'>
                            Location: {items?.location}
                          </div>
                        )}
                        {items.experience && (
                          <div className='font-semibold mt-3'>
                            Experience: {items?.experience}
                          </div>
                        )}
                        {items.qualification && (
                          <div className='font-semibold mt-3'>
                            Qualification: {items?.qualification}
                          </div>
                        )}
                      </div>

                      <Button additionalClasses='mt-5 disabled w-32'>
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const getStaticProps = async () => {
  const { data } = await hygraphClient.query({
    query: gql`
      query {
        careers(orderBy: publishedAt_DESC) {
          id
          position
          location
          qualification
          experience
          slug
          description
          jobDescription
          link
          isActive
        }
      }
    `,
  });

  return {
    props: {
      careers: data.careers,
    },
    revalidate: 180,
  };
};
