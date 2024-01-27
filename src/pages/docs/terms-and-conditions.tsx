import Link from 'next/link';
import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className='text-firefly-800 dark:text-firefly-200 font-lexend px-4 md:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 py-6 md:py-8 lg:py-10'>
      <h2 className='text-3xl font-bold'>
        Terms and Conditions for Walls Research
      </h2>

      <p>
        These Terms and Conditions govern your access to and use of the Walls
        Research app/website (hereinafter referred to as &quot;the
        Service&quot;). Please read these Terms carefully and completely before
        using the Service. By using the Service, you agree to be bound by these
        Terms. If you do not agree to all the Terms, you may not use the
        Service.
      </p>

      <h3 className='text-3xl font-bold'>Privacy Policy</h3>

      <p>
        We are committed to protecting your privacy. Please refer to our Privacy
        Policy for information on how we collect, use, and disclose your
        personal information. The Privacy Policy is incorporated into and made a
        part of these Terms.
      </p>

      <h3 className='text-3xl font-bold'>Access and Use</h3>

      <ul className='list-disc list-outside ml-5 space-y-2'>
        <li>
          You may visit our website anonymously, without providing any personal
          information.
        </li>
        <li>
          Our Privacy Policy link will be clearly visible on our homepage and
          the first significant page after entering the website.
        </li>
        <li>
          We will notify you of any changes to our Privacy Policy on our Privacy
          Policy Page.
        </li>
      </ul>

      <h3 className='text-3xl font-bold'>Data Ownership and Sharing</h3>

      <ul className='list-disc list-outside ml-5 space-y-2'>
        <li>
          You retain all ownership rights to your personal information that you
          submit through the Service.
        </li>
        <li>
          We will not share your personal information with third parties for
          their own marketing purposes without your consent.
        </li>
        <li>
          We may share your personal information with third-party service
          providers who help us operate the Service, such as data analysis
          providers and email service providers. We will only share your
          information with these third parties in accordance with our Privacy
          Policy and for the purposes of operating the Service.
        </li>
      </ul>

      <h3 className='text-3xl font-bold'>Do Not Track</h3>

      <p>
        We honor Do Not Track signals and Do Not Track, plant cookies, or use
        advertising when a Do Not Track (DNT) browser mechanism is in place.
      </p>

      <h3 className='text-3xl font-bold'>Third-Party Behavioral Tracking</h3>

      <p>
        We do not allow third-party behavioral tracking on our website or app.
      </p>

      <h3 className='text-3xl font-bold'>Fair Information Practices</h3>

      <p>
        We are committed to adhering to the Fair Information Practices
        Principles. In the event of a data breach, we will notify you:
      </p>
      <ul className='list-disc list-outside ml-5 space-y-2'>
        <li>Via email within 7 business days.</li>
        <li>Via in-site notification within 7 business days.</li>
      </ul>

      <h3 className='text-3xl font-bold'>Email Communications</h3>

      <p className='font-semibold text-xl'>We use your email address to:</p>
      <ul className='list-disc list-outside ml-5 space-y-2'>
        <li>
          Send information, respond to inquiries, and/or other requests or
          questions.
        </li>
        <li>
          Process orders and send information and updates pertaining to orders.
        </li>
        <li>
          Send you additional information related to your product and/or
          service.
        </li>
        <li>
          Market to our mailing list or continue to send emails to our clients
          after the original transaction has occurred.
        </li>
      </ul>
      <p className='font-semibold text-xl'>
        We will comply with the following email communication practices:
      </p>
      <ul className='list-disc list-outside ml-5 space-y-2'>
        <li>Not use false or misleading subjects or email addresses.</li>
        <li>
          Identify the message as an advertisement in some reasonable way.
        </li>
        <li>
          Include the physical address of our business or site headquarters.
        </li>
        <li>
          Monitor third-party email marketing services for compliance, if one is
          used.
        </li>
        <li>Honor opt-out/unsubscribe requests quickly.</li>
        <li>
          Allow users to unsubscribe by using the link at the bottom of each
          email.
        </li>
      </ul>

      <h3 className='text-3xl font-bold'>Contact Us</h3>

      <p>
        If you have any questions or concerns about these Terms and Conditions,
        please contact us using the following information:
      </p>
      <ul className='list-disc list-outside ml-5 space-y-2'>
        <li>
          Email:{' '}
          <Link
            href={'mailto:admin@wallsresearch.in'}
            className='text-asparagus-500 hover:text-asparagus-600 dark:hover:text-asparagus-400'
          >
            admin@wallsresearch.in
          </Link>
        </li>
        <li>
          Website:{' '}
          <Link
            href={'/contact'}
            className='text-asparagus-500 hover:text-asparagus-600 dark:hover:text-asparagus-400'
          >
            https://wallsresearch.com/contact
          </Link>
        </li>
      </ul>

      <p>
        These Terms and Conditions were last updated on [date]. We may update
        these Terms from time to time. We will notify you of any changes by
        posting the new Terms on this page.
      </p>
    </div>
  );
}
