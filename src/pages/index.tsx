import type { NextPage } from 'next'
import Head from 'next/head'

import Main from '../components/Main'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tailwind Boilerplate App</title>
      </Head>
      <Main />
    </>
  )
}

export default Home
