import Header from '@/components/header/header';
import '@/styles/globals.css';
import DarkModeThemeProvider from '@/styles/theme-provider';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-tailwind/react';
import Footer from '@/components/footer/footer';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='content-language' content='en-gb'></meta>
        <meta
          name='robots'
          content='follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:standard'
        />
      </Head>
      <ThemeProvider>
        <DarkModeThemeProvider attribute='class' defaultTheme='dark'>
          <div className='bg-gray-100 dark:bg-firefly-950 min-h-screen'>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
        </DarkModeThemeProvider>
      </ThemeProvider>
    </>
  );
}
