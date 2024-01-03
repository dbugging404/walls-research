import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

const Faq = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <div className='bg-firefly-100 dark:bg-firefly-600 px-3 py-6 md:py-8 lg:py-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='max-w-4xl mx-auto'>
          <h3 className='text-3xl lg:text-4xl font-lexend py-6 lg:py-10 text-center font-bold text-firefly-800 dark:text-firefly-100'>
            Frequently Asked Questions
          </h3>
          {data.map((item) => (
            <Accordion
              open={open === item.id}
              key={item.id}
              placeholder={''}
              className='mb-2 rounded-lg border border-gray-400 dark:border-gray-600 px-4'
            >
              <AccordionHeader
                placeholder={''}
                onClick={() => handleOpen(item.id)}
                className={`border-b-0 transition-colors ${
                  open === item.id
                    ? 'font-lexend font-medium text-asparagus-400 dark:text-asparagus-500 hover:text-asparagus-500 dark:hover:text-asparagus-400'
                    : 'font-lexend font-light text-firefly-800 dark:text-firefly-100 hover:text-firefly-400 dark:hover:text-firefly-300'
                }`}
              >
                {item.question}
              </AccordionHeader>
              <AccordionBody className='pt-0 text-base font-inter font-normal text-firefly-800 dark:text-firefly-200'>
                {item.answer}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

const data = [
  {
    id: 1,
    question:
      'What is Walls Research App, and how can it benefit me in the stock market?',
    answer:
      'Walls Research App is a comprehensive stock market research tool designed to empower investors with valuable insights and data-driven analysis. It provides real-time information, in-depth research reports, and advanced tools to help you make informed decisions and enhance your overall trading experience.',
  },
  {
    id: 2,
    question:
      'What sets Walls Research App apart from other stock market tools?',
    answer:
      'Walls Research App stands out for its user-friendly interface, cutting-edge research capabilities, and a wide range of features. Our tool offers a unique combination of advanced analytics, market trends, and personalized insights, making it a standout choice for both beginners and seasoned investors.',
  },
  {
    id: 3,
    question:
      'How can I access Walls Research App, and is it available on different platforms?',
    answer:
      "You can access Walls Research App through our web platform and mobile applications, ensuring you have the flexibility to stay informed and make investment decisions whether you're at your desk or on the go. The app is available for both iOS and Android devices.",
  },
  {
    id: 4,
    question:
      'What kind of market data and research reports does Walls Research App provide?',
    answer:
      'Walls Research App provides real-time market data, historical trends, and comprehensive research reports on individual stocks, sectors, and market indices. Our goal is to equip you with the information needed to make strategic investment decisions.',
  },
  {
    id: 5,
    question:
      'Is Walls Research App suitable for beginners, or is it more geared towards experienced investors?',
    answer:
      'Walls Research App caters to investors of all levels, from beginners to seasoned professionals. The platform is designed to be intuitive for newcomers while offering advanced features and in-depth analysis tools that experienced investors can leverage to enhance their strategies.',
  },
  {
    id: 6,
    question:
      'Can I use Walls Research App for technical analysis and charting?',
    answer:
      'Absolutely! Walls Research App includes advanced charting tools and technical analysis features. You can customize charts, analyze price patterns, and utilize various technical indicators to make well-informed decisions based on market trends.',
  },
];
