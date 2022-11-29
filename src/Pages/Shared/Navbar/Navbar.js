import React, { useContext } from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";
 
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logo2 (4).png";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
   
  
   
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

     
    
  return (
    <div className="navbar bg-base-100 lg:container-fluid mx-auto px-4  sticky top-0 z-50  shadow-lg font-bold">
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
            className="text-3xl menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="#" className="justify-between">
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
              <ul className="p-2 shadow-lg">
                <li className="  bg-white">
                  <Link>University</Link>
                </li>
                <li className="  bg-white">
                  <Link>Engineering</Link>
                </li>
                <li className=" bg-white">
                  <Link>Medical</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            {user?.uid ? (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="w-full flex flex-wrap items-center justify-between lg:px-6">
          <div className=" items-center">
            <Link
              className="flex items-center w-10 text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 ml:0 lg:mt-0 "
              to="/"
            >
              <img src={logo} alt="" loading="lazy" />
              <div className="flex flex-col ">
                <Link className=" normal-case text-3xl text-primary  ">
                  <span className="text-5xl">B</span>ooks
                  <span className="text-black">ify</span>
                </Link>
                <small className="text-orange-600 px-4">Books For You </small>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="text-primary">
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to="#">
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
            <ul className="p-2 shadow-lg   ">
              <li className="  bg-white">
                <Link>University</Link>
              </li>
              <li className="  bg-white">
                <Link>Engineering</Link>
              </li>
              <li className=" bg-white">
                <Link>Medical</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          {user?.uid ? (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div className="navbar-end   px-4">
        {user?.uid ? (
          <Link
            to="/login"
            className="btn invisible lg:visible md:visible btn-md border-0 bg-orange-600   text-white font-medium mr-2 "
          >
            <button onClick={handleLogOut}>Sign Out</button>

            <FaSignInAlt className="ml-3"></FaSignInAlt>
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn btn-md border-0 bg-gradient-to-r lg:visible from-blue-500 to-slate-600 text-white font-medium mr-2"
          >
            Login
            <FaSignInAlt className="ml-3"></FaSignInAlt>
          </Link>
        )}
        {user ? (
          <div className="dropdown dropdown-end  block md:hidden lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user?.photoURL ? (
                  <img title={user?.displayName} src={user.photoURL} alt="" />
                ) : (
                  <img src="" alt="" />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link>Settings</Link>
              </li>
              {user?.uid ? (
                <Link
                  to="/login"
                  className="btn btn-md border-0 bg-orange-600   text-white font-medium mr-2 "
                >
                  <button onClick={handleLogOut}>Sign Out</button>

                  <FaSignInAlt className="ml-3"></FaSignInAlt>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-md border-0 bg-gradient-to-r from-blue-500 to-slate-600 text-white font-medium mr-2"
                >
                  <button>
                    Login
                    <FaSignInAlt className="ml-3"></FaSignInAlt>
                  </button>
                </Link>
              )}
            </ul>
          </div>
        ) : (
          ""
        )}

        {/* <Link
          to="/login"
          className="btn btn-md border-0 bg-gradient-to-r from-blue-500 to-slate-600 text-white font-medium mr-2"
        >
          Login
          <FaSignInAlt className="ml-3"></FaSignInAlt>
        </Link> */}

        <label tabIndex={0} className="  hidden lg:block  md:block   avatar">
          <div className="w-10  rounded-full">
            {user?.photoURL ? (
              <img title={user?.displayName} src={user?.photoURL} alt="" />
            ) : (
              <FaUser className="w-24"></FaUser>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
