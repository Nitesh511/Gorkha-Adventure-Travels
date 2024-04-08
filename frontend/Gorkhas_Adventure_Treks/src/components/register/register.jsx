import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="bg-gray-50">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-8 sm:max-w-md xl:p-0 dark:border-white-900 mt-28">
        <div className="p-2 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray">
            Sign Up
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
          <div>
              <label
                htmlFor="email"
                className="block mb-2  text-1xl font-medium text-gray-900 dark:text-gray "
              >
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Hestin"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2  text-1xl font-medium text-gray-900 dark:text-gray "
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-1xl font-medium text-gray-900 dark:text-gray"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
    
            <button
              type="submit"
              className="w-full text-white  bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-1xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign Up
            </button>
            <p className="text-1xl font-bold text-gray dark:text-gray">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-red-500 hover:underline ">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register
