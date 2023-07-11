// imports
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
// import { Button, Checkbox, Label, TextInput } from 'flowbite-react';


// functionality
function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // returns
  return (

    <div>



      {/* home icon */}
      <nav className='bg-gradient-to-r from-purple-900  from-10% via-purple-500 via-90% to-purple-500 to-30% '>
      <Link className='m-4 font-mono text-white justify-center' to="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
      </Link>
      </nav>
      <div className="grid grid-cols-1  md:grid-cols-2 justify-center bg-gradient-to-r from-purple-900  from-10% via-purple-500 via-90% to-purple-500 to-30% h-screen">

        {/* <div className="flex flex-col  justify-center items-center">
          <img src='./images/login.svg' />
        </div> */}
          <form onSubmit={handleFormSubmit} className=' text-center w-1/2 rounded-lg '>
            <h2 className=" justify-center mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Login to Your Account</h2>
            <div className="flex-row space-between my-2 p-10 ">
              <label htmlFor="email" className="block text-sm font-medium leading-6 label  text-white">Email address:</label>
              <input className='border-2 border-purple-500 rounded-lg bg-transparent text-white'
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="pwd" className="block text-sm font-medium leading-6 label2 text-white">Password:</label>
              <input className='border-2 border-purple-500 rounded-lg bg-transparent  text-white'
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
            {error ? (
              <div>
                <p className="error-text">The provided credentials are incorrect</p>
              </div>
            ) : null}
            <div className="flex-row flex-end p-6">
              <button type="submit" className="rounded-full leading-none bg-purple-600 hover:bg-purple-400  p-3 m-5 font-mono text-white">Login</button>
              <div><Link className='font-mono text-purple-300 hover:underline' to="/signup">Signup</Link></div>
            </div>
          </form>
          <div className="flex flex-col  justify-center items-center">
          <img className='mt-3 mr-11' src='./images/login.svg' />
        </div>
        </div>
      </div>
    
  );
}

export default Login;
