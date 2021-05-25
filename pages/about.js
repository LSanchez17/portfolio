const about = ({projects, contacts, reset}) => {
    return (
        <div className=''>
            <div className='text-white rounded border-2 p-4 shadow-sm bg-green-500 bg-opacity-25 my-2 mx-6'>
                <h2 className='grid place-content-center p-4 inline-block align-middle pb-3 text-3xl'>About Me</h2>
                <div className='rounded border-1 shadow-md bg-blue-200 bg-opacity-25 my-1 p-2'>
                    <p className='place-content-center p-3'>Software Engineer. Driven, results oriented, resourceful, and brimming with a 
                       vast curiosity when it comes to the world of technology. Creating solutions to complex problems, 
                       creating useful tools for the business, and impacting the lives of many people with just a 
                       few lines of code is remarkable. Consistently enhancing my craft through education, 
                       personal projects, & meetups/talks. Feel free to check out on my Github and Heroku 
                       deployments to see some of my past and current work!
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
                    <button onClick={reset}><h1 className='text-xl'>Home</h1></button>
                    <p>Return home?</p>  
                  </div>
                </div>
      
                <div className='border-light-blue-500 m-1 p-8 shadow-2xl rounded-full h-48 w-48'>
                  <div className='pt-8 text-center'>
                    <button onClick={projects}><h1 className='text-xl'>Projects</h1></button>
                    <p>View my work</p>
                  </div>
                </div>
      
                <div className='border-light-blue-500 m-1 p-8 shadow-2xl rounded-full h-48 w-48'>
                  <div className='pt-7 text-center'>
                    <button onClick={contacts}><h1 className='text-xl'>Contact</h1></button>
                    <p>Want to connect?</p>
                  </div>
                </div>  
            </div>
        </div>
    );
};

export default about;