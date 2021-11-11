import Head from 'next/head'
import Nav from '../components/layout/nav'
import Team from '../components/pages/team'

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Team | CREDMARK</title>
        <meta content="Team | Credmark" property="og:title" key="og:title" />
        <meta name="description" content="Meet the team behind Credmark and our advisors." />
        <meta property="og:title" content="Team | Credmark" key="ogtitle" />
         <meta property="og:description" content="Meet the team behind Credmark and our advisors." key="ogdesc" />
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
          page={<Team />} />
      </div>
    </>
  )
}