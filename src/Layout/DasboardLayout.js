import React, { useContext } from 'react';
import Navbar from "../Pages/Shared/Navbar/Navbar";
 
import productAdd from "../assets/icons/add-to-basket.png";
import myproduct from "../assets/icons/shipping.png";
import useSeller from "../hooks/useSeller";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import { AuthContext } from '../contexts/AuthProvider';
import { Link, Outlet } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
const DasboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);

  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  // console.log(user)
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
        <div className="drawer-content bg-slate-100">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side text-center">
          <label
            htmlFor="dashboard-drawer"
            className="  drawer-overlay"
          ></label>

          <ul className="menu  pt-9   w-80  bg-[#003D61] text-white  px-auto">
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

              <div className="mt-8 ">
                {isAdmin && (
                  <>
                    <li>
                      <Link to="/dashboard/allbuyers">All Buyers</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/allsellers">All Sellers</Link>
                    </li>
                  </>
                )}
                {isSeller && (
                  <>
                    <li>
                      <Link to="/dashboard/addProduct">
                        <img src={productAdd} className="w-5 " alt="" />
                        Add A Product
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/myProducts">
                        {" "}
                        <img src={myproduct} className="w-5 " alt="" />
                        My Products
                      </Link>
                    </li>
                  </>
                )}
                {isBuyer && (
                  <>
                    <li>
                      <Link to="/dashboard">All Orders</Link>
                    </li>
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

export default DasboardLayout;