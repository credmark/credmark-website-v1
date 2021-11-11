import Head from 'next/head'
import Nav from '../components/layout/nav'
import Whitepaper from '../components/pages/whitepaper'

export default function WhitepaperPage() {
  return (
    <>
      <Head>
        <title>Whitepaper | CREDMARK</title>
        <meta content="Whitepaper | Credmark" property="og:title" key="og:title" />
        <meta name="description" content="Our White Paper offers an in-depth look into the Credmark platform - how we generate high integrity data and how our models are built and delivered." />
        <meta property="og:title" content="Whitepaper | Credmark" key="ogtitle" />
        <meta property="og:description" content="Our White Paper offers an in-depth look into the Credmark platform - how we generate high integrity data and how our models are built and delivered." key="ogdesc" />
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
          page={<Whitepaper />} />
      </div>
    </>
  )
}