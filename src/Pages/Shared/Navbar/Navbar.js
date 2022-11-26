import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logo2 (4).png";

const Navbar = () => {
    
  return (
    <div className="navbar bg-base-100 lg:container-fluid mx-auto px-4  shadow-lg font-bold">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">
                Categories
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link>University</Link>
                </li>
                <li>
                  <Link>Engineering</Link>
                </li>
                <li>
                  <Link>Medical</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-wrap items-center justify-between lg:px-6">
          <div className=" ">
            <Link
              className="flex items-center w-10 text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 ml:0 lg:mt-0 "
              href="#"
            >
              <img src={logo} alt="" loading="lazy" />
              <Link className=" normal-case text-3xl text-primary  ">
                <span className="text-4xl">B</span>ooks
                <span className="text-black">ify</span>
              </Link>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="text-primary">
            <Link>Home</Link>
          </li>
          <li tabIndex={0}>
            <Link>
              Categories
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2">
              <li>
                <Link>University</Link>
              </li>
              <li>
                <Link>Engineering</Link>
              </li>
              <li>
                <Link>Medical</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end   ">
        <Link to="/login" className="btn btn-sm btn-primary font-thin mr-2">
          Login
        </Link>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt="" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;