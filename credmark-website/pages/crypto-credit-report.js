import Head from 'next/head'
import CryptoReport from '../components/pages/crypto'
import Nav from '../components/layout/nav'

export default function CryptoReportPage() {
  return (
    <>
      <Head>
        <title>Media and Crypto Reports | CREDMARK</title>
        <meta content="Media and Crypto Reports | Credmark" property="og:title" key="og:title" />
        <meta name="description" content="Check out our latest press articles and crypto credit reports." />
        <meta property="og:title" content="Media and Crypto Reports | Credmark" key="ogtitle" />
+       <meta property="og:description" content="Check out our latest press articles and crypto credit reports." key="ogdesc" />
        <link rel="icon" href="/favicon.ico" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </Head>

      <div className="nav">
      <Nav
                page={<CryptoReport />} />
      </div>
    </>
  )
}
