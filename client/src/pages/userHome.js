import React from 'react';
import Greeting from './greeting'
import { Link } from 'react-router-dom';

function LoggedIn() {

    return (
        <div className="container my-1 bg-black h-screen">
            <Greeting />
            <div className="text-center text-white">
                No plans yet
            </div>
            <div className='flex flex-row justify-center p-4'>
                <Link to="/createInvite">
                    <button className="rounded-full leading-none border-2 border-purple-700 hover:bg-purple-500 hover:text-white p-3 m-2 font-mono text-purple-500">Create Event </button>
                </Link>
                <Link to="/userInvites">
                    <button className="rounded-full leading-none border-2 border-purple-700 hover:bg-white hover:text-purple-500 p-3 m-2 font-mono text-purple-500">Check Invites </button>
                </Link>
                <Link to="/Home">
                    <button className="rounded-full leading-none border-2 border-purple-700 hover:bg-purple-300 hover:text-white p-3 m-2 font-mono text-purple-500">Sign Out </button>
                </Link>
            </div>
            
                <img className='rounded-lg pl-20 mt-8 mr-15 w-1/2  ' src='./images/nightphone.png' />
            
        </div>
    )

}


export default LoggedIn;