import Head from 'next/head'
import styles from '../styles/Home.module.css'

const contact = ({projects, about, reset}) =>{

    return (
        <div className={styles.container}>
            <Head>
                <title>Luis-Software Engineer</title>
                <meta name="description" content="Luis, Software Engineer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>

            <div className='text-black rounded border-2 p-8 shadow-sm bg-indigo-100 bg-opacity-50'>
                <h1 className='grid place-content-center inline-block align-middle pb-3 text-3xl'>Want to get in touch?</h1>
                
                <div className='grid place-content-evenly my-2'>
                    <h3 className='my-2 text-3xl inline-block align-middle'><a href='https://www.linkedin.com/in/lasj'><span>LinkedIn <img className='inline my-1 h-7 w-7' src='./linkedin.png'></img></span></a></h3>
                    <h3 className='my-2 text-3xl inline-block align-middle'><a href='https://www.twitter.com/LuisDoesSE'><span>Twitter <img className='inline my-1 h-7 w-7' src='./twitter.png'></img></span></a></h3>
                </div>
            </div>

            <div className='p-3'></div>

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
                    <button onClick={reset}>
                        <h1 className='text-xl grayscale-0
                                       transition duration-500 ease-in-out 
                                       hover:bg-yellow-100 rounded-full p-2 transform hover:-translate-y-0 hover:scale-110'>Home</h1>
                    </button>
                    <p>Return home?</p>
                  </div>
                </div>
      
                <div className='border-3 m-1 p-8 shadow-2xl rounded-full h-48 w-48'>
                  <div className='pt-8 text-center'>
                    <button onClick={about}>
                        <h1 className='text-xl grayscale-0
                                       transition duration-500 ease-in-out 
                                       hover:bg-yellow-100 rounded-full p-2 transform hover:-translate-y-0 hover:scale-110'>About</h1>
                    </button>
                    <p>More about the developer</p>
                  </div>
                </div>  
            </div>
        </main>

        </div>
    );
};

export default contact;