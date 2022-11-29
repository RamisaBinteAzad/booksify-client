import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHome,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import logo from "../../../assets/icons/logo2 (4).png";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="footer   p-10 bg-base-200   ">
        <div className="">
          <div className="flex  ">
            <img className="" src={logo} alt="" />
            <div className="  ">
              <h2 className="text-2xl items-center justify-center   font-semibold text-primary ">
                <span className="text-5xl">B</span>ooks
                <span className="text-black">ify</span>
              </h2>
            </div>
          </div>
          <p className="font-bold text-slate-600">
            Booksify is the fastest online marketplace. Start <br /> buying
            things instantly with our simple navigation <br /> and you can sell
            your books to the customers
            <br /> according to their location.  
          </p>
        </div>
        <div>
          <span className="  font-bold text-xl  text-primary">Categories</span>
          <Link className="link link-hover text-slate-600">
            University Books
          </Link>
          <Link className="link link-hover text-slate-600">
            Engineering Books
          </Link>
          <Link className="link link-hover text-slate-600">Medical Books</Link>
        </div>
        <div>
          <span className="text-uppercase font-bold text-xl  text-primary">
            Pages
          </span>
          <Link className="link link-hover text-slate-600">Home</Link>
          <Link className="link link-hover text-slate-600">Categories</Link>
          <Link className="link link-hover text-slate-600">Blogs</Link>
          <Link className="link link-hover text-slate-600">Login</Link>
          <Link className="link link-hover text-slate-600">Dashboard</Link>
        </div>
        <div>
          <span className=" font-bold text-xl  text-primary">
            Contact Details
          </span>
          <Link className="link link-hover text-slate-600">
            {" "}
            <div className="flex">
              <FaHome className="text-xl  text-primary mr-3"></FaHome>
              Hotel Suite Palace, House# 31, <br />
              Road# 13, Block# K Baridhara, <br />
              Dhaka 1212
            </div>
          </Link>
          <Link className="link link-hover text-slate-600">
            <div className="flex">
              <FaEnvelope className="  me-3 text-xl  text-primary mr-3 "></FaEnvelope>
              info@example.com
            </div>
          </Link>
          <Link className="link link-hover text-slate-600">
            <div className="flex">
              <FaPhoneAlt className="text-xl  text-primary  mr-3"></FaPhoneAlt>
              +01777-772763
            </div>
          </Link>
        </div>

       
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <span className="text-dark fw-bold"> © 2022 Copyright:</span>
          <Link className="text-reset  dark-blue fw-bold" to="/">
            <span className="me-2  mt-2 fw-bold text-primary">Books</span>
            <span className="  text-black my-0">ify</span>
          </Link>
        </div>
        <div className="md:place-self-center md:justify-self-end text-primary">
          <div className="grid grid-flow-col gap-4  ">
            <a className="text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a className="text-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
