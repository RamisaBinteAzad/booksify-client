import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import './DashboardLayout.css'
import productAdd from '../assets/icons/add-to-basket.png'
import myproduct from "../assets/icons/shipping.png";
import useSeller from "../hooks/useSeller";
const DashboardLayout = () => {
   
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
  console.log(user)
  return (
    <div>
      <Navbar></Navbar>

      {/* Drawer */}

      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
          {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        </div>
        <div className="drawer-side text-center">
          <label
            htmlFor="dashboard-drawer"
            className="  drawer-overlay"
          ></label>

          <ul className="menu  pt-9   w-80  bg-dashboard text-white  px-auto">
            {/* <!-- Sidebar content here --> */}

            <div className="mx-auto ">
              {/* <FaUser></FaUser> */}
              <div className="items-center flex flex-col">
                {user?.photoURL ? (
                  <div className="avatar">
                    <div className="w-20 rounded-full">
                      <img src={user?.photoURL} alt="" />
                    </div>
                  </div>
                ) : (
                  <FaUser className=" text-3xl  w-24 "></FaUser>
                )}
                <p className="w-full">{user?.displayName}</p>
              </div>

              <div className="mt-8">
                {isSeller && (
                  <>
                    <>
                      <li>
                        <Link to="/dashboard">
                          <img src={productAdd} className="w-5 " alt="" />
                          Add A Product
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard/myproducts">
                          {" "}
                          <img src={myproduct} className="w-5 " alt="" />
                          My Products
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard/mybuyers">My Buyers</Link>
                      </li>
                    </>
                  </>
                )}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
