import React, { useEffect } from 'react';
import video from "../../assets/video.mp4";
import { getProduct } from '../../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Products from "../Home/product";

const Homepage = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className=''>
      <div className=''>
        <video className='w-full h-screen object-cover' autoPlay muted loop>
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-3xl font-bold">
        <p className="mb-4">Let's Explore The Nature Together</p>
        <button type='button' className="text-white bg-gradient-to-br from-green-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Explore
        </button>
      </div>
      <h2 className='text-4xl'>All Packages</h2>
      <div className='grid grid-cols-4 gap-4 containers' id='containers'>
        {products && products.map((product) =>
          <Products key={product.id} product={product} />
        )}
      </div>
    </div>
  );
};

export default Homepage;
