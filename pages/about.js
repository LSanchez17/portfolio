import Link from 'next/link'

function about(){
    return (
        <div className='w-screen h-screen bg-blue-300 bg-opacity-75'>
            <nav>
                <Link href='/projects'>
                    <a>Projects</a>
                </Link>
                <Link href='/contact'>
                    <a>Contact</a>
                </Link>
            </nav>
            <div>
                <h2>About Me</h2>
                <p>Software Engineer. Driven, results oriented, resourceful, and brimming with a 
                   vast curiosity when it comes to the world of technology. Creating solutions to complex problems, 
                   creating useful tools for the business, and impacting the lives of many people with just a 
                   few lines of code is remarkable. Consistently enhancing my craft through education, 
                   personal projects, & meetups/talks. Feel free to check out on my Github and Heroku 
                   deployments to see some of my past and current work!
                </p>

                <h3>Technology Skills:</h3>
                <ul>
                    <li>Languages: Javascript, SQL, Python, HTML, CSS</li>
                    <li>Frameworks, Libraries & Runtimes: React, Redux, Jinja, Bootstrap, jQuery, Node, Express, Jest, Jasmine, Flask, SQLAlchemy, Axios, WTForms, HandleBars</li>
                    <li>Topics: Database Systems, Data Structures & Algorithms, Operating Systems, Computer Architecture</li>
                </ul>

                <h3>After hours, here are some hobbies of interest:</h3>
                <ul>
                    <li>Gardening</li>
                    <li>Cooking</li>
                    <li>Exercising</li>
                    <li>Video Games</li>
                    <li>Reading</li>
                    <li>Sudoku</li>
                    <li>Anime</li>
                </ul>
            </div>
        </div>
    );
};

export default about;