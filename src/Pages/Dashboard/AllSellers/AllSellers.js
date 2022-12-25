import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const AllSellers = () => {
  const { loading } = useContext(AuthContext);
  const [deletingSeller, setDeletingSeller] = useState(null);

  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    fetch("https://booksify-server.vercel.app/products", {})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSellers(data);
      });
  }, []);

  const closeModal = () => {
    setDeletingSeller(null);
  };
  const role = "Seller";
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    fetch(`https://booksify-server.vercel.app/buyers?role=${role}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBuyers(data);
      });
  }, [role]);
  // const url = `https://booksify-server.vercel.app/buyers?role=${role}`;

  // const {
  //   data: buyers,
  //   isLoading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["buyers", role],
  //   queryFn: async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     return data;
  //   },
  // });

  const handleDeleteSeller = (seller) => {
    console.log(seller);
    fetch(`https://booksify-server.vercel.app/sellers/${seller.sellerEmail}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Buyer ${seller.sellerName} deleted successfully`);
        }
      });
  };
  if (loading) {
    return <Loading></Loading>;
  }
  const handleStatusUpdate = (email) => {
    fetch(`https://booksify-server.vercel.app/sellers/${email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        //   authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify({ status: "Verified" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //    ektar status update korbo ,bakigular na
          const remaining = sellers.filter(
            (seller) => seller.sellerEmail !== email
          );
          const approving = sellers.find(
            (seller) => seller.sellerEmail === email
          );

          approving.status = "Verified";
          console.log(approving);

          const newOrders = [approving, ...remaining];
          setBuyers(newOrders);
        }
      });
  };

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }
  return (
    <div className="  text-center ">
      <h2 className="text-4xl font-bold pt-9 mb-8">
        <span className="text-primary">All </span>Sellers
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
            {sellers?.length &&
              sellers?.map((buyer, i) => (
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
                    <span className="  "> {buyer.sellerName}</span>
                  </td>
                  <td class="w-full lg:w-auto p-3 text-gray-800   border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 my-3 px-2 py-1 text-xs    font-bold uppercase">
                      Email
                    </span>
                    <span className="    "> {buyer.sellerEmail}</span>
                  </td>
                  <td class="w-full lg:w-auto p-3    border border-b text-center block lg:table-cell relative lg:static">
                    <label
                      onClick={() => setDeletingSeller(buyer)}
                      htmlFor="confirmation-modal"
                      className="btn btn-xs btn-error font-light text-white text-xs "
                    >
                      Delete
                    </label>
                    <label
                      onClick={() => handleStatusUpdate(buyer.sellerEmail)}
                      className="ml-3 btn btn-xs btn-success font-light text-white text-xs "
                    >
                      {buyer.status ? buyer.status : "Verify"}
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {deletingSeller && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingSeller.sellerName}. It cannot be undone.`}
          successAction={handleDeleteSeller}
          successButtonName="Delete"
          modalData={deletingSeller}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllSellers;
