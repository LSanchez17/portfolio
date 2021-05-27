const projects = ({about, contacts, reset}) => {
    return (
        <div>
            <div className='text-black rounded border-2 p-3 shadow-sm bg-indigo-100 bg-opacity-50 my-2 mx-6'>
                <h1 className='grid place-content-center inline-block align-middle pb-2 text-3xl'>Projects</h1>

                <div className='rounded border-1 p-3 shadow-md bg-blue-200 bg-opacity-25 my-1'>
                    <h3 className='grid place-content-center text-xl'>Plant Keeper</h3>
                    <p className='my-2 p-2'>Full stack application that helps users keep track of when to water, trim, or repot their plants</p>
                    <ul className='list-disc list-inside'>
                        <li>Full user creation, login/logout, deletion, update features through API endpoints</li>
                        <li>Modular design using Jinja to facilitate user interface display</li>
                        <li>Handles reminders of when to take care of a user's plants through date objects and weather data from outside API</li>
                    </ul>
                    <a className='m-1 p-1 hover:bg-pink-200 rounded-full p-1' href='https://plant-keeper.herokuapp.com/'>Live Link</a>
                </div>

                <div className='p-1'></div>

                <div className='rounded border-1 p-3 shadow-md bg-blue-200 bg-opacity-25 my-1'>
                    <h3 className='grid place-content-center text-xl'>Safe For Pet</h3>
                    <p className='my-2 p-2'>Full stack application that lets a user ask the question, can my dog eat this?</p>
                        <ul className='list-disc list-inside'>
                            <li>Handles text input, voice input, or no input from users</li>
                            <li>Communicates with custom REST API endpoints for data retrieval through Postgres</li>
                            <li>Infographic section with pagination of current data, unique user visits, and voice logs</li>
                        </ul>
                    <a className='m-1 p-1 hover:bg-pink-200 rounded-full p-1' href='http://safe-for-pet.surge.sh/'>Live Link</a>
                </div>

                <div className='p-1'></div>

                <div className='rounded border-1 p-3 shadow-md bg-blue-200 bg-opacity-25 my-1'>
                    <h3 className='grid place-content-center text-xl'>NASA Hackathon</h3>
                    <p className='my-2 p-2'>Collaborative group hackathon project for NASA's Space App Hackathon</p>
                    <ul className='list-disc list-inside'>
                        <li>Collaborated with 3 other software engineers through zoom and slack, and git/github</li>
                        <li>Allows the creation of scenarios through form submission, displayed with Jinja</li>
                        <li>Persists data through the use of session data, avoiding user registration for faster use</li>
                    </ul>
                    <a className='m-1 p-1 hover:bg-pink-200 rounded-full p-1' href='https://better-together-tardigrades.herokuapp.com/'>Live Link</a>
                </div>

                <div className='p-1'></div>

                <div className='rounded border-1 p-3 shadow-md bg-blue-200 bg-opacity-25 my-1'>
                    <h3 className='grid place-content-center text-xl'>Interal Inventory Tool</h3>
                    <p className='my-2 p-2'>Inventory tool to automate manual counting, improve accuracy, and reduce work at my current employer</p>
                    <ul className='list-disc list-inside'>
                        <li>Creates customizable list of items based on a JSON object</li>
                        <li>Displays total weight for a user to enter, based on current count</li>
                        <li>Provides barcode to maximize scanning into store devices</li>
                    </ul>
                    <a className='m-1 p-1 hover:bg-pink-200 rounded-full p-1' 
                        href='https://inventory-tool-21.surge.sh/'>Live Link</a>
                </div>

                <div className='p-1'></div>

                <div className='grid place-content-center rounded border-1 p-2 shadow-md bg-blue-200 bg-opacity-25 text-2xl'>
                    <a href='https://www.github.com/LSanchez17'><h2>Github <span><img className='inline my-1 h-6 w-6' src='./github-sign.png'></img></span></h2></a>
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
                    <button onClick={contacts}>
                        <h1 className='text-xl grayscale-0
                                       transition duration-500 ease-in-out  
                                       hover:bg-yellow-100 rounded-full p-2 transform hover:-translate-y-0 hover:scale-110'>Contact</h1>
                    </button>
                    <p>Want to connect?</p>
                  </div>
                </div>
      
                <div className='border-light-blue-500 m-1 p-8 shadow-2xl rounded-full h-48 w-48'>
                  <div className='pt-7 text-center'>
                    <button onClick={about}>
                        <h1 className='text-xl grayscale-0
                                       transition duration-500 ease-in-out 
                                       hover:bg-yellow-100 rounded-full p-2 transform hover:-translate-y-0 hover:scale-110'>About</h1>
                    </button>
                    <p>More about the developer</p>
                  </div>
                </div>  
            </div>

        </div>
    );
};

export default projects;