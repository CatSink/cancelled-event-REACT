import React from 'react';
import Greeting from './greeting'
import { Link } from 'react-router-dom';

function LoggedIn() {

    return (
        <div className="container my-1 ml-40 bg-black h-screen" >
            <Greeting />
            <div className="text-center text-white">
                No plans yet
            </div>
            <div className='flex flex-row justify-center button container p-4'>
                <Link to="/createInvite">
                    <button className="rounded-full leading-none border-2 border-purple-700 hover:bg-purple-500 hover:text-white p-3 m-2 font-mono text-purple-500">  Create Event <i class="fa-regular fa-pen-to-square"></i></button>
                </Link>
                <Link to="/userInvites">
                    <button className="rounded-full leading-none border-2 border-purple-700 hover:bg-white hover:text-purple-500 p-3 m-2 font-mono text-purple-500"> Check Invites <i class="fa-regular fa-envelope"></i> </button>
                </Link>
                <Link to="/Home">
                    <button className="rounded-full leading-none border-2 border-purple-700 hover:bg-purple-300 hover:text-white p-3 m-2 font-mono text-purple-500">  Sign Out <i class="fa-solid fa-arrow-right-from-bracket"></i> </button>
                </Link>
            </div>
            
            <div className="flex justify-center">
                <img className='rounded-full p-20 mt-5 w-1/2' src='./images/night.png' /> 
            </div> 
            
        </div>
    )

}


export default LoggedIn;