import React from 'react';
import { useLocation } from 'react-router-dom';

function NotFound() {
  let location = useLocation();
  return (
    <div className="card bg-white card-rounded w-50 p-11">
      <div className="card-header bg-dark text-center flex">
        <h1>
          No match for <code>{location.pathname}</code>
        </h1>
        <img src='./images/notfound.svg'/>
      </div>
    </div>
  );
}

export default NotFound;
