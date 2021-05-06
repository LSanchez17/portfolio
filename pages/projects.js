import Link from 'next/link'

function projects(){
    return (
        <div className='w-screen h-screen bg-blue-300 bg-opacity-75'>
            <nav>
                <Link href='/contact'>
                    <a>Contact</a>
                </Link>
                <Link href='/about'>
                    <a>About Me</a>
                </Link>
            </nav>

            <div>
                <h2>Projects</h2>
                <div>
                    <h3>Plant Keeper</h3>
                    <p>Helps organize and maintain a user's house plants.  Dashboard to remind them when 
                       a plant needs watered, trimmed, repotted, and informs them of their current weather.  
                       Ability to search for other plants through the use of Treffle's API.
                       Tech: Flask, Python, Javascript, Bootstrap, HTML/CSS</p>
                    <a href='https://plant-keeper.herokuapp.com/'>Live Link</a>
                </div>
                <div>
                    <h3>Safe For Pet</h3>
                    <p>Application created to help a user determine if a food is "safe" for their pet. 
                       Set to dog mode at the moment, but backend built to be scaled to any pet.  
                       Informative section, showing number of voices queries made, number of unique visitors, 
                       and a current list of all the foods available in the database.
                       Tech: Javascript, Express, React, HTML/CSS, Bootstrap</p>
                    <a href='http://safe-for-pet.surge.sh/'>Live Link</a>
                </div>
                <div>
                    <h3>NASA Hackathon</h3>
                    <p>This website is designed to help you figure out how to respond to biased comments. 
                       We hope it will be a starting point for reflection. Collaborative project with other developers.
                       Tech: Javascript, Flask, Python, Bootstrap</p>
                    <a href='https://better-together-tardigrades.herokuapp.com/'>Live Link</a>
                </div>
                <a href='https://www.github.com/LSanchez17'><h2>Github</h2></a>
                
            </div>
        </div>
    );
};

export default projects;