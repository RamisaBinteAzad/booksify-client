import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Loading from "../Shared/Loading/Loading";

const BookingModal = ({ productData, setProductData }) => {
  // console.log(productData);
  const { user, loading } = useContext(AuthContext);
   const navigate = useNavigate();
   
  
   
  const {
    _id,
image,
    productName,

    resaleprice,
  } = productData;
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const buyerName = form.name.value;
    const email = form.email.value;
    const meetingLocation = form.meetingLocation.value;
    const phone = form.phone.value;
    const resaleprice = form.price.value;

    const booking = {
      productName: productName,
      meetingLocation: meetingLocation,
      buyerName,
      productId: _id,
      image,
      email,
      phone,
      resaleprice,
    };
    // console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setProductData(null);

          toast.success(`${productName} booking confirmed successfully`);
           navigate("/dashboard/myorders");
           
        } else {
          setProductData(null);
          toast.error(data.message);
        }
      });
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal p-4">
          <div className="modal-box relative">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-xl text-accent font-bold ">{productName}</h3>
            <hr />
            <form onSubmit={handleBooking} className="grid  grid-cols-1 gap-3 ">
              <div>
                <label className="label mt-3">
                  {" "}
                  <span className="label-text font-bold text-primary">
                    Resale Price
                  </span>
                </label>

                <input
                  name="price"
                  type="number"
                  value={resaleprice}
                  placeholder={`৳${resaleprice}`}
                  disabled
                  className="input    mx-auto input-md w-full  "
                />
              </div>

              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                disabled
                placeholder="Your Name"
                className="input input-bordered w-full "
              />
              <input
                name="email"
                type="email"
                defaultValue={user?.email}
                disabled
                placeholder="Email Address"
                className="input input-bordered w-full "
              />
              <div>
                <label className="label">
                  {" "}
                  <span className="label-text text-primary font-bold mt-3 w-full sm:w-1/2">
                    Phone Number
                  </span>
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder="01*********"
                  className="input input-bordered w-full "
                />
              </div>

              <select
                name="meetingLocation"
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  Select your Meeting location
                </option>
                <option>Dhaka</option>
                <option>Mymensingh</option>
                <option>Cumilla</option>
                <option>Faridpur</option>
                <option>Bogura</option>
                <option> Gazipur</option>
                <option> Tangail</option>
              </select>
              <input
                className="btn bg-gradient-to-r from-blue-500 to-slate-600   text-white  text-center border-0 w-full "
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </>
    </>
  );
};

export default BookingModal;
