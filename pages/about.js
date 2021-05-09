import Link from 'next/link'

function about(){
    return (
        <div className='w-screen h-screen bg-gradient-to-b from-purple-500 via-blue-500 to-green-400 bg-opacity-50'>
            <nav className='text-white p-4'>
                <Link href='/projects'>
                    <a className='rounded border-3 bg-purple-400 bg-opacity-75 shadow-lg p-3 m-2'>Projects</a>
                </Link>
                <Link href='/contact'>
                    <a className='rounded border-3 bg-purple-400 bg-opacity-75 shadow-lg p-3 m-2'>Contact</a>
                </Link>
            </nav>
            <div className='text-white rounded border-2 p-4 shadow-sm bg-green-500 bg-opacity-25 my-2'>
                <h2 className='grid place-content-center p-4'>About Me</h2>
                <p className='place-content-center p-3'>Software Engineer. Driven, results oriented, resourceful, and brimming with a 
                   vast curiosity when it comes to the world of technology. Creating solutions to complex problems, 
                   creating useful tools for the business, and impacting the lives of many people with just a 
                   few lines of code is remarkable. Consistently enhancing my craft through education, 
                   personal projects, & meetups/talks. Feel free to check out on my Github and Heroku 
                   deployments to see some of my past and current work!
                </p>

                <h3 className='place-content-center p-2'>Technology Skills:</h3>
                <ul className='p-2'>
                    <li>Languages: Javascript, SQL, Python, HTML, CSS</li>
                    <li>Frameworks, Libraries & Runtimes: React, Redux, Jinja, Bootstrap, jQuery, Node, Express, Jest, Jasmine, Flask, SQLAlchemy, Axios, WTForms, HandleBars</li>
                    <li>Topics: Database Systems, Data Structures & Algorithms, Operating Systems, Computer Architecture</li>
                </ul>
            </div>
        </div>
    );
};

export default about;