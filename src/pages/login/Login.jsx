import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { createLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        createLogin(email, password)
            .then(result => {
                if (result.user) {
                    alert("Login Successfully!");
                    navigate('/accountSettion');
                }
            })
    }

    return (
        <div className=" flex items-center justify-center ">
            <div className="w-full min-h-screen bg-gray-100 px-4 pt-8 rounded">
                <h2 className="text-2xl font-bold  text-left">Signin to your <br /> PopX account</h2>
                <p className='text-sm text-start pt-2 text-gray-500 mb-6 w-5/6'>Access your dashboard, manage services, and grow your business.</p>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div className='relative'>
                        <label className="text-sm absolute bg-gray-100 left-4 -top-2 text-blue-700 block font-medium ">Email address <span className="text-blue-700">*</span></label>
                        <input type="email" name='email' placeholder="Your email address" className="text-sm mt-1 w-full px-4 py-1 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 text-blue-700" required />
                    </div>

                    <div className='relative'>
                        <label className="text-sm absolute bg-gray-100 left-4 -top-2 text-blue-700 block font-medium ">Password <span className="text-blue-700">*</span></label>
                        <input type="password" name='password' placeholder="Marry Doe" className="text-sm mt-1 w-full px-4 py-1 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 text-blue-700" required />
                    </div>

                    <button type="submit" className="w-full mt-4 bg-[#d2d0d4] hover:bg-blue-700 text-white font-medium py-2 rounded-md transition duration-500">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;