function contact(){
    return (
        <div className='w-screen h-screen bg-blue-300 bg-opacity-75'>
            <div className='content-center'>
                <h1>Want to get in touch?</h1>
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