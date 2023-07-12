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
    <div className="grid grid-cols-1 content-center justify-items-center p-8 md:grid-cols-2 h-screen  bg-black">
      <div className='bg-black'>
        <img src='./images/signup.png'/>
      </div>
      <div className='w-full'>
      <h2 className=' mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-purple-500'>Signup</h2>
     
      <form className="bg-black flex flex-col w-full md:pl-12 md:ml-8" onSubmit={handleFormSubmit}>
        <div className="flex flex-col  w-full  my-2">
          <label className='text-purple-500'htmlFor="firstName">First Name:</label>
          <input className='w-1/2 block border-2 border-purple-600 rounded-lg bg-transparent text-white'
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full  my-2">
          <label className='text-purple-500'htmlFor="lastName">Last Name:</label>
          <input className='w-1/2 block border-2 border-purple-600 rounded-lg bg-transparent text-white'
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col  w-full  my-2">
          <label className='text-purple-500' htmlFor="email">Email:</label>
          <input className='w-1/2 block border-2 border-purple-600 rounded-lg bg-transparent text-white'
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full  my-2">
          <label className='text-purple-500'htmlFor="pwd">Password:</label>
          <input className='w-1/2 block border-2 border-purple-600 rounded-lg bg-transparent text-white'
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end text-purple-500">
          <button className="  rounded-full leading-none bg-purple-600 hover:bg-purple-400  p-3 m-5 font-mono text-white" type="submit">Signup</button>
          <div><Link className='font-mono text-purple-300 hover:underline' to="/login">login</Link></div>
        </div>
      </form>
      </div>
     
    </div>
  );
}

export default Signup;
