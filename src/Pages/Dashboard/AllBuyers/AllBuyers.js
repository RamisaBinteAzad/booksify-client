import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from "../../Shared/Loading/Loading";

const AllBuyers = () => {
  const [deletingBuyer, setDeletingBuyer] = useState(null);
   const closeModal = () => {
     setDeletingBuyer(null);
   };
  const role="Buyer"
  const url = `http://localhost:5000/buyers?role=${role}`;

  const {
    data: buyers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyers", role],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();

      return data;
    },
  });
    
    const handleDeleteBuyer = (buyer) => {
      console.log(buyer);
      fetch(`http://localhost:5000/buyers/${buyer._id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch();
            toast.success(`Buyer ${buyer.name} deleted successfully`);
          }
        });
  };
  
  
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="  text-center ">
      <h2 className="text-4xl font-bold pt-9 mb-8">
        <span className="text-primary">All </span>Buyers
      </h2>
      <div className="mx-auto container px-8 mb-7">
        <table class="border-collapse w-full rounded-xl ">
          <thead>
            <tr className="rounded-xl ">
              <th class="p-3 font-bold uppercase bg-primary text-white     hidden lg:table-cell "></th>

              <th class="p-3 font-bold uppercase bg-primary text-white     hidden lg:table-cell ">
                Name
              </th>
              <th class="p-3 font-bold uppercase bg-primary text-white     hidden lg:table-cell">
                Email
              </th>
              <th class="p-3 font-bold uppercase bg-primary text-white    hidden lg:table-cell">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="my-6">
            {buyers?.length &&
              buyers?.map((buyer, i) => (
                <tr
                  key={buyer._id}
                  className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                >
                  <th class="p-3 font-bold uppercase bg-primary border border-white text-white     hidden lg:table-cell ">
                    {i + 1}
                  </th>

                  <td class="w-full lg:w-auto p-3 text-gray-800   border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 my-3 px-2 py-1 text-xs   font-bold uppercase">
                      Name
                    </span>
                    <span className="  "> {buyer.name}</span>
                  </td>
                  <td class="w-full lg:w-auto p-3 text-gray-800   border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 my-3 px-2 py-1 text-xs    font-bold uppercase">
                      Email
                    </span>
                    <span className="    "> {buyer.email}</span>
                  </td>
                  <td class="w-full lg:w-auto p-3    border border-b text-center block lg:table-cell relative lg:static">
                    <label
                      onClick={() => setDeletingBuyer(buyer)}
                      htmlFor="confirmation-modal"
                      className="btn btn-xs btn-error font-light text-white text-xs "
                    >
                      Delete
                    </label>
                  </td>
                  {/* <td class="w-full lg:w-auto p-3 text-gray-800   border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 my-3 px-2 py-1 text-xs   font-bold uppercase">
                      Contact Number
                    </span>
                    <span className="text-primary  font-semibold  ">
                      {" "}
                      {buyer.phone}
                    </span>
                  </td> */}

                  {/* <td class="w-full lg:w-auto p-3 text-gray-800   border border-b text-center block lg:table-cell relative lg:static">
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-primary btn-sm">Pay</button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <span className="text-green-500">Paid</span>
                    )}
                  </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {deletingBuyer && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingBuyer.name}. It cannot be undone.`}
          successAction={handleDeleteBuyer}
          successButtonName="Delete"
          modalData={deletingBuyer}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllBuyers;