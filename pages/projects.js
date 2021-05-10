import Link from 'next/link'

function projects(){
    return (
        <div className='w-screen h-screen bg-gradient-to-b from-purple-500 via-blue-500 to-green-400 bg-opacity-50'>
             <nav className='text-white p-4'>
                <Link href='/about'>
                    <a className='rounded border-3 bg-purple-400 bg-opacity-75 shadow-lg p-3 m-2'>About</a>
                </Link>
                <Link href='/contact'>
                    <a className='rounded border-3 bg-purple-400 bg-opacity-75 shadow-lg p-3 m-2'>Contact</a>
                </Link>
                <Link href='/'>
                    <a className='rounded border-3 bg-purple-400 bg-opacity-75 shadow-lg p-3 m-2'>Home</a>
                </Link>
            </nav>

            <div className='text-white rounded border-2 p-4 shadow-sm bg-green-500 bg-opacity-25 my-2 mx-6'>
                <h2 className='grid place-content-center inline-block align-middle pb-3'>Projects</h2>
                <div className='rounded border-1 p-2 shadow-md bg-blue-200 bg-opacity-25 my-1'>
                    <h3 className='inline-block align-middle'>Plant Keeper</h3>
                    <p className='my-2 p-1'>Helps organize and maintain a user's house plants.  Dashboard to remind them when 
                       a plant needs watered, trimmed, repotted, and informs them of their current weather.  
                       Ability to search for other plants through the use of Treffle's API.
                       Tech: Flask, Python, Javascript, Bootstrap, HTML/CSS</p>
                    <a className='my-2 p-1 hover:underline' href='https://plant-keeper.herokuapp.com/'>Live Link</a>
                </div>
                <div className='rounded border-1 p-2 shadow-md bg-blue-200 bg-opacity-25 my-1'>
                    <h3 className='inline-block align-middle'>Safe For Pet</h3>
                    <p className='my-2 p-1'>Application created to help a user determine if a food is "safe" for their pet. 
                       Set to dog mode at the moment, but backend built to be scaled to any pet.  
                       Informative section, showing number of voices queries made, number of unique visitors, 
                       and a current list of all the foods available in the database.
                       Tech: Javascript, Express, React, HTML/CSS, Bootstrap</p>
                    <a className='my-1 p-1 hover:underline' href='http://safe-for-pet.surge.sh/'>Live Link</a>
                </div>
                <div className='rounded border-1 p-2 shadow-md bg-blue-200 bg-opacity-25 my-1'>
                    <h3 className='inline-block align-middle'>NASA Hackathon</h3>
                    <p className='my-2 p-1'>This website is designed to help you figure out how to respond to biased comments. 
                       We hope it will be a starting point for reflection. Collaborative project with other developers.
                       Tech: Javascript, Flask, Python, Bootstrap</p>
                    <a className='my-2 p-1 hover:underline' href='https://better-together-tardigrades.herokuapp.com/'>Live Link</a>
                </div>
                <div className='grid place-content-center rounded border-1 p-2 shadow-md bg-blue-200 bg-opacity-25 my-1'>
                    <a href='https://www.github.com/LSanchez17'><h2>Github <span><img className='inline my-1 h-6 w-6' src='./github-sign.png'></img></span></h2></a>
                </div>
            </div>
        </div>
    );
};

export default projects;