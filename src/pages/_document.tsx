import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <script
        async
        src='https://platform.twitter.com/widgets.js'
        charSet='utf-8'
      ></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
