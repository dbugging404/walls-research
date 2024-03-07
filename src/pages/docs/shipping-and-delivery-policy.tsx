import React from 'react';

const Shipping = () => {
  return (
    <div className='px-4 md:px-6 lg:px-10 dark:text-firefly-100 text-firefly-900'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl font-lexend py-4 md:py-6 lg:py-10 text-center font-bold'>
          Shipping and Delivery Policy
        </h1>
        <ul className='list-disc list-outside ml-4 font-lexend'>
          <li>
            <h3 className='text-xl py-3 underline font-semibold'>
              Digital Product Delivery:
            </h3>
            <p>
              Walls Research App is a digital product, and no physical shipping
              is involved. Upon successful subscription and payment, users will
              gain immediate access to the app and its features through their
              registered account.
            </p>
          </li>
          <li>
            <h3 className='text-xl py-3 underline font-semibold'>
              Subscription Activation:
            </h3>
            <p>
              Once the subscription payment is confirmed, users will receive an
              email confirmation containing details about their subscription,
              including login credentials and access instructions. Users can log
              in to the Walls Research App and start using the services
              immediately.
            </p>
          </li>
          <li>
            <h3 className='text-xl py-3 underline font-semibold'>
              Technical Support:
            </h3>
            <p>
              In case users encounter any issues with accessing or using the
              Walls Research App after subscription, our customer support team
              is available to provide assistance. Users can contact support at{' '}
              <a
                href='mailto:support@wallsresearch.com'
                className='text-asparagus-500 underline hover:text-asparagus-400'
              >
                support@wallsresearch.com
              </a>{' '}
              for prompt resolution.
            </p>
          </li>
          <li>
            <h3 className='text-xl py-3 underline font-semibold'>
              Updates and Enhancements:
            </h3>
            <p>
              Walls Research continuously updates and enhances its app to
              provide users with the latest features and improvements. Users
              will receive notifications within the app about any updates or
              changes to the service.
            </p>
          </li>
          <li>
            <h3 className='text-xl py-3 underline font-semibold'>
              Communication about Service Interruptions:
            </h3>
            <p>
              In the rare event of scheduled maintenance or unexpected service
              interruptions, Walls Research will communicate such occurrences to
              users through the app, website, or via email. Efforts will be made
              to minimize disruptions and provide advance notice when possible.
            </p>
          </li>
          <li>
            <h3 className='text-xl py-3 underline font-semibold'>
              Privacy and Security:
            </h3>
            <p>
              Walls Research prioritizes user privacy and employs
              industry-standard security measures to safeguard user data. All
              transactions and communication between users and the app are
              encrypted to ensure the confidentiality and integrity of
              information.
            </p>
          </li>
          <li>
            <h3 className='text-xl py-3 underline font-semibold'>
              Contact Information:
            </h3>
            <p>
              For any shipping and delivery-related inquiries or assistance,
              users can contact our customer support team at{' '}
              <a
                href='mailto:support@wallsresearch.com'
                className='text-asparagus-500 underline hover:text-asparagus-400'
              >
                support@wallsresearch.com
              </a>{' '}
              We are committed to providing timely and helpful responses to
              address user concerns.
            </p>
          </li>
          <li>
            <h3 className='text-xl py-3 underline font-semibold'>
              Delivery Timeframe for Additional Services:
            </h3>
            <p>
              If Walls Research offers additional services or products that
              involve physical delivery (e.g., educational materials,
              merchandise), the estimated delivery timeframe will be
              communicated to users during the purchase process. Shipping fees,
              delivery times, and any applicable terms and conditions will be
              clearly stated.
            </p>
          </li>
        </ul>
        <div className='py-4 font-lexend'>
          <h3 className='text-2xl font-bold py-4 md:py-6 lg:py-10 underline'>
            Policy Changes:
          </h3>
          <p>
            Walls Research reserves the right to update or modify this
            cancellation and refund policy at any time without prior notice.
            Users are encouraged to review this policy periodically.
          </p>
        </div>
        <div className='py-4 font-lexend underline font-bold'>
          Last Updated: 07/March/2024
        </div>
      </div>
    </div>
  );
};

export default Shipping;
