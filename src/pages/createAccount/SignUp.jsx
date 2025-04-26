import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { createSignUp, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignUp = (event) => {
        event.preventDefault();
        const fullName = event.target.fullName.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;
        const companyName = event.target.companyName.value;
        const password = event.target.password.value;
        const photoUrl = event.target.photoUrl.value;
        const formData = { fullName, phone, email, companyName, photoUrl }
        console.log(formData)
        try {
            createSignUp(email, password)
                .then(result => {
                    updateUserProfile(fullName, photoUrl)
                    if (result.user) {
                        alert("Your account has been successfully created.");
                        navigate('/accountSettion');
                    }
                })
        }
        catch (err) {
            alert(err.message)
        }
    }
    return (
        <div className="min-h-screen flex justify-center ">
            <div className="w-full bg-gray-100 p-4 rounded">
                <h2 className="text-2xl font-bold mb-6 text-left">Create your <br /> PopX account</h2>
                <form onSubmit={handleSignUp} className="space-y-4">
                    <div className='relative'>
                        <label className="text-sm absolute bg-gray-100 left-4 -top-2 text-blue-700 block">Full Name <span className="text-blue-700">*</span></label>
                        <input type="text" name='fullName' placeholder="Type your name" className="text-sm mt-1 w-full px-4 py-1 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 text-blue-700" required />
                    </div>

                    <div className='relative'>
                        <label className="text-sm absolute bg-gray-100 left-4 -top-2 text-blue-700 block font-medium">Phone number <span className="text-blue-700">*</span></label>
                        <input type="text" name='phone' placeholder="Phone number" className="text-sm mt-1 w-full px-4 py-1 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 text-blue-700" required />
                    </div>

                    <div className='relative'>
                        <label className="text-sm absolute bg-gray-100 left-4 -top-2 text-blue-700 block font-medium">Photo URL <span className="text-blue-700">*</span></label>
                        <input type="url" name='photoUrl' placeholder="Photo URL" className="text-sm mt-1 w-full px-4 py-1 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 text-blue-700" required />
                    </div>

                    <div className='relative'>
                        <label className="text-sm absolute bg-gray-100 left-4 -top-2 text-blue-700 block font-medium ">Email address <span className="text-blue-700">*</span></label>
                        <input type="email" name='email' placeholder="Your email address" className="text-sm mt-1 w-full px-4 py-1 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 text-blue-700" required />
                    </div>

                    <div className='relative'>
                        <label className="text-sm absolute bg-gray-100 left-4 -top-2 text-blue-700 block font-medium ">Password <span className="text-blue-700">*</span></label>
                        <input type="password" name='password' placeholder="Marry Doe" className="text-sm mt-1 w-full px-4 py-1 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 text-blue-700" required />
                    </div>

                    <div className='relative'>
                        <label className="text-sm absolute bg-gray-100 left-4 -top-2 text-blue-700 block font-medium ">Company name</label>
                        <input type="text" name='companyName' placeholder="Marry Doe" className="text-sm mt-1 w-full px-4 py-1 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 text-blue-700" required />
                    </div>
                    <div className=' text-start'>
                        <label className="block text-xs font-medium text-gray-700 mb-2">Are you an Agency? <span className="text-blue-700">*</span></label>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2 text-xs">
                                <input type="radio" name="agency" value="yes" className="text-blue-700" defaultChecked />
                                <span>Yes</span>
                            </label>
                            <label className="flex items-center gap-2 text-xs">
                                <input type="radio" name="agency" value="no" className="text-blue-700" />
                                <span>No</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex items-end pt-32">
                        <button type="submit" className="w-full bg-[#5031be] text-sm hover:bg-blue-700 text-white font-medium py-2 rounded-md transition duration-200">
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;