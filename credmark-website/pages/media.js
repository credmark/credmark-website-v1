import Head from 'next/head'
import Media from '../components/pages/media'
import Nav from '../components/layout/nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>CREDMARK</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
      <Nav
                page={<Media />} />
      </div>
    </>
  )
}