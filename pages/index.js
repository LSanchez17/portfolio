import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import dynamic from 'next/dynamic';

const Particles = dynamic(
  //dynamic sideloads the npm packages that require window access
  //by negativ the server side rendering, we get access to the window
  //while still being "NEXT"
    () => import('particles-bg'),
    {
      ssr: false
    }
)

export default function Home() {
  return (
    <div className='w-screen h-screen bg-gradient-to-b from-purple-500 via-blue-500 to-green-400 bg-opacity-50'>
      <div className={styles.container}>
      <Head>
        <title>Luis-Software Engineer</title>
        <meta name="description" content="Luis, Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Particles color='000000' type='cobweb' bg={true} />
        <h3 className={styles.title}>
        Welcome to my humble abode
        </h3>

        <div className={styles.grid}>
          <Link href="/projects" className={styles.card}>
            <div className={styles.card}>
              <h2><a>Projects &rarr;</a></h2>
              <p>View an evergrowing list of projects I've completed and work on</p>  
            </div>
          </Link>

          <Link href="/contact" className={styles.card}>
            <div className={styles.card}>
              <h2><a>Contact &rarr;</a></h2>
              <p>Want to initiate a dialogue, have questions, comments, compliments? </p>
            </div>
          </Link>

          <Link href="/about" className={styles.card}>
            <div className={styles.card}>
              <h2><a>About &rarr;</a></h2>
              <p>Discover more about your next potential hire</p>
            </div>
          </Link>
          

        </div>
      </main>

      <footer className={styles.footer}>
      <p>icons provided from <span>https://www.flaticon.com/</span></p>
      </footer>
    </div>
    </div>
  )
}
