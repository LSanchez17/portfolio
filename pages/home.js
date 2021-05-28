import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'

const HomePage = ({projects, contacts, about}) => {
    return(
        <motion.div 
            className={styles.container}
            initial='hidden'
            animate='visible'
            variants={{
                hidden:{
                    scale:1,
                    opacity: 0
                },
                visible:{
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .5
                    }
                }
            }}
        >
          <Head>
            <title>Luis-Software Engineer</title>
            <meta name="description" content="Luis, Software Engineer" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
      
          <main className={styles.main}>
      
            <div className='p-48'>
                <h3 className='text-4xl static'>
                Welcome!
                </h3>
            </div>
      
            <div className='grid grid-rows-1 grid-flow-col gap-3 justify-evenly'> 
                <div className='border-3 m-1 p-8 shadow-2xl rounded-full h-48 w-48'>
                  <div className='pt-8 text-center'>
                    <button onClick={projects}>
                        <h1 className='text-xl grayscale-0
                                       transition duration-500 ease-in-out 
                                       hover:bg-yellow-100 rounded-full p-2 transform hover:-translate-y-0 hover:scale-110'>Projects</h1>
                    </button>
                    <p>View my work</p>  
                  </div>
                </div>
      
                <div className='border-3 m-1 p-8 shadow-2xl rounded-full h-48 w-48'>
                  <div className='pt-8 text-center'>
                    <button onClick={contacts}>
                        <h1 className='text-xl grayscale-0
                                       transition duration-500 ease-in-out 
                                       hover:bg-yellow-100 rounded-full p-2 transform hover:-translate-y-0 hover:scale-110'>Contact</h1>
                    </button>
                    <p>Want to connect?</p>
                  </div>
                </div>
      
                <div className='border-3 m-1 p-8 shadow-2xl rounded-full h-48 w-48'>
                  <div className='pt-8 text-center'>
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
        </motion.div>)
}

export default HomePage;