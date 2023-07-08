import React from 'react';
import Greeting from './greeting'
import { Link } from 'react-router-dom';

function LoggedIn() {

    return (
        <div className="container my-1">
            <Greeting />
            <div className="text-center">
                No plans yet
            </div>
            <Link to="/createInvite">
                <button className="btn btn-primary">Create Event </button>
            </Link>
            <Link to="/userInvites">
                <button className="btn btn-primary">Check Invites </button>
            </Link>
            <Link to="/Home">
                <button className="btn btn-primary">Sign Out </button>
            </Link>
        </div>
    )

}


export default LoggedIn;