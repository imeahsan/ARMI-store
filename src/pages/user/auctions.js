import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoBagHandle } from "react-icons/io5";
import ReactPaginate from "react-paginate";

//internal import
import Dashboard from "@pages/user/dashboard";
import OrderServices from "@services/OrderServices";
import Loading from "@component/preloader/Loading";
import { UserContext } from "@context/UserContext";
import OrderHistory from "@component/order/OrderHistory";
import { SidebarContext } from "@context/SidebarContext";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import useTranslation from "next-translate/useTranslation";
import AuctionHistory from "@component/order/AuctionHistory";
import dayjs from "dayjs";
import { useCart } from "react-use-cart";

const MyOrders = () => {
  const router = useRouter();
  const {
    state: { userInfo },
  } = useContext(UserContext);
  const { currentPage, handleChangePage, isLoading, setIsLoading } =
    useContext(SidebarContext);

  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { items, addItem, updateItemQuantity, inCart } = useCart();

  useEffect(() => {
    OrderServices.getCustomerAuctions({
      id: userInfo._id,
    })
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [currentPage]);

  const pageCount = Math.ceil(data?.totalDoc / 8);

  useEffect(() => {
    setIsLoading(false);
    if (!userInfo) {
      router.push("/");
    }
  }, [userInfo]);

  const { t } = useTranslation();
  const handleAddItem = (p) => {
    const newItem = {
      title: showingTranslateValue(p?.title),
      id: p._id,
      variant: p.prices,
      price: p.winningBid.price,
      slug: p.slug,
    };

    if (!inCart(newItem.id)) {
      addItem(newItem);
    }
  };
  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Dashboard
          title={showingTranslateValue(storeCustomizationSetting?.auctions)}
          description="This is user auctions history page"
        >
          <div className="overflow-hidden rounded-md font-serif">
            {loading ? (
              <Loading loading={loading} />
            ) : error ? (
              <h2 className="text-xl text-center my-10 mx-auto w-11/12 text-red-400">
                {error}
              </h2>
            ) : data?.auctions?.length === 0 ? (
              <div className="text-center">
                <span className="flex justify-center my-30 pt-16 text-red-500 font-bold text-6xl">
                  <IoBagHandle />
                </span>
                <h2 className="font-medium text-md my-4 text-gray-600">
                  You Have no auctions Yet!
                </h2>
              </div>
            ) : (
              <div className="flex flex-col">
                <h2 className="text-xl font-serif font-bold mb-5">
                  {t("Auctions")}
                </h2>
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="align-middle inline-block border border-gray-100 rounded-md min-w-full pb-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md">
                      <table className="table-auto min-w-full border border-gray-100 divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr className="bg-gray-100">
                            <th
                              scope="col"
                              className="text-left text-xs font-serif font-bold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              ID
                            </th>
                            <th
                              scope="col"
                              className="text-center text-xs font-serif font-bold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              Product
                            </th>{" "}
                            <th
                              scope="col"
                              className="text-center text-xs font-serif font-bold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              Bid TIme
                            </th>
                            {/* <th
                              scope="col"
                              className="text-center text-xs font-serif font-bold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              Status
                            </th> */}
                            <th
                              scope="col"
                              className="text-center text-xs font-serif font-bold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              Total
                            </th>
                            <th
                              scope="col"
                              className="text-right text-xs font-serif font-bold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {data?.auctions?.map((auction) => (
                            <tr key={auction._id}>
                              {/* <AuctionHistory order={auction} /> */}
                              <td className="px-5 py-3 leading-6 whitespace-nowrap">
                                <span className="uppercase text-sm font-medium">
                                  {auction?._id?.substring(20, 24)}
                                </span>
                              </td>

                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">
                                  {auction.title.en}
                                </span>
                              </td>

                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">
                                  {dayjs(auction?.winningBid.time).format(
                                    "MMMM D, YYYY"
                                  )}
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">
                                  SR&nbsp;{auction?.winningBid.price}
                                </span>
                              </td>
                              <td className="px-5 py-3 whitespace-nowrap text-right text-sm">
                                <button
                                  disabled={auction.status === "paid"}
                                  className="px-5 py-2 bg-emerald-100 text-xs text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all font-bold rounded-full"
                                  onClick={() => {
                                    handleAddItem(auction);
                                  }}
                                >
                                  Buy
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {/* {data?.totalDoc > 10 && (
                        <div className="paginationOrder">
                          <ReactPaginate
                            breakLabel="..."
                            nextLabel="Next"
                            onPageChange={(e) =>
                              handleChangePage(e.selected + 1)
                            }
                            pageRangeDisplayed={3}
                            pageCount={pageCount}
                            previousLabel="Previous"
                            renderOnZeroPageCount={null}
                            pageClassName="page--item"
                            pageLinkClassName="page--link"
                            previousClassName="page-item"
                            previousLinkClassName="page-previous-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-next-link"
                            breakClassName="page--item"
                            breakLinkClassName="page--link"
                            containerClassName="pagination"
                            activeClassName="activePagination"
                          />
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Dashboard>
      )}
    </>
  );
};

export default MyOrders;
