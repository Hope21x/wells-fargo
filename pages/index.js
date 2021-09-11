import Head from 'next/head'
import HomePage from '../components/HomePage'
import { Layout } from '../components/Layout'



export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/wellslogo.svg" />
        <title>Wells Fargo</title>

      </Head>

      <HomePage />
      <Layout>
      </Layout>



    </>
  )
}
