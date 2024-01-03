import type { Config } from 'tailwindcss';

const withMT = require('@material-tailwind/react/utils/withMT');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // or 'media' or 'class
  plugins: [require('@headlessui/tailwindcss')],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
      },
      colors: {
        firefly: {
          50: '#F3F4F5',
          100: '#E8EAEB',
          200: '#C4CACC',
          300: '#A1ABAE',
          400: '#5B6B71',
          500: '#142C34',
          600: '#12282F',
          700: '#0C1A1F',
          800: '#091417',
          900: '#060D10',
        },
        asparagus: {
          DEFAULT: '#60A744',
          100: '#13210e',
          200: '#26431b',
          300: '#3a6429',
          400: '#4d8536',
          500: '#60a744',
          600: '#7dbf63',
          700: '#9dcf8a',
          800: '#bedfb1',
          900: '#deefd8',
        },
        brunswick_green: {
          DEFAULT: '#344E42',
          100: '#0a0f0d',
          200: '#141f1a',
          300: '#1f2e27',
          400: '#293d34',
          500: '#344e42',
          600: '#527a67',
          700: '#75a38e',
          800: '#a3c2b4',
          900: '#d1e0d9',
        },
        nevada: {
          50: '#F8F8F8',
          100: '#F0F1F2',
          200: '#DADDDE',
          300: '#C3C8CA',
          400: '#969FA3',
          500: '#69767B',
          600: '#5F6A6F',
          700: '#3F474A',
          800: '#2F3537',
          900: '#202325',
        },
      },
    },
  },
};
export default withMT(config);
