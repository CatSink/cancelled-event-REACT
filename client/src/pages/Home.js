import React from 'react';
import { Link } from 'react-router-dom';
import MyCarousel from '../components/Carousel';


const Home = () => {

  return (


    <div>


      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="flex flex-col  justify-center items-center h-screen bg-white">


          <MyCarousel />
        </div>
        <div className="flex h-screen flex-col   bg-black">
          <img src='./images/home3.png' />
          <form>


            <div className='flex justify-center mt-auto'>

              <Link to="/Login">
                <button className="rounded-full leading-none border-2 border-white hover:bg-white hover:text-purple-500 p-3 m-2 font-mono text-white">Log in</button>
              </Link>

              <Link to="/Signup">
                <button className="rounded-full leading-none border-2 border-purple-700 hover:bg-purple-500 hover:text-white p-3 m-2 font-mono text-purple-500">Sign Up</button>
              </Link>
            </div>
          </form>
        </div>


      </div>
    </div >

  );
};

export default Home;




