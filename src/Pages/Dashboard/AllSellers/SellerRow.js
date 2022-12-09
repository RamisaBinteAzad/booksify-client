import React from 'react';

const SellerRow = ({ seller, handleDeleteSeller, handleStatusUpdate,status }) => {
     const { _id,index,sellerName,sellerEmail } =seller
       
    console.log(seller);
  return (
    <tr
      key={_id}
      className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
    >
      <th class="p-3 font-bold uppercase bg-primary border border-white text-white     hidden lg:table-cell ">
        {index}
      </th>

      <td class="w-full lg:w-auto p-3 text-gray-800   border border-b text-center block lg:table-cell relative lg:static">
        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 my-3 px-2 py-1 text-xs   font-bold uppercase">
          Name
        </span>
        <span className="  "> {sellerName}</span>
      </td>
      <td class="w-full lg:w-auto p-3 text-gray-800   border border-b text-center block lg:table-cell relative lg:static">
        <span class="lg:hidden absolute top-0 left-0 bg-blue-200 my-3 px-2 py-1 text-xs    font-bold uppercase">
          Email
        </span>
        <span className="    "> {sellerEmail}</span>
      </td>
      <td class="w-full lg:w-auto p-3    border border-b text-center block lg:table-cell relative lg:static">
        <label
          onClick={() => handleDeleteSeller(seller)}
          htmlFor="confirmation-modal"
          className="btn btn-xs btn-error font-light text-white text-xs "
        >
          Delete
        </label>
        <label
          onClick={() => handleStatusUpdate(sellerEmail)}
          className="ml-3 btn btn-xs btn-success font-light text-white text-xs "
        >
          {status ?status : "Verify"}
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
  );
};

export default SellerRow;