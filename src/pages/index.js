import { SidebarContext } from "@context/SidebarContext";
import { useContext, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

//internal import
import Layout from "@layout/Layout";
import Banner from "@component/banner/Banner";
import useGetSetting from "@hooks/useGetSetting";
import CardTwo from "@component/cta-card/CardTwo";
import OfferCard from "@component/offer/OfferCard";
import StickyCart from "@component/cart/StickyCart";
import Loading from "@component/preloader/Loading";
import ProductServices from "@services/ProductServices";
import ProductCard from "@component/product/ProductCard";
import MainCarousel from "@component/carousel/MainCarousel";
import FeatureCategory from "@component/category/FeatureCategory";
import AttributeServices from "@services/AttributeServices";
import CMSkeleton from "@component/preloader/CMSkeleton";
import PartsCard from "@component/offer/PartsCard";
import AuctionCard from "@component/offer/AuctionCard";
import Link from "next/link";
import CategoryMainCarousel from "@component/carousel/CategoryMainCarousel";
import DiscountedProductsCarousel from "@component/carousel/DiscountedProductsCarousel";
import Test from "@component/Test";

const Home = ({ popularProducts, discountProducts, attributes }) => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { loading, error, storeCustomizationSetting } = useGetSetting();

  // console.log("storeCustomizationSetting", storeCustomizationSetting);

  useEffect(() => {
    if (router.asPath === "/") {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [router]);
  const { t } = useTranslation();

  const parallaxRef = useRef();

  // useEffect(() => {
  //   const parallaxScroll = () => {
  //     const offset = window.pageYOffset;
  //     parallaxRef.current.style.backgroundPositionY = `${offset * 0.5}px`;
  //   };

  //   window.addEventListener("scroll", parallaxScroll);

  //   return () => {
  //     window.removeEventListener("scroll", parallaxScroll);
  //   };
  // }, []);

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Layout>
          <div className="min-h-80 ">
            {/* <StickyCart /> */}
            <div className="flex 	 justify-center sm:justify-stretch	 items-stretch">
              {/* *************************************************************** */}
              {/* <div class=" text-white  lg:block">
                <div class="container  relative mx-auto max-w-max">
                  <div class="flex  sm:h-72" style={{ height: "80vh" }}> */}
              {/* <!-- First Image --> */}
              {/* <div class="w-full lg:w-1/4 lg:block md:hidden  hidden m-1 relative flex items-center justify-center ">
                      <img
                        src="https://dt-cartrek.myshopify.com/cdn/shop/files/Rectangle_1.jpg?v=1687174273&width=1500"
                        alt="Image 1"
                        class="w-full h-full rounded-md "
                      /> */}

              {/* <!-- Text Overlay --> */}
              {/* <div class="absolute top-0 left-0 right-0 bottom-0 flex items-end mb-8 justify-center">
                        <div class="text-center">
                          <h2 class="text-2xl font-semibold mb-2">
                            Image 1 Title
                          </h2>
                          <p class="text-sm">Description for Image 1.</p>
                          <button class="mt-4 bg-white text-black py-2 px-4 rounded-full">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div> */}

              {/* <!-- Second Image --> */}
              {/* <div class=" sm:w-1/2 md:w-1/2 m-1  lg:w-2/4  relative">
                      <img
                        src="https://dt-cartrek.myshopify.com/cdn/shop/files/Rectangle_3.jpg?v=1687174272"
                        alt="Image 2"
                        class="w-full h-full rounded-md "
                      /> */}

              {/* <!-- Text Overlay --> */}
              {/* <div class="absolute top-0 left-0 right-0 bottom-0 flex items-end mb-8 justify-center">
                        <div class="text-center">
                          <h2 class="text-2xl font-semibold mb-2">
                            Sell your Car
                          </h2>
                          <p class="text-sm">
                            sell your car easily at best price
                          </p>
                          <a>
                            {" "}
                            <Link href={`/request-quotation`}>
                              <button class="mt-4 bg-white text-black py-2 px-4 rounded-full">
                                {t("common:getQuote")}
                              </button>
                            </Link>
                          </a>
                        </div>
                      </div>
                    </div> */}

              {/* <!-- Third Image --> */}
              {/* <div class="w-full sm:w-1/2 md:w-1/2 m-1 hidden sm:block lg:w-1/4  relative">
                      <img
                        // src="https://img.freepik.com/free-photo/composition-different-car-accessories_23-2149030399.jpg?w=740&t=st=1706200946~exp=1706201546~hmac=7552b80c4f145fb62ce7b737fba100bf2ecea64aaddfe37e5b610476519da7d8"
                        src="https://img.freepik.com/premium-photo/spare-parts-ball-joint-suspension_263357-544.jpg?w=740"
                        alt="Image 3"
                        class="w-full h-80 sm:h-full cover rounded-md"
                        style={{}}
                      /> */}

              {/* <!-- Text Overlay --> */}
              {/* <div class="absolute top-0 left-0 right-0 bottom-0 flex items-end mb-8 justify-center">
                        <div class="text-center">
                          <h2 class="text-2xl font-semibold mb-2">Buy Parts</h2>
                          <p class="text-sm">Buy genuine parts</p>
                          <button class="mt-4 bg-white text-black py-2 px-4 rounded-full">
                            {t("common:shopNow")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

              {/* *************************************************************** */}

              <div className="flex w-full mt-5 max-w-screen-2xl mx-auto flex-col items-center lg:flex-row justify-center">
                {/* <div className="flex-shrink m-2 lg:block w-full lg:w-1/2 md:w-1/2 sm:w-1/3 w-1/3  "> 
                <MainCarousel />
                
                 </div>   */}

                <div className="  lg:w-2/4  w-11/12	 m-2 ">
                  <OfferCard />
                </div>
                <div className=" w-11/12 lg:w-1/4   m-2 ">
                  <PartsCard />
                </div>
                <div className=" w-11/12 lg:w-1/4   m-2 ">
                  {" "}
                  <AuctionCard />
                </div>
              </div>

              {/* <div className="flex flex-col items-center md:flex-row justify-center">
                  <div className="lg:w-2/5  sm:flex mb-4">
                    <MainCarousel />
                  </div>
                  <div className="w-full  sm:flex mb-4">
                    <PartsCard />
                  </div>
                  <div className="w-full  sm:flex mb-4">
                    <AuctionCard />
                  </div>
                </div> */}
              {/* </div> */}
            </div>
            {storeCustomizationSetting?.home?.promotion_banner_status && (
              <div className="bg-orange-100 px-10 py-6 rounded-lg mt-6">
                <Banner />
              </div>
            )}
            {/* feature category's */}
            {storeCustomizationSetting?.home?.featured_status && (
              <div className=" lg:py-16 py-10 w-11/12 mx-auto ">
                <div className="mx-auto max-w-screen-2xl  justify-center ">
                  <div className="mb-10 flex justify-center">
                    <div className="text-center w-full lg:w-2/5">
                      <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                        <CMSkeleton
                          count={1}
                          height={30}
                          // error={error}
                          loading={loading}
                          data={storeCustomizationSetting?.home?.feature_title}
                        />
                      </h2>
                      <p className="text-base font-sans text-gray-600 leading-6">
                        <CMSkeleton
                          count={4}
                          height={10}
                          error={error}
                          loading={loading}
                          data={
                            storeCustomizationSetting?.home?.feature_description
                          }
                        />
                      </p>
                    </div>
                  </div>
                  <CategoryMainCarousel />

                  {/* <FeatureCategory /> */}
                </div>
              </div>
            )}

            <div
            // ref={parallaxRef}
            // className=" h-screen bg-black  bg-fixed  bg-parallax bg-cover "
            >
              {storeCustomizationSetting?.home?.delivery_status && (
                <div>
                  <div className="block mx-auto max-w-screen-2xl ">
                    <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
                      <div className="lg:p-2 p-2 bg-red-500 shadow-sm border rounded-lg">
                        <CardTwo />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* popular products */}

              <Test>
                {storeCustomizationSetting?.home?.popular_products_status && (
                  <div className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
                    <div className="mb-10 flex justify-center">
                      <div className="text-center w-full lg:w-2/5">
                        <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                          <CMSkeleton
                            count={1}
                            height={30}
                            // error={error}
                            loading={loading}
                            data={
                              storeCustomizationSetting?.home?.popular_title
                            }
                          />
                        </h2>
                        <p className="text-base font-sans text-gray-600 leading-6">
                          <CMSkeleton
                            count={5}
                            height={10}
                            error={error}
                            loading={loading}
                            data={
                              storeCustomizationSetting?.home
                                ?.popular_description
                            }
                          />
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-full">
                        {loading ? (
                          <CMSkeleton
                            count={20}
                            height={20}
                            error={error}
                            loading={loading}
                          />
                        ) : (
                          <DiscountedProductsCarousel
                            popularProducts={popularProducts}
                            attributes={attributes}
                          />

                          // <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                          //   {popularProducts
                          //     ?.slice(
                          //       0,
                          //       storeCustomizationSetting?.home
                          //         ?.popular_product_limit
                          //     )
                          //     .map((product) => (
                          //       <ProductCard
                          //         key={product._id}
                          //         product={product}
                          //         attributes={attributes}
                          //       />
                          //     ))}
                          // </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* discounted products */}
                {storeCustomizationSetting?.home?.discount_product_status &&
                  discountProducts?.length > 0 && (
                    <div
                      id="discount"
                      className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10"
                    >
                      <div className="mb-10 flex justify-center">
                        <div className="text-center w-full lg:w-2/5">
                          <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                            <CMSkeleton
                              count={1}
                              height={30}
                              // error={error}
                              loading={loading}
                              data={
                                storeCustomizationSetting?.home
                                  ?.latest_discount_title
                              }
                            />
                          </h2>
                          <p className="text-base font-sans text-gray-600 leading-6">
                            <CMSkeleton
                              count={5}
                              height={20}
                              // error={error}
                              loading={loading}
                              data={
                                storeCustomizationSetting?.home
                                  ?.latest_discount_description
                              }
                            />
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-full">
                          {loading ? (
                            <CMSkeleton
                              count={20}
                              height={20}
                              error={error}
                              loading={loading}
                            />
                          ) : (
                            <DiscountedProductsCarousel
                              popularProducts={discountProducts}
                              attributes={attributes}
                            />
                            // <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                            //   {discountProducts
                            //     ?.slice(
                            //       0,
                            //       storeCustomizationSetting?.home
                            //         ?.latest_discount_product_limit
                            //     )
                            //     .map((product) => (
                            //       <ProductCard
                            //         key={product._id}
                            //         product={product}
                            //         attributes={attributes}
                            //       />
                            //     ))}
                            // </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
              </Test>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { cookies } = context.req;
  const { query, _id } = context.query;

  const [data, attributes] = await Promise.all([
    ProductServices.getShowingStoreProducts({
      category: _id ? _id : "",
      title: query ? query : "",
    }),

    AttributeServices.getShowingAttributes(),
  ]);

  return {
    props: {
      popularProducts: data.popularProducts,
      discountProducts: data.discountedProducts,
      cookies: cookies,
      attributes,
    },
  };
};

export default Home;
