import React from 'react';
import { Link } from 'react-router-dom';
import MyCarousel from '../components/Carousel';


const Home = () => {

  return (


    <div className="">
      {/* <div className="card-header bg-dark text-center"> */}
      {/* <h1>Welcome to Cancelled!</h1> */}
      {/* <div>
          <img 
          src=''
          alt=''/>
        </div> */}
      {/* </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="flex flex-col  justify-center items-center h-screen bg-white">

       
          <MyCarousel />
        </div>
        <div className="flex h-screen flex-col   bg-black">
        <img src='./images/homescreenlogo.png' />
          <form>

            {/* <div className=" pl-40 p-20  bg-blue-500 rounded-xl">
                <div>
                  <Label
                    htmlFor="email1"
                    value="Your email"
                  />

                  <TextInput
                    id="email1"
                    placeholder="name@flowbite.com"
                    required
                    type="email"
                  />
                  

                  <div>
                    <div>
                      <Label
                        htmlFor="password1"
                        value="Your password"
                      />
                    
                    <TextInput
                      id="password1"
                      required
                      type="password"
                    />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                      Remember me
                    </Label>
                  </div>
                </div>
                </div> */}
            <div className='flex justify-center mt-auto'>

              <Link to="/Login">
                <button className="rounded-full bg-blue-500  hover:bg-blue-300 p-3 m-2 font-mono text-white">Log in</button>
              </Link>

              <Link to="/Signup">
                <button className="rounded-full bg-purple-900 hover:bg-purple-300 p-3 m-2 font-mono text-white">Sign Up</button>
              </Link>
            </div>
          </form>
        </div>


      </div>
    </div >

  );
};

export default Home;




