import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleAddProduct = (data) => {
    // console.log(data);

    const date = new Date();
    const postedDate = format(date, "PPpp");

    const yearOfPurchase = data.purchaseYear;

    const purchaseYear = yearOfPurchase.split("-")[0];
    const categoryName = data.category.split(":")[1];

    const categoryId = data.category.split(":")[0];

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
        //   console.log(imgData);
        if (imgData.success) {
          // console.log(imgData.data.url);
          const product = {
            categoryId: categoryId,
            categoryName: categoryName,

            description: data.description,
            yearsOfUse: data.durationUsingProduct,
            location: data.location,
            originalprice: data.originalprice,
            productName: data.name,
            productCondition: data.productCondition,
            resaleprice: data.resaleprice,
            sellerName: user?.displayName,
            sellerEmail: user?.email,
            phoneNumber: data.phoneNumber,
            purchaseYear: purchaseYear,
            postedDate: postedDate,
            image: imgData.data.url,
          };
          // console.log("Product", product);

          fetch("https://booksify-server.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              // console.log(result);
              toast.success(`${data.name} book is added successfully`);
              navigate("/dashboard/myproducts");
            });
        }
      });
  };
  const {
    data: categories = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://booksify-server.vercel.app/category");
      const data = await res.json();
      // console.log("data:", data);
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-slate-100 text-center ">
      <h2 className="text-4xl font-bold pt-9">
        <span className="text-primary">Add </span>Products
      </h2>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="  w-full  px-7 py-8 grid md:grid-cols-2 gap-5 ">
          <div className="container mx-auto glass p-7 rounded-2xl">
            <div className="form-control w-full  ">
              <label className="label">
                {" "}
                <span className="label-text font-bold">Product Title</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Product Name is Required",
                })}
                placeholder="Enter your product name"
                className="input  text-gray-600 w-full mx-auto input-md"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                {" "}
                <span className="label-text font-bold">
                  Select Product Category
                </span>
              </label>
              {/* name gulo option e dekhabo jeta backend theke eseche */}
              <select
                {...register("category")}
                id="category"
                name="category"
                className="select input-bordered w-full text-gray-600 font-light "
              >
                <option disabled selected>
                  Select Product Category
                </option>
                {categories.map((category) => (
                  <option
                    key={category._id}
                    value={`${category._id}:${category.name}`}
                  >
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500">{errors.category.message}</p>
              )}
            </div>
            <div className=" flex flex-wrap">
              <div className="w-full  sm:w-1/2">
                <div className="mt-3">
                  <label className="label">
                    {" "}
                    <span className="label-text font-bold">Resale Price</span>
                  </label>
                  <input
                    type="number"
                    {...register("resaleprice", {
                      required: "Price is Required",
                    })}
                    placeholder="৳200"
                    className="input  text-gray-600 w-full mx-auto input-md"
                  />
                  {errors.resaleprice && (
                    <p className="text-red-500">{errors.resaleprice.message}</p>
                  )}
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mt-3">
                  <label className="label">
                    {" "}
                    <span className="label-text font-bold">Original Price</span>
                  </label>

                  <input
                    type="number"
                    {...register("originalprice", {
                      required: "Name is Required",
                    })}
                    placeholder="৳400"
                    className="input  text-gray-600 w-full mx-auto input-md"
                  />
                  {errors.originalprice && (
                    <p className="text-red-500">
                      {errors.originalprice.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="form-control w-full   mb-3">
              <label className="label">
                {" "}
                <span className="label-text font-bold mt-3">
                  Product Condition
                </span>
              </label>

              <div className="flex">
                <div className="form-control">
                  <label htmlFor="Excellent" className="label cursor-pointer">
                    <input
                      {...register("productCondition", {
                        required: "Product condition is Required",
                      })}
                      value="Excellent"
                      type="radio"
                      name="productCondition"
                      id="Excellent"
                      className="radio checked:bg-primary"
                    />
                    <span className="label-text ml-2 mr-5">Excellent</span>
                  </label>
                </div>
                <div className="form-control">
                  <label htmlFor="Good" className="label cursor-pointer">
                    <input
                      {...register("productCondition", {
                        required: "Product condition is Required",
                      })}
                      value="Good"
                      type="radio"
                      name="productCondition"
                      id="Good"
                      className="radio checked:bg-secondary"
                    />
                    <span className="label-text ml-2 mr-5">Good</span>
                  </label>
                </div>
                <div className="form-control">
                  <label htmlFor="Fair" className="label cursor-pointer">
                    <input
                      {...register("productCondition", {
                        required: "Product condition is Required",
                      })}
                      value="Fair"
                      type="radio"
                      name="productCondition"
                      id="Fair"
                      className="radio checked:bg-accent"
                    />
                    <span className="label-text ml-2 mr-5">Fair</span>
                  </label>
                </div>

                {errors.condition && (
                  <p className="text-red-500">{errors.condition.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold mt-2">Description</span>
                </label>
                <textarea
                  {...register("description")}
                  className="textarea textarea-bordered h-24"
                  placeholder="Product Description"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="px-3 ">
            <div className="grid grid-cols-1 mt-6">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
                Upload Product Photo
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

            <div className="form-control w-full  mt-10">
              <label className="label">
                {" "}
                <span className="label-text font-bold">Posted By:</span>
              </label>
              <input
                type="text"
                name="sellerName"
                {...register("sellerName")}
                defaultValue={user?.displayName}
                disabled
                placeholder="(me)"
                className="input   font-bold w-full mx-auto input-md"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="form-control w-1/2  ">
                <label className="label">
                  <span className="label-text font-bold mt-3">
                    Your District
                  </span>
                </label>
                <select
                  id="#type1"
                  name="type1"
                  onChange="updateValue()"
                  {...register("location", {
                    required: "Location is Required",
                  })}
                  className="select text-gray-600 font-light mr-5"
                >
                  <option disabled selected>
                    Select your location
                  </option>
                  <option>Dhaka</option>
                  <option>Mymensingh</option>
                  <option>Cumilla</option>
                  <option>Faridpur</option>
                  <option>Bogura</option>
                  <option> Gazipur</option>
                  <option> Tangail</option>
                </select>
                {errors.location && (
                  <p className="text-red-500">{errors.location.message}</p>
                )}
              </div>
              <div className="form-control w-full  ">
                <label className="label">
                  {" "}
                  <span className="label-text font-bold mt-3 w-full sm:w-1/2">
                    Phone Number
                  </span>
                </label>
                <input
                  type="text"
                  {...register("phoneNumber", {
                    required: "phoneNumber is Required",
                  })}
                  placeholder="01*********"
                  className="input  text-gray-600  input-md"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500">{errors.phoneNumber.message}</p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="form-control w-48 ">
                <label className="label">
                  {" "}
                  <span className="mt-3 label-text font-bold ">
                    Year Of Purchase
                  </span>
                </label>
                <input
                  type="month"
                  {...register("purchaseYear", {
                    required: "purchaseYear is Required",
                  })}
                  placeholder=""
                  className="input   text-gray-600 w-full mx-auto input-md"
                />
                {errors.purchaseYear && (
                  <p className="text-red-500">{errors.purchaseYear.message}</p>
                )}
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mt-2">
                  <label className="label">
                    {" "}
                    <span className="label-text font-bold">Years Of Use</span>
                  </label>

                  <input
                    {...register("durationUsingProduct", {
                      required: "durationUsingProduct is Required",
                    })}
                    type="number"
                    placeholder="1"
                    className="input  text-gray-600 w-full mx-auto input-md"
                  />
                </div>
              </div>
              {errors.durationUsingProduct && (
                <p className="text-red-500">
                  {errors.durationUsingProduct.message}
                </p>
              )}
            </div>
            <input
              className="btn bg-dashboard text-white w-4/5 mt-4"
              value="Add Product"
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
