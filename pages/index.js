import Head from 'next/head'
import HomePage from '../components/HomePage'
import { Layout } from '../components/Layout'



export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/wellslogo.svg" />
        <title>Wells Fargo</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@100&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet"/>
      </Head>

      <HomePage />
      <Layout>
      </Layout>



    </>
  )
}
