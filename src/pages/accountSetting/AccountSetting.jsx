import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const AccountSetting = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className=" min-h-screen rounded-md bg-gray-100 shadow-sm mx-auto">
            <div className=' bg-white text-start py-4 pl-2'>
                <h2 className="text-gray-800 font-semibold">Account Settings</h2>
            </div>

            <div className="flex flex-col text-start p-4">
                <div className='flex gap-4'>
                    <div className="relative">
                        <img
                            className="w-16 h-16 rounded-full object-cover"
                            src={`${user?.photoURL}`}
                            alt="Profile"
                        />
                        <span className="absolute bottom-0 left-11 right-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                            📷
                        </span>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800">{user?.displayName}</h3>
                        <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>
                </div>
                <p className="mt-4 text-xs text-gray-600 ">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore.
                </p>
            </div>
            <div className="h-96 border-dashed border-t border-gray-300 mt-2"></div>
            <div className=" border-dashed border-t border-gray-300"></div>
        </div>
    );
};

export default AccountSetting;