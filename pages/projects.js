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
                    <h3>PROJECT NAME</h3>
                    <p></p>
                    <a href='LINK HERE'>Live Link</a>
                </div>
                <div>
                    <h3>PROJECT NAME</h3>
                    <p></p>
                    <a href='LINK HERE'>Live Link</a>
                </div>
                <div>
                    <h3>PROJECT NAME</h3>
                    <p></p>
                    <a href='LINK HERE'>Live Link</a>
                </div>
                <a href='https://www.github.com/LSanchez17'><h2>Github</h2></a>
                
            </div>
        </div>
    );
};

export default projects;