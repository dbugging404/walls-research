import React from 'react';
import Link from 'next/link';
import { gql } from '@apollo/client';
import Head from 'next/head';
import hygraphClient from '@/lib/_client';
import Button from '@/components/button';
import Image from 'next/image';
import WallsResearchLogo from '@/assets/logos/walls-research.svg';

export const getStaticProps = async ({ params }) => {
  const { data } = await hygraphClient.query({
    query: gql`
      query ($slug: String!) {
        career(where: { slug: $slug }) {
          position
          description
          jobDescription
          qualification
          experience
          description
          location
          link
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });

  return {
    props: {
      career: data.career,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { data } = await hygraphClient.query({
    query: gql`
      {
        careers {
          position
          slug
        }
      }
    `,
  });

  return {
    paths: data.careers.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

interface Career {
  id: number;
  position: string;
  location: string;
  qualification: string;
  experience: string;
  slug: string;
  description: string;
  jobDescription: string;
  link: string;
}

const CareerPage = ({ career }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{`${career?.position} | Walls Research`}</title>
        <meta name='title' content={`${career?.position} | Walls Research`} />
        <meta
          name='description'
          content='Extensive Knowledge Meets Intelligent Algorithmic Insights for Unmatched Wealth Growth.'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content={`${career?.position} | Walls Research`}
        />
        <meta property='og:site_name' content='Walls Research' />
        <meta property='og:url' content='https://wallsresearch.com' />
        <meta
          property='og:description'
          content='Extensive Knowledge Meets Intelligent Algorithmic Insights for Unmatched Wealth Growth.'
        />
        <meta property='og:type' content='website' />
        {/* <meta property='og:image' content={SeoImage} /> */}

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@wallsresearch' />
        <meta
          name='twitter:title'
          content={`${career?.position} | Walls Research`}
        />
        <meta
          name='twitter:description'
          content='Extensive Knowledge Meets Intelligent Algorithmic Insights for Unmatched Wealth Growth.'
        />
        {/* <meta name='twitter:image' content={SeoImage} /> */}
      </Head>
      {career && (
        <div className='container min-h-screen mx-auto mt-5 py-16 px-3'>
          <div className='flex flex-col items-center justify-center font-lexend space-y-2 text-firefly-800 dark:text-firefly-200'>
            <Image
              src={WallsResearchLogo}
              alt='Walls Research Logo'
              className='w-28 h-28 md:w-36 md:h-36 bg-firefly-950 rounded-lg'
            />
            <h1 className='max-w-md text-xl text-center'>{career.position}</h1>
            <p className=''>{career.location}</p>
            <p className=''>{career.qualification}</p>
            <p className=''>{career.experience}</p>
            <p className='max-w-3xl pb-3'>{career.description}</p>
            <p className='max-w-3xl prose text-firefly-800 dark:text-firefly-200'>
              {career.jobDescription}
            </p>

            <div className='pt-6 flex flex-col mx-auto'>
              <Link
                href={`mailto:${career.link}?subject=Application for ${career.position}`}
                target='_blank'
                rel='noopener noreferrer'
                className='mx-auto'
              >
                <Button> Apply Now</Button>
              </Link>
              <div className='text-xs pt-2'>
                To apply, please click apply now and send us your resume through
                the email link provided.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPage;
