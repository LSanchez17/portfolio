const projects = ({about, contacts, reset}) => {
    return (
        <div className=''>
            <div className='text-black rounded border-2 p-2 shadow-sm bg-green-300 bg-opacity-50 my-2 mx-6'>
                <h1 className='grid place-content-center inline-block align-middle pb-2 text-3xl'>Projects</h1>

                <div className='rounded border-1 p-1 shadow-md bg-blue-200 bg-opacity-25 my-1'>
                    <h3 className='inline-block align-middle'>Plant Keeper</h3>
                    <p className='my-2 p-1'>Helps organize and maintain a user's house plants.  Dashboard to remind them when 
                       a plant needs watered, trimmed, repotted, and informs them of their current weather.  
                       Ability to search for other plants through the use of Treffle's API.
                       Tech: Flask, Python, Javascript, Bootstrap, HTML/CSS</p>
                    <a className='my-2 p-1 hover:underline' href='https://plant-keeper.herokuapp.com/'>Live Link</a>
                </div>

                <div className='p-1'></div>

                <div className='rounded border-1 p-2 shadow-md bg-blue-200 bg-opacity-25 my-1'>
                    <h3 className='inline-block align-middle'>Safe For Pet</h3>
                    <p className='my-2 p-1'>Application created to help a user determine if a food is "safe" for their pet. 
                       Set to dog mode at the moment, but backend built to be scaled to any pet.  
                       Informative section, showing number of voices queries made, number of unique visitors, 
                       and a current list of all the foods available in the database.
                       Tech: Javascript, Express, React, HTML/CSS, Bootstrap</p>
                    <a className='my-1 p-1 hover:underline' href='http://safe-for-pet.surge.sh/'>Live Link</a>
                </div>

                <div className='p-1'></div>

                <div className='rounded border-1 p-2 shadow-md bg-blue-200 bg-opacity-25 my-1'>
                    <h3 className='inline-block align-middle'>NASA Hackathon</h3>
                    <p className='my-2 p-1'>This website is designed to help you figure out how to respond to biased comments. 
                       We hope it will be a starting point for reflection. Collaborative project with other developers.
                       Tech: Javascript, Flask, Python, Bootstrap</p>
                    <a className='my-2 p-1 hover:underline' href='https://better-together-tardigrades.herokuapp.com/'>Live Link</a>
                </div>

                <div className='p-1'></div>

                <div className='rounded border-1 p-1 shadow-md bg-blue-200 bg-opacity-25 my-1'>
                    <h3 className='inline-block align-middle'>Interal inventory Tool</h3>
                    <p className='my-2 p-1'>Helps me avoid coming in at 4am during perishable inventory.  Automates a highly manual task of counting individual items, 
                    multiplying those items by a average weight, and entering them into a handheld device.  Automates this process with two buttons, and a 
                    generated UPC barcode.  Saves me 1.5 hours.
                       Tech: Javascript, TailwindCSS, React, HTML/CSS</p>
                    <a className='my-2 p-1 hover:underline' href='https://plant-keeper.herokuapp.com/'>Live Link</a>
                </div>

                <div className='p-1'></div>

                <div className='grid place-content-center rounded border-1 p-2 shadow-md bg-blue-200 bg-opacity-25 my-1 text-2xl'>
                    <a href='https://www.github.com/LSanchez17'><h2>Github <span><img className='inline my-1 h-6 w-6' src='./github-sign.png'></img></span></h2></a>
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
                    <button onClick={contacts}>
                        <h1 className='text-xl grayscale-0
                                       transition duration-500 ease-in-out bg-white 
                                       hover:bg-blue-400 rounded-full p-2 transform hover:-translate-y-0 hover:scale-110'>Contacts</h1>
                    </button>
                    <p>Want to connect?</p>
                  </div>
                </div>
      
                <div className='border-light-blue-500 m-1 p-8 shadow-2xl rounded-full h-48 w-48'>
                  <div className='pt-7 text-center'>
                    <button onClick={about}>
                        <h1 className='text-xl grayscale-0
                                       transition duration-500 ease-in-out bg-white 
                                       hover:bg-blue-400 rounded-full p-2 transform hover:-translate-y-0 hover:scale-110'>About</h1>
                    </button>
                    <p>More about the developer</p>
                  </div>
                </div>  
            </div>

        </div>
    );
};

export default projects;