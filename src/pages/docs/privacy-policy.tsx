import Link from 'next/link';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className='text-firefly-800 dark:text-firefly-200 font-lexend px-4 md:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 py-6 md:py-8 lg:py-10'>
      <h2 className='text-3xl font-bold'>Privacy Policy</h2>

      {/* Introduction - Briefly introduce your company and website/app. */}
      <p>
        Walls Research (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
        operates the wallsresearch.com / wallsresearch.ai website. This page
        informs you of our policies regarding the collection, use, and
        disclosure of personal data when you use our Service and the choices you
        have associated with that data.
      </p>

      {/* Information We Collect - Specify the types of personal information you collect. */}
      <h3 className='text-3xl font-bold'>Information We Collect</h3>
      <p>
        We may collect several different types of information for various
        purposes to improve and provide the Services to you.
      </p>
      <ul className='list-disc list-outside ml-5 space-y-2'>
        <li>
          <b>Personally Identifiable Information (PII):</b> This may include
          your name, email address, postal address, phone number, etc.
        </li>
        <li>
          <b>Usage Data:</b> This may include information about how you access
          and use the Service, such as the pages you visit, the links you click,
          and the features you use.
        </li>
        <li>
          <b>Device Data:</b> This may include information about the device you
          use to access the Service, such as the type of device, operating
          system, IP address, and unique identifiers.
        </li>
      </ul>

      {/* Use of Information - Explain how you use the collected information. */}
      <h3 className='text-3xl font-bold'>Use of Information</h3>
      <p>We may use the information we collect for various purposes:</p>
      <ul className='list-disc list-outside ml-5 space-y-2'>
        <li>To provide and operate the Service</li>
        <li>
          To send you important information about the Service and changes to our
          terms and conditions
        </li>
        <li>To personalize your experience</li>
        <li>To respond to your inquiries and requests</li>
        <li>For statistical analysis and improving the Service</li>
        <li>For marketing and promotional purposes (with your consent)</li>
      </ul>

      {/* Sharing Information - Describe when and with whom you share user information. */}
      <h3 className='text-3xl font-bold'>Sharing of Information</h3>
      <p>
        We may share your information with third-party service providers who
        help us operate the Service, such as web hosting providers, data
        analysis providers, and email service providers. We will only share your
        information with these third parties in accordance with this Privacy
        Policy and for the purposes of operating the Service.
      </p>
      <p>
        We may also disclose your information if required to do so by law or if
        we believe that it is necessary to protect the rights, property, or
        safety of ourselves, our users, or the public.
      </p>

      {/* Data Retention - Explain how long you retain user data and your deletion policy. */}
      <h3 className='text-3xl font-bold'>Data Retention</h3>
      <p>
        We will retain your information for as long as necessary to provide you
        with the Service and fulfill the purposes described in this Privacy
        Policy. We will then delete your information unless we are required by
        law to retain it for a longer period.
      </p>

      {/* Children's Privacy - If your website/app targets children, add a section on child data protection. */}
      <h3 className='text-3xl font-bold'>Children&apos;s Privacy</h3>
      <p>
        Our Service is not intended for children under the age of 13. We do not
        knowingly collect personal information from children under 13. If you
        are a parent or guardian and you are aware that your child has provided
        us with personal information, please contact us.
      </p>

      {/* Your Rights - List user rights regarding their data, such as access, correction, and deletion. */}
      <h3 className='text-3xl font-bold'>Your Rights</h3>
      <p>
        You have the right to access, correct, or delete your personal
        information at any time. You can also opt out of receiving marketing
        communications from us. To exercise any of these rights, please contact
        us through the methods provided at the end of this Policy.
      </p>
      {/* Changes to this policies */}
      <h3 className='text-3xl font-bold'>Changes to this Policy</h3>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on our website. You are
        advised to review this Privacy Policy periodically for any changes
      </p>

      {/* Contact Us - Provide contact information for privacy-related concerns. */}
      <h3 className='text-3xl font-bold'>Contact Us</h3>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at:{' '}
        <Link
          href={'mailto:admin@wallsresearch.in'}
          className='text-asparagus-500 hover:text-asparagus-600 dark:hover:text-asparagus-400'
        >
          admin@wallsresearch.in
        </Link>
      </p>
    </div>
  );
}
