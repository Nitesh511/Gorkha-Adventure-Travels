import React, { useEffect } from 'react';
import video from "../../assets/video.mp4";
import { getProduct } from '../../actions/productActions';
import { useDispatch } from 'react-redux';

const Homepage = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getProduct());
  },[dispatch]);
  return (
    <div className='relative w-full h-full'>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-3xl font-bold">
        <p className="mb-4">Lets Explore The Nature Together</p>
        <button type='button' className="text-white bg-gradient-to-br from-green-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Explore
        </button>
      </div>
      <video className='w-full h-screen object-cover' autoPlay muted loop>
        <source src={video} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Homepage;
