import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Canceled!</h1>
      </div>
      <Link to="/Login">
        <button className="btn btn-primary">Log in  </button>
      </Link>

      <Link to="/Signup">
        <button className="btn btn-primary">Sign Up</button>
      </Link>

      {/* only here to find page */}
      {/* <Link to="/createInvite">
        <button className="btn btn-primary">Invite </button>
      </Link> */}

      {/* only here to find page */}
      <Link to="/userHome">
        <button className="btn btn-primary">Home </button>
      </Link>
    </div >
  );
};

export default Home;
