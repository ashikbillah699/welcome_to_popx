import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mx-auto bg-gray-100 min-h-screen flex items-end'>
            <div className='text-start px-4 pb-8'>
                <h3 className='text-black font-semibold text-xl'>Welcome to PopX</h3>
                <p className='text-sm text-gray-500 pt-2 pb-4 w-5/6'>All-in-one platform to grow your digital presence.</p>
                <Link to='/signUp'><button className='border w-full py-2 bg-[#5031be] rounded-lg text-white text-sm' type="button">Create Account</button></Link>
                <Link to='/login'><button className='border w-full py-2 bg-gray-300 font-semibold rounded-lg mt-2 text-sm' type="button">Already Registered? Login</button> </Link>
            </div>

        </div>
    );
};

export default Home;