import React from "react";
import dayjs from "dayjs";

const AuctionHistory = ({ auction, currency }) => {
  console.log(auction);
  return (
    <>
      <td className="px-5 py-3 leading-6 whitespace-nowrap">
        <span className="uppercase text-sm font-medium">
          {auction?._id?.substring(20, 24)}
        </span>
      </td>
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-sm">
          {dayjs(auction?.createdAt).format("MMMM D, YYYY")}
        </span>
      </td>

      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-sm">{auction?.paymentMethod}</span>
      </td>
      {/* <td className="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm">
        {auction.status === "Delivered" && (
          <span className="text-emerald-500">{auction.status}</span>
        )}
        {auction.status === "Pending" && (
          <span className="text-orange-500">{auction.status}</span>
        )}
        {auction.status === "Cancel" && (
          <span className="text-red-500">{auction.status}</span>
        )}
        {auction.status === "Processing" && (
          <span className="text-indigo-500">{auction.status}</span>
        )}
      </td> */}
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-sm font-bold">
          {currency}
          {parseFloat(auction?.total).toFixed(2)}
        </span>
      </td>
    </>
  );
};

export default AuctionHistory;
