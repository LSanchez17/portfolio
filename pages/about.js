const about = ({projects, contacts, reset}) => {
    return (
        <div className='h-screen'>
            <div className='text-black rounded border-2 p-2 shadow-sm bg-indigo-100 bg-opacity-50 my-2 mx-6'>
                <h2 className='grid place-content-center p-4 inline-block align-middle pb-3 text-3xl'>About Me</h2>
                <div className='rounded border-1 shadow-md bg-blue-200 bg-opacity-25 my-1 p-2'>
                    <p className='leading-loose text-2xl flex items-end pb-3'><img className='grayscale-0 w-64 h-64 rounded-full items-start pt-5 pr-3' src='./plantTopia.jpeg'></img>
                    Software Engineer. Writing quality, tested, and scalable code. Experienced with modern frameworks, 
                    tools, and libraries. I love creating solutions to problems, automating repetitive tasks to save time and resources, and improving the 
                    lives of those around me with code is what I strive for. I improve my craft through educational opportunities, conferences/meet ups, 
                    articles, and side projects.
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
            
            <div className='h-64 grid grid-rows-1 grid-flow-col gap-3 justify-evenly'> 
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
                  <div className='pt-7 text-center'>
                    <button onClick={contacts}>
                        <h1 className='text-xl grayscale-0
                                       transition duration-500 ease-in-out 
                                       hover:bg-yellow-100 rounded-full p-2 transform hover:-translate-y-0 hover:scale-110'>Contact</h1>
                    </button>
                    <p>Want to connect?</p>
                  </div>
                </div>  
            </div>
        </div>
    );
};

export default about;