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
  
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [googleCreatedUserEmail, setGoogleCreatedUserEmail] = useState("");
  // user er creation jokhon puropuri sesh hoye jabe tokhon setCreatedUserEmail korbo
  const [token] = useToken(createdUserEmail);
  const [googleToken] = useToken(googleCreatedUserEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }
  if (googleToken) {
    navigate("/");
  }
  const { user, loading } = useContext(AuthContext);
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        // console.log("user", user);
        setGoogleCreatedUserEmail(user.email);
        toast.success("Sign Up Successfully");
        const userInfo = {
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
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
        // console.log(user);
        toast.success("Sign Up Successfully");

        // console.log(user.email ,user.password);
        
    const image = data.image[0];
    // console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          // resaleprice
          // :
          // "300"
          // sellerName
          .then((res) => res.json())
          .then((imgData) => {
            if (imgData.success) {
              const userInfo = {
              displayName: data.name,
              photoURL: imgData.data.url,

              role: data.role,
            };
          updateUser(userInfo)
            .then(() => {
              saveUser(data.name, data.role, data.photo, data.email);
              // console.log("ROle",saveUser);
            })
            .catch((error) => console.log(error));  }
          });
        

       

        
      })
      .catch((error) => {
        //  console.log(error);
        setSignUpError(error.message);
      });
  };
  const saveUser = (name, role, photo, email) => {
   
    const individualUser = { name, role, photo, email };
    fetch("https://booksify-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(individualUser),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // getUserToken(email);

        if (data.acknowledged) {
          setCreatedUserEmail(email);
        } else {
          navigate("/");
        }
      });
  };
  // const getUserToken = (email) => {
  //   fetch(`https://booksify-server.vercel.app/jwt?email=${email}`)
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
                    <label className="uppercase flex mb-2   text-xs font-semibold">
                      Upload Your Photo
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-primary-300 group">
                        <div className="flex flex-col items-center justify-center pt-7">
                          <svg
                            className="w-10 h-10 text-primary group-hover:text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                          <p className="lowercase text-sm text-gray-400 group-hover:text-primary pt-1 tracking-wider">
                            Select a photo
                          </p>
                        </div>
                        <input
                          type="file"
                          {...register("image", {
                            required: "Image is Required",
                          })}
                          className="hidden"
                        />
                      </label>
                    </div>
                    {errors.photo && (
                      <p className="text-red-500">{errors.photo.message}</p>
                    )}
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
