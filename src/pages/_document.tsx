import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta title="coupang eats" />
        <meta
          name="description"
          content="coupang eats"
        />
        <meta name="viewport" content="viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
