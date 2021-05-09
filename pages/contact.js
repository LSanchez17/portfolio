import Link from 'next/link'

function contact(){
    return (
        <div className='w-screen h-screen bg-gradient-to-b from-purple-500 via-blue-500 to-green-400 bg-opacity-50'>
            <nav>
                <Link href='/projects'>
                    <a>Projects</a>
                </Link>
                <Link href='/about'>
                    <a>About Me</a>
                </Link>
            </nav>
            <div className='bg-black bg-opacity-75 text-white'>
                <h1 className='flex content-center'>Want to get in touch?</h1>
                <h2><a href='https://www.linkedin.com/in/lasj'>LinkedIn</a></h2>
                <h2><a href='https://www.twitter.com/LuisDoesSE'>Twitter</a></h2>
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