import Head from 'next/head'
import Homepage from '../components/pages/homepage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Homepage />
      </div>
    </>
  )
}
