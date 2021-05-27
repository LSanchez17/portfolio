import Head from 'next/head'
import styles from '../styles/Home.module.css'

const HomePage = ({projects, contacts, about}) => {
    return(
        <div className={styles.container}>
          <Head>
            <title>Luis-Software Engineer</title>
            <meta name="description" content="Luis, Software Engineer" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
      
          <main className={styles.main}>
      
            <div className='bg-black-500 p-7'>
                <h3 className='text-4xl static'>
                Welcome to my humble abode
                </h3>
            </div>
      
            <div className='h-64 grid grid-rows-1 grid-flow-col gap-3 justify-evenly'> 
                <div className='border-light-blue-500 m-1 p-8 shadow-2xl rounded-full h-48 w-48'>
                  <div className='pt-8 text-center'>
                    <button onClick={projects}>
                        <h1 className='text-xl grayscale-0
                                       transition duration-500 ease-in-out 
                                       hover:bg-yellow-100 rounded-full p-2 transform hover:-translate-y-0 hover:scale-110'>Projects</h1>
                    </button>
                    <p>View my work</p>  
                  </div>
                </div>
      
                <div className='border-light-blue-500 m-1 p-8 shadow-2xl rounded-full h-48 w-48'>
                  <div className='pt-8 text-center'>
                    <button onClick={contacts}>
                        <h1 className='text-xl grayscale-0
                                       transition duration-500 ease-in-out 
                                       hover:bg-yellow-100 rounded-full p-2 transform hover:-translate-y-0 hover:scale-110'>Contact</h1>
                    </button>
                    <p>Want to connect?</p>
                  </div>
                </div>
      
                <div className='border-light-blue-500 m-1 p-8 shadow-2xl rounded-full h-48 w-48'>
                  <div className='pt-7 text-center'>
                    <button onClick={about}>
                        <h1 className='focus:outline-none
                                       text-xl grayscale-0
                                       transition duration-500 ease-in-out
                                       hover:bg-yellow-100 rounded-full p-2 transform hover:-translate-y-0 hover:scale-110'>About</h1>
                    </button>
                    <p>More about the developer</p>
                  </div>
                </div>        
      
            </div>
          </main>
      
          <footer className={styles.footer}>
          <p>icons provided from <span>https://www.flaticon.com/</span></p>
          </footer>
        </div>)
}

export default HomePage;