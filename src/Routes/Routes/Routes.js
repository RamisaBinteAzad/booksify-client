import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
 
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },

  {
    path: "/dashboard",

    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    // errorElement: <DisplayError></DisplayError>,
    children: [
      // //  /users
      // {
      //   path: "/dashboard/allusers",
      //   element: (
      //     <AdminRoute>
      //       <AllUsers></AllUsers>
      //     </AdminRoute>
      //   ),
      // },
      {
        path: "/dashboard",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      // {
      //   path: "/dashboard/payment/:id",
      //   element: (
      //     <AdminRoute>
      //       <Payment></Payment>
      //     </AdminRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/bookings/${params.id}`),
      // },
    ],
  },
]);
export default router;
