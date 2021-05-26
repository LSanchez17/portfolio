const about = ({projects, contacts, reset}) => {
    return (
        <div>
            <div className='text-black rounded border-2 p-2 shadow-sm bg-green-300 bg-opacity-50 my-2 mx-6'>
                <h2 className='grid place-content-center p-4 inline-block align-middle pb-3 text-3xl'>About Me</h2>
                <div className='rounded border-1 shadow-md bg-blue-200 bg-opacity-25 my-1 p-2'>
                    <img className='w-64 h-64 rounded-full items-start' src='./plantTopia.jpeg'></img>
                    <p className='flex items-end p-3'>Software Engineer. Writing quality, tested, and scalable code. Experienced with modern frameworks, 
                    tools, and libraries. I love creating solutions to problems, automating repetitive tasks to save time and resources, and improving the 
                    lives of those around me with code is what I strive for. I improve my craft through educational opportunities, conferences/meet ups, 
                    articles, and side projects.
                    </p>
                </div>
                <div className='p-2'></div>
                <div className='rounded border-1 shadow-md bg-blue-200 bg-opacity-25 my-1 p-2'>
                    <h3 className='place-content-center p-2'>Technology Skills:</h3>
                    <ul className='p-2'>
                        <li>Languages: Javascript, SQL, Python, HTML, CSS</li>
                        <li>Frameworks, Libraries & Runtimes: React, Redux, Jinja, Bootstrap, jQuery, Node, Express, Jest, Jasmine, Flask, SQLAlchemy, Axios, WTForms, HandleBars</li>
                        <li>Topics: Database Systems, Data Structures & Algorithms, Operating Systems, Computer Architecture</li>
                    </ul>
                </div>
            </div>
            
            <div className='h-64 grid grid-rows-1 grid-flow-col gap-3 justify-evenly'> 
                <div className='border-light-blue-500 m-1 p-8 shadow-2xl rounded-full h-48 w-48'>
                  <div className='pt-8 text-center'>
                    <button onClick={reset}>
                        <h1 className='text-xl grayscale-0
                                       transition duration-500 ease-in-out bg-white 
                                       hover:bg-blue-400 rounded-full p-2 transform hover:-translate-y-0 hover:scale-110'>Home</h1>
                    </button>
                    <p>Return home?</p>  
                  </div>
                </div>
      
                <div className='border-light-blue-500 m-1 p-8 shadow-2xl rounded-full h-48 w-48'>
                  <div className='pt-8 text-center'>
                    <button onClick={projects}>
                        <h1 className='text-xl grayscale-0
                                       transition duration-500 ease-in-out bg-white 
                                       hover:bg-blue-400 rounded-full p-2 transform hover:-translate-y-0 hover:scale-110'>Projects</h1>
                    </button>
                    <p>View my work</p>
                  </div>
                </div>
      
                <div className='border-light-blue-500 m-1 p-8 shadow-2xl rounded-full h-48 w-48'>
                  <div className='pt-7 text-center'>
                    <button onClick={contacts}>
                        <h1 className='text-xl grayscale-0
                                       transition duration-500 ease-in-out bg-white 
                                       hover:bg-blue-400 rounded-full p-2 transform hover:-translate-y-0 hover:scale-110'>Contact</h1>
                    </button>
                    <p>Want to connect?</p>
                  </div>
                </div>  
            </div>
        </div>
    );
};

export default about;