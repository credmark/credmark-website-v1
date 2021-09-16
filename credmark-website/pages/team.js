import Head from 'next/head'
import Nav from '../components/layout/nav'
import Team from '../components/pages/team'

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>CREDMARK</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Nav
          page={<Team />} />
      </div>
    </>
  )
}