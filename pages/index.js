import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
  let homePage = (
  <div className={styles.container}>
    <Head>
      <title>Luis-Software Engineer</title>
      <meta name="description" content="Luis, Software Engineer" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h3 className='text-4xl static'>
      Welcome to my humble abode
    </h3>

    <main className={styles.main}>
      <Particles color='000000' type='cobweb' bg={true} />

      <div className='h-64 grid grid-rows-1 grid-flow-col gap-3 justify-evenly'> 
          <div className='m-2 p-5 shadow-xl'>
            <div className='text-center'>
              <h2><button>Projects</button></h2>
              <p>View my work</p>  
            </div>
          </div>

          <div className='m-2 p-5 shadow-xl'>
            <div className='text-center'>
              <h2><button>Contact</button></h2>
              <p>Want to connect?</p>
            </div>
          </div>

          <div className='m-2 p-5 shadow-xl'>
            <div className='text-center'>
              <h2><button>About</button></h2>
              <p>Read more about the developer</p>
            </div>
          </div>        

      </div>
    </main>

    <footer className={styles.footer}>
    <p>icons provided from <span>https://www.flaticon.com/</span></p>
    </footer>
  </div>)


  return (
    <div className='w-screen h-screen bg-gradient-to-b from-purple-500 via-blue-500 to-green-400 bg-opacity-50'>
      {homePage}
    </div>
  )
}
