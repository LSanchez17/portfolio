const contact = ({projects, about, reset}) =>{

    return (
        <div className=''>
            <div className='text-black rounded border-2 p-2 shadow-sm bg-green-300 bg-opacity-50 my-2 mx-6'>
                <h1 className='grid place-content-center inline-block align-middle pb-3 text-3xl'>Want to get in touch?</h1>
                
                <div className='grid place-content-evenly my-2'>
                    <h3 className='my-2 text-3xl inline-block align-middle'><a href='https://www.linkedin.com/in/lasj'><span>LinkedIn <img className='inline my-1 h-7 w-7' src='./linkedin.png'></img></span></a></h3>
                    <h3 className='my-2 text-3xl inline-block align-middle'><a href='https://www.twitter.com/LuisDoesSE'><span>Twitter <img className='inline my-1 h-7 w-7' src='./twitter.png'></img></span></a></h3>
                </div>
            </div>

            <div className='h-64 grid grid-rows-1 grid-flow-col gap-3 justify-evenly'> 
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

export default contact;