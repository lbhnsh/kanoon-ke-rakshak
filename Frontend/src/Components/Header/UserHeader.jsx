import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useLogOut } from "../Hooks/useLogOut";

export default function UserHeader() {
  const { user } = useAuthContext();
  const { logout } = useLogOut();
  return (
    <header className='hidden lg:flex bg-gray-900 items-center decoration-0 justify-between text-4xl 1500:text-5xl shadow border-y-2 border-black z-100 p-0 m-0 h-32 w-full'>
      <div className='hidden 1500:flex items-center'>
        <img className='ml-6 w-20' src='Assets/Logo.png' alt='' />
      </div>

      <div className='text-white flex items-center '>
        <ul className='flex flex-row font-medium space-x-8 items-center mb-0'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `no-underline block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-red-700" : "text-white"
                } lg:hover:bg-transparent lg:border-0 hover:text-red-700 `
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/assistant'
              className={({ isActive }) =>
                `no-underline block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-red-700" : "text-white"
                } lg:hover:bg-transparent lg:border-0 hover:text-red-700 `
              }
            >
              Assistant
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/search'
              className={({ isActive }) =>
                `no-underline block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-red-700" : "text-white"
                } lg:hover:bg-transparent lg:border-0 hover:text-red-700 `
              }
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/lawgpt'
              className={({ isActive }) =>
                `no-underline block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-red-700" : "text-white"
                } lg:hover:bg-transparent lg:border-0 hover:text-red-700 `
              }
            >
              LawGpt
            </NavLink>
          </li>
        </ul>
      </div>

      <div
        className='flex items-center'
        onClick={() => {
          if (user) {
            logout();
          }
        }}
      >
        <Link
          to='/login'
          className='text-white hover:bg-black focus:ring-4 font-medium rounded-xl px-4 md:px-5 py-2 md:py-2.5 mr-2 focus:outline-none no-underline'
        >
          {user ? (
            <p className='mb-0'>Logout</p>
          ) : (
            <p className='mb-0'>Login</p>
          )}
        </Link>
        <Link to='/profile'>
          <img
            className='w-20 lg:rounded-full mr-4 ml-3'
            src='https://assets.leetcode.com/users/default_avatar.jpg'
          />
        </Link>
      </div>
    </header>
  );
}