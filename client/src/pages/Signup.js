import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    document.location.replace("/userHome")
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      
   
     {/* home icon */}
     <nav className=' p-2 bg-gradient-to-l from-purple-900  from-10% via-purple-500 via-90% to-purple-500 to-30% '>
     <Link className='m-4 font-mono text-white justify-center' to="/"><i class="fa-solid fa-house-chimney fa-lg"></i>
     </Link>
     </nav>

    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 justify-items-center bg-gradient-to-l from-purple-900  from-10% via-purple-500 via-90% to-purple-500 to-30% h-screen">
      <div>
        <img src='./images/ladder.svg'/>
      </div>
      
     
     
      <form className="place-self-stretch flex flex-col w-full mx-auto md:pl-12 md:ml-28 " onSubmit={handleFormSubmit}>
      <h2 className=' mt-2 m-1  text-2xl font-bold leading-9 tracking-tight text-white'>Signup</h2>
        <div className="flex flex-col w-full  my-2">
          <label className='text-purple-300'htmlFor="firstName">First Name:</label>
          <input className='w-1/2 block border-2 border-gray-300 rounded-lg bg-transparent text-white'
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full  my-2">
          <label className='text-purple-300'htmlFor="lastName">Last Name:</label>
          <input className='w-1/2 block border-2 border-gray-300 rounded-lg bg-transparent text-white'
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col  w-full  my-2">
          <label className='text-purple-300' htmlFor="email">Email:</label>
          <input className='w-1/2 block border-2 border-gray-300  rounded-lg bg-transparent text-white'
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full  my-2">
          <label className='text-purple-300'htmlFor="pwd">Password:</label>
          <input className='w-1/2 block border-2 border-gray-300  rounded-lg bg-transparent text-white'
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end text-purple-500">
          <button className="  rounded-full leading-none bg-white hover:bg-purple-400 p-3 mt-5 mb-2 ml-48 font-mono text-purple-600" type="submit">Signup</button>
          <div className='ml-48 p-4'><Link className='font-mono text-purple-300 hover:underline' to="/login">login</Link></div>
        </div>
      </form>
      </div>
     
    </div>
   
  );
}

export default Signup;
