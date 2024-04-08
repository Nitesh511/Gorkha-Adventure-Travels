import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ product }) => {
  return (
    <div className="p-4">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/product/${product._id}`}>
            <img className="p-8 rounded-t-lg" src="https://cdn.mos.cms.futurecdn.net/D9bzCVeZLHQnZ6bUWvAkrW-1200-80.jpg" alt="product image" />
          </Link>
          <div className="px-5 pb-5">
            <Link to={`/product/${product._id}`}>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
            </Link>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{product.description}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xl font-bold text-gray-900 dark:text-white">Rs: {product.price}</span>
              <Link to={`/product/${product._id}`} className="text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-600">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Products;
