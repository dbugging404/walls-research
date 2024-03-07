import React from 'react';

const RefundPolity = () => {
  return (
    <div className='px-4 md:px-6 lg:px-10 dark:text-firefly-100 text-firefly-900'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl font-lexend py-4 md:py-6 lg:py-10 text-center font-bold'>
          Cancellation and Refund Policy
        </h1>
        <h2 className='text-2xl font-lexend py-4 md:py-6 lg:py-10 font-bold'>
          Cancellation Policy
        </h2>
        <ul className='list-outside list-disc ml-4 font-lexend'>
          <li>
            <h3 className='text-xl py-3 underline'>
              Subscription Cancellation
            </h3>
            <p>
              Customers have the right to cancel their Walls Research App
              subscription at any time. To initiate the cancellation process,
              users can log in to their account on the website or contact our
              customer support team. Cancellations will be effective
              immediately, and users will have access to the app until the end
              of the current billing cycle.
            </p>
          </li>
          <li>
            <h3 className='text-xl py-3 underline'>
              Refund Eligibility for Subscription Cancellations:
            </h3>
            <p>
              Refunds are not provided for the remaining period of a
              subscription cycle after cancellation. However, customers may
              continue to use the service until the end of the paid subscription
              period.
            </p>
          </li>
        </ul>
        <h2 className='text-2xl font-lexend py-4 md:py-6 lg:py-10 font-bold'>
          Refund Policy
        </h2>
        <ul className='list-outside list-disc ml-4 font-lexend'>
          <li>
            <h3 className='text-xl py-3 underline'>Refund Requests:</h3>
            <p>
              Refund requests can be made within 30 days of the initial
              subscription purchase. To request a refund, users must contact our
              customer support team and provide the necessary details, including
              the reason for the refund request.
            </p>
          </li>
          <li>
            <h3 className='text-xl py-3 underline'>Refund Eligibility:</h3>
            Refunds will be considered under the following circumstances:
            <ul className='space-y-3 py-3 list-disc ml-4'>
              <li>
                <strong>Technical Issues:</strong> If the Walls Research App or
                website experiences technical difficulties that significantly
                hinder the user experience and are not resolved within a
                reasonable timeframe.
              </li>
              <li>
                <strong>Unauthorized Charges:</strong> If a user identifies
                unauthorized charges on their account, they should promptly
                notify Walls Research for investigation.
              </li>
            </ul>
          </li>
          <li>
            <h3 className='text-xl py-3 underline'>
              Non-Refundable Scenarios:
            </h3>
            Refunds will not be provided in the following situations:
            <ul className='space-y-3 py-3 list-disc ml-4'>
              <li>
                User dissatisfaction with the content or features of the app.
              </li>
              <li>Failure to cancel a subscription before the renewal date.</li>
              <li>
                Violation of the Walls Research App&apos;s terms of service.
              </li>
            </ul>
          </li>
          <li>
            <h3 className='text-xl py-3 underline'>Refund Processing:</h3>
            <p>
              Once a refund request is approved, the refund will be processed
              using the original payment method. The time required for the
              refund to reflect in the user&apos;s account may vary based on the
              payment provider&apos;s policies.
            </p>
          </li>
          <li>
            <h3 className='text-xl py-3 underline'>Refund Processing:</h3>
            <p>
              Users can submit refund requests by contacting our customer
              support team via email at{' '}
              <a
                href='mailto:support@wallsresearch.com'
                className='text-asparagus-500 underline hover:text-asparagus-400'
              >
                support@wallsresearch.com
              </a>{' '}
              Please include the order number, contact details, and a detailed
              explanation of the reason for the refund request.
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

export default RefundPolity;
