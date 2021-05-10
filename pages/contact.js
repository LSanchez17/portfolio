import Link from 'next/link'

function contact(){
    return (
        <div className='w-screen h-screen bg-gradient-to-b from-purple-500 via-blue-500 to-green-400 bg-opacity-50'>
             <nav className='text-white p-4'>
                <Link href='/projects'>
                    <a className='rounded border-3 bg-purple-400 bg-opacity-75 shadow-lg p-3 m-2'>Projects</a>
                </Link>
                <Link href='/about'>
                    <a className='rounded border-3 bg-purple-400 bg-opacity-75 shadow-lg p-3 m-2'>About</a>
                </Link>
            </nav>
            <div className='text-white rounded border-2 p-4 shadow-sm bg-green-500 bg-opacity-25 my-2 mx-6'>
                <h1 className='grid place-content-center'>Want to get in touch?</h1>
                
                <div className='grid place-content-evenly'>
                    <h3><a href='https://www.linkedin.com/in/lasj'><span>LinkedIn <img className='inline my-1 h-6 w-6' src='./linkedin.png'></img></span></a></h3>
                    <h3 className=''><a href='https://www.twitter.com/LuisDoesSE'><span>Twitter <img className='inline my-1 h-6 w-6' src='./twitter.png'></img></span></a></h3>
                </div>

                <h3>Old School?</h3>
                <form>
                    <label>Name:</label>
                    <input type='text' />

                    <label>Subject:</label>
                    <input type='text' />

                    <label>Message:</label>
                    <input type='text' />

                    <label>Email:</label>
                    <input type='email' />

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default contact;