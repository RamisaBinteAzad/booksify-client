import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
//  import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login.jpg";
import bglogin from "../../assets/images/bg.jpg";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";
 

const Login = () => {
       const { signIn } = useContext(AuthContext);
       // Error
       const [logInError, setLogInError] = useState("");
       const [loginUserEmail, setLoginUserEmail] = useState("");
       const [token] = useToken(loginUserEmail);
       const location = useLocation();
  const navigate = useNavigate();
   const from = location.state?.from?.pathname || "/";
   if (token) {
     navigate(from, { replace: true });
   }
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        // console.log(user);
          
        toast.success("Login Successfully");
         navigate(from, { replace: true });
         
      })
      .catch((error) => console.error(error));
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

 

     const handleLogin = (data) => {
       // console.log(data.email, data.password);
       setLogInError("");
       signIn(data.email, data.password)
         .then((result) => {
           const user = result.user;
                 toast.success("Login Successfully");
           console.log(user);
            setLoginUserEmail(data.email);
         
         })
         .catch((error) => {
          //  console.log(error.message);
           setLogInError(error.message);
         });
     };



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
                src={login}
                alt=""
              />
            </figure>
            <div
              className="flex flex-wrap content-center justify-center  lg:rounded-r-lg rounded-b bg-white p-4"
              //   style="width: 24rem; height: 32rem;"
            >
              <div className="w-72">
                <h1 className="text-4xl font-semibold text-primary  ">
                  Login To Your Account
                </h1>
                <p className="font-bold">Login using Social Networks</p>

                <form onSubmit={handleSubmit(handleLogin)} className="mt-4">
                  <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold">
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
                    <label className="mb-2 block text-xs font-semibold">
                      Password
                    </label>
                    <input
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters  ",
                        },
                      })}
                      type="password"
                      placeholder="*****"
                      className="block w-full rounded-md border border-gray-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary py-1 px-1.5 text-gray-500"
                    />
                  </div>
                 
                  <div className="mb-3 flex flex-wrap content-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="mr-1 checked:bg-purple-700"
                    />{" "}
                    <label
                      htmlFor="remember"
                      className="mr-auto text-xs font-semibold"
                    >
                      Remember for 30 days
                    </label>
                    <Link
                      href="#"
                      className="text-xs font-semibold text-primary"
                    >
                      Forgot password?
                    </Link>
                    {errors.password && (
                      <p className="text-error" role="alert">
                        {errors.password?.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-3">
                    <button className="mb-1.5 block w-full text-center text-white  bg-orange-600 hover:bg-primary px-2 py-1.5 rounded-md">
                      Sign in
                    </button>
                    <div className="divider">OR</div>
                  </div>
                  <div>
                    {logInError && <p className="text-red-600">{logInError}</p>}
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
                <div>
                  {logInError && <p className="text-red-600">{logInError}</p>}
                </div>

                <div className="text-center">
                  <span className="text-xs  font-semibold">
                    Don't have account?
                  </span>
                  <Link
                    to="/signup"
                    className="text-xs font-semibold text-primary"
                  >
                    Sign up
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

export default Login;
