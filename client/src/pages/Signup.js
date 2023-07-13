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
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
     <Link className='m-4 font-mono text-white justify-center' to="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
     </svg>
     </Link>
     </nav>

    <div className="grid grid-cols-1 md:grid-cols-2 justify-center bg-gradient-to-l from-purple-900  from-10% via-purple-500 via-90% to-purple-500 to-30% h-screen">
      <div>
        <img src='./images/ladder.svg'/>
      </div>
      
     
     
      <form className="flex flex-col w-full mb-5 md:pl-12 md:ml-8" onSubmit={handleFormSubmit}>
      <h2 className='justify-center mt-10 m-1 text-center text-2xl font-bold leading-9 tracking-tight text-purple-500'>Signup</h2>
        <div className="flex flex-col  w-full  my-2">
          <label className='text-purple-500'htmlFor="firstName">First Name:</label>
          <input className='w-1/2 block border-2 border-purple-500 rounded-lg bg-transparent text-white'
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full  my-2">
          <label className='text-purple-500'htmlFor="lastName">Last Name:</label>
          <input className='w-1/2 block border-2 border-purple-500 rounded-lg bg-transparent text-white'
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col  w-full  my-2">
          <label className='text-purple-500' htmlFor="email">Email:</label>
          <input className='w-1/2 block border-2 border-purple-500 rounded-lg bg-transparent text-white'
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full  my-2">
          <label className='text-purple-500'htmlFor="pwd">Password:</label>
          <input className='w-1/2 block border-2 border-purple-500 rounded-lg bg-transparent text-white'
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end text-purple-500">
          <button className="  rounded-full leading-none bg-white hover:bg-purple-400  p-3 m-5 font-mono text-purple-600" type="submit">Signup</button>
          <div><Link className='font-mono text-purple-300 hover:underline' to="/login">login</Link></div>
        </div>
      </form>
      </div>
     
    </div>
   
  );
}

export default Signup;
