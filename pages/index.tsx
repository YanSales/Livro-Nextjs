import type { NextPage } from 'next'
import Head from 'next/head'
import { Menu } from '../componentes/Menu'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial</h1>
      </main>
    </div>
  )
}

export default Home
