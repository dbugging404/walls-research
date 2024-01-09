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
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#1e1e1e',
        },
        asparagus: {
          DEFAULT: '#66bb6a',
          '50': '#f3faf3',
          '100': '#e3f5e3',
          '200': '#c8eac9',
          '300': '#9dd89f',
          '400': '#66bb6a',
          '500': '#46a14b',
          '600': '#358439',
          '700': '#1B5E20',
          '800': '#28532a',
          '900': '#224525',
          '950': '#0e2511',
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
