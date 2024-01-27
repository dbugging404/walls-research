import React from 'react';
import Link from 'next/link';

const Disclaimer = () => {
  return (
    <div className='text-firefly-800 dark:text-firefly-200 font-lexend px-4 md:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto space-y-6 py-6 md:py-8 lg:py-10'>
        <section className='space-y-3'>
          <h2 className='text-3xl font-bold'>General Disclaimer</h2>
          <p>
            The information contained on this website and the resources
            available for download through this website are for educational and
            informational purposes only. The stocks discussed in this blog are
            the research and personal views of the authors should ‘not’ be
            considered as any kind of buy, sell or any advisory/recommendation.
            Please do your own study or take the help of your financial advisor
            before investing.
          </p>
          <p>
            The information and opinions found on this website and in related
            products and courses are written based on the best data available at
            the time of writing and are believed to be accurate according to the
            best discernment of the authors. This disclaimer informs readers
            that the views, thoughts, and opinions expressed in the article,
            blog, or texts belong solely to the author, and not necessarily to
            the author’s employer, organization, committee or other group or
            individual.
          </p>
        </section>

        <section className='space-y-3'>
          <h2 className='text-3xl font-bold'>Not Financial Advice</h2>
          <p>
            The information contained on this Website and the resources
            available for download through this website is not intended as, and
            shall not be understood or construed as, financial advice. The
            authors of this blog are not an attorney, accountant or financial
            advisor, nor they are holding out to be, and the information
            contained on this Website is not a substitute for financial advice
            from a professional who is aware of the facts and circumstances of
            your individual situation.
          </p>
          <p>
            We have done our best to ensure that the information provided on
            this Website and the resources available for download are accurate
            and provide valuable information. Regardless of anything to the
            contrary, nothing available on or through this Website should be
            understood as a recommendation that you should not consult with a
            financial professional to address your particular information. The
            Company expressly recommends that you seek advice from a
            professional.
          </p>
          <p>
            Neither the Company nor any of its employees or owners shall be held
            liable or responsible for any errors or omissions on this website or
            for any damage you may suffer as a result of failing to seek
            competent financial advice from a professional who is familiar with
            your situation.
          </p>
        </section>

        <section className='space-y-3'>
          <h2 className='text-3xl font-bold'>Not Legal Advice</h2>
          <p>
            The information contained on this Website and the resources
            available for download through this website is not intended as, and
            shall not be understood or construed as, legal advice. While we
            provide some supplemental and occasional trainings on legal topics
            taught by attorneys or legal professionals, the information
            contained on this Website is not a substitute for legal advice from
            a licensed attorney who is aware of the facts and circumstances of
            your individual situation.
          </p>
          <p>
            We have done our best to ensure that the information provided on
            this Website and the resources available for download are accurate
            and provide valuable information. Regardless of anything to the
            contrary, nothing available on or through this Website should be
            understood as a recommendation that you should not consult with an
            attorney to address your particular information. The Company
            expressly recommends that you seek advice from an attorney prior to
            taking any actions.
          </p>
          <p>
            Neither the Company nor any of its attorneys shall be held liable or
            responsible for any errors or omissions on this website or for any
            damage you may suffer as a result of failing to seek competent legal
            advice from a licensed attorney who is familiar with your situation.
          </p>
        </section>

        <section className='space-y-3'>
          <h2 className='text-3xl font-bold'>Not Tax Advice</h2>
          <p>
            The information contained on this Website and the resources
            available for download through this website is not intended as, and
            shall not be understood or construed as, tax advice. The information
            contained on this Website is not a substitute for tax advice from a
            professional who is aware of the facts and circumstances of your
            individual situation.
          </p>
          <p>
            We have done our best to ensure that the information provided on
            this Website and the resources available for download are accurate
            and provide valuable information. Regardless of anything to the
            contrary, nothing available on or through this Website should be
            understood as a recommendation that you should not consult with a
            tax professional to address your particular information. The Company
            expressly recommends that you seek advice from a professional.
          </p>
          <p>
            Neither the Company nor any of its employees or owners shall be held
            liable or responsible for any errors or omissions on this website or
            for any damage you may suffer as a result of failing to seek
            competent tax advice from a professional who is familiar with your
            situation.
          </p>
        </section>

        <section className='space-y-3'>
          <h2 className='text-3xl font-bold'>Affiliate Disclosure</h2>
          <p>
            Some of the links on this website are affiliate links, which means
            that we may earn a commission if you make a purchase using the link.
            The price you pay when you make a purchase any material will be the
            same whether you use the affiliate link or go directly to the
            vendors website using a non-affiliate link. By using the affiliate
            links, you are helping support the Walls Research (WR) group and we
            genuinely appreciate your support.
          </p>
        </section>
        <section className='space-y-3'>
          <h2 className='text-3xl font-bold'>Third-party Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your
            Personally Identifiable Information unless we provide users with
            advance notice. This does not include website hosting partners and
            other parties who assist us in operating our website, conducting our
            business, or serving our users, so long as those parties agree to
            keep this information confidential. We may also release information
            when it’s release is appropriate to comply with the law, enforce our
            site policies, or protect ours or others’ rights, property or
            safety.
          </p>
          <p>
            However, non-personally identifiable visitor information may be
            provided to other parties for marketing, advertising, or other uses.
          </p>
        </section>
        <section className='space-y-3'>
          <h2 className='text-3xl font-bold'>Third-party Links</h2>
          <p>
            Occasionally, at our discretion, we may include or offer third-party
            products or services on our website. These third-party sites have
            separate and independent privacy policies. We, therefore, have no
            responsibility or liability for the content and activities of these
            linked sites. Nonetheless, we seek to protect the integrity of our
            site and welcome any feedback about these sites.
          </p>
          <p>
            However, non-personally identifiable visitor information may be
            provided to other parties for marketing, advertising, or other uses.
          </p>
        </section>
        <section className='space-y-3'>
          <h2 className='text-3xl font-bold'>Google</h2>
          <p>
            Google’s advertising requirements can be summed up by Google’s
            Advertising Principles. They are put in place to provide a positive
            experience for users.{' '}
            <Link
              href={
                'https://support.google.com/adwordspolicy/answer/1316548?hl=en'
              }
              className='text-asparagus-500 hover:text-asparagus-600 dark:hover:text-asparagus-400'
            >
              https://support.google.com/adwordspolicy/answer/1316548?hl=en
            </Link>
          </p>
          <p>
            However, non-personally identifiable visitor information may be
            provided to other parties for marketing, advertising, or other uses.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;
