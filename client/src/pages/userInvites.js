import React from 'react';
import Greeting from './greeting'
import { Link } from 'react-router-dom';

function CreatedEvents() {

    return (
        <div className="container my-1 className='bg-black ">
            <Link to="/userHome">←Back to Home</Link>
            <Greeting />
            <div className="text-center">
                You have not been invited to anything yet!
            </div>
        </div>
    )

}


export default CreatedEvents;