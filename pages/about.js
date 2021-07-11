import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'

const about = ({projects, contacts, reset}) => {
    return (
        <motion.div 
            initial='hidden'
            animate='visible'
            variants={{
                hidden:{
                    scale:.125,
                    opacity: 0
                },
                visible:{
                    scale: 1,
                    opacity: 1,
                transition: {
                    delay: .2,
                    duration: .5
                }
            }
            }}
            className={styles.container}>
            <Head>
                <title>Luis-Software Engineer</title>
                <meta name="description" content="Luis, Software Engineer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main className={styles.main}>

            <div className='text-black rounded border-2 p-2 shadow-sm bg-indigo-100 bg-opacity-50 my-2 mx-6'>
                <h2 className='grid place-content-center p-4 inline-block align-middle pb-3 text-3xl'>About Me</h2>
                <div className='rounded border-1 shadow-md bg-blue-200 bg-opacity-25 my-1 p-2'>
                    <p className='leading-loose text-2xl flex items-end pb-3'><img className='grayscale-0 w-64 h-64 rounded-full items-start pt-5 pr-3' src='./plantTopia.jpeg'></img>
<<<<<<< HEAD
                    Software Engineer. Writing quality, tested, and scalable code. Experienced with modern frameworks, 
                    tools, and libraries. I love creating solutions to problems, automating repetitive tasks to save time and resources, and improving the 
                    lives of those around me with code. I improve my craft through educational opportunities, conferences/meet ups, 
                    articles, and side projects.
=======
                    Software Engineer. Creating solutions to problems, automating repetitive tasks to save time and resources, and improving the 
                    lives of those around me with code is what I strive for.  I love writing quality, tested, and scalable code.  I'm versed with modern frameworks, 
                    tools, and libraries. I thrive in a fast-paced environment, under guidance from motivated leaders. I am also an agile collaborator, with a focus on improving the user experience.
                    I strive to improve my craft through educational opportunities, conferences/meet ups, articles, and side projects.
>>>>>>> 05971471a06b0e7f0d3db1d2b981b4e8214bd354
                    </p>
                </div>
                <div className='p-2'></div>
                <div className='leading-loose text-2xl rounded border-1 shadow-md bg-blue-200 bg-opacity-25 my-1 p-2'>
                    <h3 className='font-medium place-content-center p-2'>Technology Skills</h3>
                    <ul className='p-2'>
                        <li><span className='font-medium'>Languages: </span><p className='leading-tight'>Javascript, SQL, Python, HTML, CSS</p></li>
                        <li><span className='font-medium'>Frameworks, Libraries & Runtimes: </span><p className='leading-tight'>React, Redux, Jinja, Bootstrap, jQuery, Node, Express, Jest, Jasmine, Flask, SQLAlchemy, Axios, WTForms, HandleBars</p></li>
                    </ul>
                </div>
            </div>
            
            <div className='p-3'></div>

            <div className='grid grid-rows-1 grid-flow-col gap-3 justify-evenly'> 
                <div className='border-light-blue-500 m-1 p-8 shadow-2xl rounded-full h-48 w-48'>
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
            </div>
          </main>
        </motion.div>
    );
};

export default about;
