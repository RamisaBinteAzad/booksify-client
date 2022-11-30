import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import signUp from "../../assets/images/sign-up-2.webp";
import bglogin from "../../assets/images/bg.jpg";
import { FaEnvelope, FaImage, FaLock, FaUser } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import Loading from "../Shared/Loading/Loading";
import useToken from "../../hooks/useToken";
// import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
   const { createUser, updateUser } = useContext(AuthContext);
   const [signUpError, setSignUpError] = useState("");
   const [createdUserEmail, setCreatedUserEmail] = useState("");
   // user er creation jokhon puropuri sesh hoye jabe tokhon setCreatedUserEmail korbo
   const [token] = useToken(createdUserEmail);
   const navigate = useNavigate();
   if (token) {
     navigate("/");
   }
  const { user, loading } = useContext(AuthContext);
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
         console.log("user", user);
       toast.success("Sign Up Successfully");
        const userInfo = {
          displayName: user.displayName,
          photoURL: user.photoURL,
          email:user.email,
          role: "Buyer",
        };
        // console.log(userInfo);
        updateUser(userInfo)
          .then(() => {
             
              saveUser(
                user.displayName,
                userInfo.role,
                user.photoURL,
                user.email
              );
           
              
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        //  console.log(error);
        setSignUpError(error.message);
      });
  };

 

  const handleSignUp = (data) => {
    // console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Sign Up Successfully");
      
        // console.log(user.email ,user.password);
       
        const userInfo = {
          displayName: data.name,
          photoURL: data.photo,

          role: data.role,
        };
          

        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.role, data.photo, data.email);
            // console.log("ROle",saveUser);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        //  console.log(error);
        setSignUpError(error.message);
      });
  };
  const saveUser = (name, role, photo, email) => {
    const individualUser = { name, role, photo, email };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(individualUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // getUserToken(email); 

          if (data.acknowledged) {
              
             setCreatedUserEmail(email);
           
          } else {
         
          navigate("/");
              
          }
        });
       
     
       
    
  
  };
    // const getUserToken = (email) => {
    //   fetch(`http://localhost:5000/jwt?email=${email}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       if (data.accessToken) {
             
    //         localStorage.setItem("accessToken", data.accessToken);
    //         navigate("/");
    //       }
    //     });
    // };

if (loading) {
   return <Loading></Loading>;
}
  return (
    <div
      className="  flex justify-center items-center   "
      style={{
        backgroundImage: `url(${bglogin})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className=" card   lg:px-28 lg:py-16  shadow-xl  ">
        <div className="card-body">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2">
            <figure>
              <img
                className="  w-full h-full lg:rounded-l-lg
                  lg:rounded-rt-none rounded-t
              "
                src={signUp}
                alt=""
              />
            </figure>
            <div
              className="flex flex-wrap content-center justify-center  lg:rounded-r-lg rounded-b bg-white p-4"
              //   style="width: 24rem; height: 32rem;"
            >
              <div className="w-72">
                <h1 className="text-4xl font-semibold text-primary  ">
                  Sign Up
                  <span className="text-4xl text-black font-bold text-center">
                    {" "}
                    Your Account
                  </span>
                </h1>

                <form onSubmit={handleSubmit(handleSignUp)} className="mt-4">
                  <div className="mb-3">
                    <label className="flex  mb-2  text-xs font-semibold">
                      <FaUser className=" mr-2 text-primary"></FaUser>
                      Full Name
                    </label>
                    <input
                      {...register("name", {
                        required: "Name is required",
                      })}
                      type="text"
                      placeholder="Enter your Name"
                      className="block w-full rounded-md border border-gray-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary py-1 px-1.5 text-gray-500"
                    />
                    {errors.name && (
                      <p className="text-error" role="alert">
                        {errors.name?.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="flex  mb-2   text-xs font-semibold">
                      <FaEnvelope className=" mr-2 text-primary"></FaEnvelope>
                      Email
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                      })}
                      type="email"
                      placeholder="Enter your email"
                      className="block w-full rounded-md border border-gray-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary py-1 px-1.5 text-gray-500"
                    />
                    {errors.email && (
                      <p className="text-error" role="alert">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="flex mb-2   text-xs font-semibold">
                      <FaLock className=" mr-2 text-primary"></FaLock> Password
                    </label>
                    <input
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters  ",
                        },
                        pattern: {
                          value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                          message:
                            "Password must have uppercase, number and special characters",
                        },
                      })}
                      type="password"
                      placeholder="*****"
                      className="block w-full rounded-md border border-gray-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary py-1 px-1.5 text-gray-500"
                    />
                    {errors.password && (
                      <p className="text-red-600" role="alert">
                        {errors.password?.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="flex mb-2   text-xs font-semibold">
                      <FaImage className=" mr-2 text-primary"></FaImage> Photo
                      Url
                    </label>
                    <input
                      {...register("photo" )}
                      type="text"
                      placeholder="Upload Profile Pic"
                      className="block w-full rounded-md border border-gray-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary py-1 px-1.5 text-gray-500"
                    />
                    
                  </div>
                  <div className="form-control w-full max-w-xs mb-3">
                    <label className="label">
                      <label className="mb-2 block text-xs font-semibold">
                        Select Which Account will you creat
                      </label>
                    </label>
                    <select
                      name="role"
                      className="select select-bordered "
                      defaultValue="Buyer"
                      {...register("role")}
                    >
                      <option value="Buyer">Buyer</option>
                      <option value="Seller">Seller</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <button className="mb-1.5 block w-full text-center text-white  bg-orange-600 hover:bg-primary px-2 py-1.5 rounded-md">
                      Sign Up
                    </button>
                    <div className="divider">OR</div>
                  </div>
                  <div>
                    {signUpError && (
                      <p className="text-red-600">{signUpError}</p>
                    )}
                  </div>
                </form>
                <button
                  onClick={handleGoogleSignIn}
                  className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md"
                >
                  <img
                    className="w-5 mr-2"
                    src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                    alt=""
                  />
                  Sign in with Google
                </button>

                <div className="text-center">
                  <span className="text-xs  font-semibold">
                    Already A member?
                  </span>
                  <Link
                    to="/login"
                    className="text-xs font-semibold text-primary"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
