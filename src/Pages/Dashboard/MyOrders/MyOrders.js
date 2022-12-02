import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
      queryKey: ["bookings", user?.email],
      queryFn: async () => {
        const res = await fetch(url, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
             
          },
        });
        const data = await res.json();

        return data;
      },
    });
    return (
      <div className="  text-center ">
        <h2 className="text-4xl font-bold pt-9 mb-8">
          <span className="text-primary">My </span>Orders
        </h2>
        <div className="mx-auto container px-8 mb-7">
          <table class="border-collapse w-full rounded-xl ">
            <thead>
              <tr className="rounded-xl ">
                <th class="p-3 font-bold uppercase bg-primary text-white     hidden lg:table-cell "></th>
                <th class="p-3 font-bold uppercase bg-primary text-white     hidden lg:table-cell ">
                  Avatar
                </th>
                <th class="p-3 font-bold uppercase bg-primary text-white     hidden lg:table-cell ">
                  Title
                </th>
                <th class="p-3 font-bold uppercase bg-primary text-white     hidden lg:table-cell">
                  Price
                </th>
                <th class="p-3 font-bold uppercase bg-primary text-white    hidden lg:table-cell">
                  Payment
                </th>
              </tr>
            </thead>
            <tbody className="my-6">
              {bookings?.length &&
                bookings?.map((booking, i) => (
                  <tr
                    key={booking._id}
                    className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                  >
                    <th class="p-3 font-bold uppercase bg-primary border border-white text-white     hidden lg:table-cell ">
                      {i + 1}
                    </th>
                    <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                      <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        Avatar
                      </span>
                      <div className="avatar">
                        <div className="w-24 rounded-full">
                          <img
                            src={booking.image}
                            className="w-20 object-contain"
                            alt=""
                          />
                        </div>
                      </div>
                    </td>
                    <td class=" lg:w-1/3  w-full p-3 text-gray-800 text-center border border-b   block lg:table-cell relative lg:static">
                      <small class="lg:hidden   bg-blue-200 px-2 py-1 text-xs  uppercase  ">
                        Title
                      </small>
                      {booking.productName}
                    </td>
                    <td class="w-full lg:w-auto p-3 text-gray-800   border border-b text-center block lg:table-cell relative lg:static">
                      <span class="lg:hidden absolute top-0 left-0 bg-blue-200 my-3 px-2 py-1 text-xs   font-bold uppercase">
                        Price
                      </span>
                      <span className="text-primary  font-semibold  ">
                        {" "}
                        ৳{booking.resaleprice}
                      </span>
                    </td>

                    {/* <td>{booking.appointmentDate}</td>
                    <td>{booking.slot}</td> */}
                    <td class="w-full lg:w-auto p-3 text-gray-800   border border-b text-center block lg:table-cell relative lg:static">
                      {booking.price && !booking.paid && (
                        <Link to={`/dashboard/payment/${booking._id}`}>
                          <button className="btn btn-primary btn-sm">
                            Pay
                          </button>
                        </Link>
                      )}
                      {booking.price && booking.paid && (
                        <span className="text-green-500">Paid</span>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyOrders;
