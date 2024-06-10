import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

//internal import
import Layout from "@layout/Layout";
import useFilter from "@hooks/useFilter";
import Card from "@component/cta-card/Card";
import ProductCard from "@component/product/ProductCard";
import CategoryCarousel from "@component/carousel/CategoryCarousel";
import { SidebarContext } from "@context/SidebarContext";
import Loading from "@component/preloader/Loading";
import AttributeServices from "@services/AttributeServices";
import SideFilter from "@component/SideFilter";
import Navbar from "@layout/navbar/Navbar";
import { useRouter } from "next/router";
import AuctionServices from "@services/AuctionServices";
import CategoryCarouselAuctions from "@component/carousel/CategoryCarouselAuctions";
import NavbarAuctions from "@layout/navbar/NavbarAuctions";
import AuctionCard from "@component/product/AuctionCard";

const Auctions = ({ products, attributes }) => {
  console.log("RELOAD!!!!");
  console.log("Products => ", products);
  const { t } = useTranslation();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const [visibleProduct, setVisibleProduct] = useState(18);
  const router = useRouter();
  // const [products, setProducts] = useState([]);
  // const [attributes, setattributes] = useState([]);

  useEffect(() => {
    setIsLoading(false);
    setfilteredProducts(products);
  }, [products]);

  const { setSortedField, productData } = useFilter(products);
  console.log(products);
  const [filteredProducts, setfilteredProducts] = useState(productData);
  // console.log(products);
  // console.log("filtered", filteredProducts);

  return (
    <Layout title="Auctions" description="This is Auctions page">
      <NavbarAuctions />
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
        <div className="flex ">
          <div className="flex w-full">
            <div className="w-full">
              {/* <div className="w-full grid grid-col gap-4 grid-cols-1 2xl:gap-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
                <Card />
              </div> */}
              <div className="relative">
                {/* <CategoryCarouselAuctions /> */}
              </div>
              {filteredProducts?.length === 0 ? null : (
                <div className="flex justify-between my-3 bg-orange-100 border border-gray-100 rounded p-3">
                  <h6 className="text-sm font-serif">
                    {t("common:totalI")}{" "}
                    <span className="font-bold">
                      {filteredProducts?.length}
                    </span>{" "}
                    {t("common:itemsFound")}
                  </h6>
                  <span className="text-sm font-serif">
                    <select
                      onChange={(e) => setSortedField(e.target.value)}
                      className="py-0 text-sm font-serif font-medium block w-full rounded border-0 bg-white pr-10 cursor-pointer focus:ring-0"
                    >
                      <option className="px-3" value="All" defaultValue hidden>
                        {t("common:sortByPrice")}
                      </option>
                      <option className="px-3" value="Low">
                        {t("common:lowToHigh")}
                      </option>
                      <option className="px-3" value="High">
                        {t("common:highToLow")}
                      </option>
                    </select>
                  </span>
                </div>
              )}

              <SideFilter
                attributes={attributes}
                productData={productData}
                setfilteredProducts={setfilteredProducts}
              >
                {" "}
                {isLoading ? (
                  <Loading loading={isLoading} />
                ) : (
                  <>
                    {filteredProducts?.length === 0 ? (
                      <div className="text-center  align-middle mx-auto p-5 my-5">
                        <Image
                          className="my-4 mx-auto"
                          src="/no-result.svg"
                          alt="no-result"
                          width={400}
                          height={380}
                        />
                        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-center mt-2 font-medium font-serif text-gray-600">
                          {t("common:sorryText")} 😞
                        </h2>
                      </div>
                    ) : null}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-2 md:gap-3 lg:gap-3 ">
                      {filteredProducts
                        ?.slice(0, visibleProduct)
                        .map((product, i) => (
                          <div className="m-2 shadow-lg">
                            {" "}
                            <AuctionCard
                              key={i + 1}
                              product={product}
                              attributes={attributes}
                            />
                          </div>
                        ))}
                    </div>

                    {productData?.length > visibleProduct && (
                      <button
                        onClick={() => setVisibleProduct((pre) => pre + 10)}
                        className="w-auto mx-auto md:text-sm leading-5 flex items-center transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none bg-indigo-100 text-gray-700 px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-gray-600 h-12 mt-6 text-sm lg:text-sm"
                      >
                        {t("common:loadMoreBtn")}
                      </button>
                    )}
                  </>
                )}
              </SideFilter>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auctions;

export const getServerSideProps = async (context) => {
  const { query, _id } = context.query;
  // console.log(123654);
  const [data, attributes] = await Promise.all([
    query
      ? AuctionServices.getShowingStoreProducts({
          category: _id ? _id : "",
          title: query ? encodeURIComponent(query) : "",
        })
      : AuctionServices.getShowingProducts({
          category: _id ? _id : "",
          title: query ? encodeURIComponent(query) : "",
        }),
    AttributeServices.getShowingAttributes({}),
  ]);
  console.log("response => ", data);
  return {
    props: {
      products: query ? data.products : data,
      attributes,
    },
  };
};

// export const getServerSideProps = async (context) => {
//   const { query } = context.query;
//   const { Category } = context.query;
//   const { category } = context.query;
//   const data = await ProductServices.getShowingProducts();

//   let products = [];
//   //service filter with parent category
//   if (Category) {
//     products = data.filter(
//       (product) => product.parent.toLowerCase().replace("&", "").split(" ").join("-") === Category
//     );
//   }
//   //service filter with child category
//   if (category) {
//     products = data.filter(
//       (product) => product.children.toLowerCase().replace("&", "").split(" ").join("-") === category
//     );
//   }

//   //search result
//   if (query) {
//     products = data.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
//   }

//   return {
//     props: {
//       products,
//     },
//   };
// };
