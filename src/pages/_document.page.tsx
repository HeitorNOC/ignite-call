import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@ignite-ui/react'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      ></link>
      <style id="stiches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
