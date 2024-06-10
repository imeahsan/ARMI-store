import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { FiChevronRight, FiMinus, FiPlus } from "react-icons/fi";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
//internal import

import Price from "@component/common/Price";
import Stock from "@component/common/Stock";
import Tags from "@component/common/Tags";
import Layout from "@layout/Layout";
import { notifyError } from "@utils/toast";
import Card from "@component/slug-card/Card";
import useAddToCart from "@hooks/useAddToCart";
import Loading from "@component/preloader/Loading";
import ProductCard from "@component/product/ProductCard";
import VariantList from "@component/variants/VariantList";
import { SidebarContext } from "@context/SidebarContext";
import AttributeServices from "@services/AttributeServices";
import ProductServices from "@services/ProductServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import Discount from "@component/common/Discount";
import ImageCarousel from "@component/carousel/ImageCarousel";
import AuctionServices from "@services/AuctionServices";
import Bids from "@component/common/Bids";
import TimeLeft from "@component/common/TimeLeft";
import AuctionPrice from "@component/common/AuctionPrice";
import Bidder from "@component/Bidder";
import { UserContext } from "@context/UserContext";
import LoginModal from "@component/modal/LoginModal";
import axios from "axios";

const ProductScreen = ({ product, attributes, relatedProducts }) => {
  const router = useRouter();
  const {
    state: { userInfo },
  } = useContext(UserContext);
  const { lang, showingTranslateValue, getNumber, currency } =
    useUtilsFunction();

  // console.log('product',product)

  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { handleAddItem, item, setItem } = useAddToCart();

  // react hook
  const handleOpenLogin = () => {
    setModalOpen(!modalOpen);
  };
  const [value, setValue] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState(product?.image[0]);
  const [originalPrice, setOriginalPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [selectVariant, setSelectVariant] = useState({});
  const [isReadMore, setIsReadMore] = useState(true);
  const [selectVa, setSelectVa] = useState({});
  const [variantTitle, setVariantTitle] = useState([]);
  const [variants, setVariants] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [timeUntilEnd, setTimeUntilEnd] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    if (value) {
      const result = product?.variants?.filter((variant) =>
        Object.keys(selectVa).every((k) => selectVa[k] === variant[k])
      );
      // console.log('result',result)
      const res = result?.map(
        ({
          originalPrice,
          discount,
          quantity,
          inUse,
          inUseOrder,
          barcode,
          sku,
          productId,
          image,
          ...rest
        }) => ({ ...rest })
      );
      // console.log("res", res);

      const filterKey = Object.keys(Object.assign({}, ...res));
      const selectVar = filterKey?.reduce(
        (obj, key) => ({ ...obj, [key]: selectVariant[key] }),
        {}
      );
      const newObj = Object.entries(selectVar).reduce(
        (a, [k, v]) => (v ? ((a[k] = v), a) : a),
        {}
      );

      const result2 = result?.find((v) =>
        Object.keys(newObj).every((k) => newObj[k] === v[k])
      );

      // console.log("result2", result2);
      if (result.length <= 0 || result2 === undefined) return setStock(0);

      setVariants(result);
      setSelectVariant(result2);
      setSelectVa(result2);
      // setImg(result2?.image);
      setStock(result2?.quantity);
      const price = getNumber(result2?.price);
      const originalPrice = getNumber(result2?.originalPrice);
      const discountPercentage = getNumber(
        ((originalPrice - price) / originalPrice) * 100
      );
      setDiscount(getNumber(discountPercentage));
      setPrice(price);
      setOriginalPrice(originalPrice);
      setItem(originalPrice);
    } else if (product?.variants?.length > 0) {
      const result = product?.variants?.filter((variant) =>
        Object.keys(selectVa).every((k) => selectVa[k] === variant[k])
      );

      setVariants(result);
      setStock(product.variants[0]?.quantity);
      setSelectVariant(product.variants[0]);
      setSelectVa(product.variants[0]);
      // setImg(product.variants[0]?.image);
      const price = getNumber(product.variants[0]?.price);
      const originalPrice = getNumber(product.variants[0]?.originalPrice);
      const discountPercentage = getNumber(
        ((originalPrice - price) / originalPrice) * 100
      );
      setDiscount(getNumber(discountPercentage));
      setPrice(price);
      setOriginalPrice(originalPrice);
    } else {
      setStock(product?.stock);
      // setImg(product?.image[0]);
      const price = getNumber(product?.prices?.price);
      const originalPrice = getNumber(product?.prices?.originalPrice);
      const discountPercentage = getNumber(
        ((originalPrice - price) / originalPrice) * 100
      );
      setDiscount(getNumber(discountPercentage));
      setPrice(price);
      setOriginalPrice(originalPrice);
    }
  }, [
    product?.prices?.discount,
    product?.prices?.originalPrice,
    product?.prices?.price,
    product?.stock,
    product.variants,
    selectVa,
    selectVariant,
    value,
  ]);

  useEffect(() => {
    const res = Object.keys(Object.assign({}, ...product?.variants));
    const varTitle = attributes?.filter((att) => res.includes(att?._id));

    setVariantTitle(varTitle?.sort());
  }, [variants, attributes]);

  useEffect(() => {
    setIsLoading(false);
  }, [product]);

  const handleChangeImage = (img) => {
    setImg(img);
  };

  const { t } = useTranslation();

  // category name slug
  const category_name = showingTranslateValue(product?.category?.name)
    ?.toLowerCase()
    ?.replace(/[^A-Z0-9]+/gi, "-");

  // console.log("discount", discount);
  // bids data
  const [bids, setBids] = useState();
  const getBids = async () => {
    let { bids } = await AuctionServices.getBids(product._id);
    if (bids.length > 0) {
      setItem(bids[0].price);
    } else {
      setItem(originalPrice);
    }
    setBids(bids);
  };
  useEffect(() => {
    setInterval(getBids, 60000);
    getBids();
    if (new Date(product?.endTime) < new Date()) {
      setTimeUntilEnd("Bid Ended");
    } else {
      setInterval(() => {
        calculateTimeUntilEnd(product?.endTime), 1000;
      });
    }
  }, []);

  function calculateTimeUntilEnd(bidEndTime) {
    var currentTime = new Date();
    var timeDifference = new Date(bidEndTime) - currentTime;
    if (timeDifference < 0) {
      // return setTimeUntilEnd("Bid Ended");
    }
    var seconds = Math.floor(timeDifference / 1000);

    // Calculate days, hours, minutes, and remaining seconds
    var days = Math.floor(seconds / (24 * 3600));
    seconds -= days * 24 * 3600;
    var hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    // Format the remaining time as a string
    var formattedString =
      days +
      " days, " +
      hours +
      " hours, " +
      minutes +
      " minutes, " +
      seconds +
      " seconds";

    return setTimeUntilEnd(formattedString);
    //   return   {
    //     days: days,
    //     hours: hours,
    //     minutes: minutes,
    //     seconds: seconds,
    //     formattedString: formattedString,
    //   };
  }

  // for placing bid
  const handlePlaceBid = async () => {
    console.log(userInfo);
    if (bids.length > 1) {
      console.log("iten", item);
      console.log(bids[0]?.price);
      console.log(item > bids[0]?.price);
      if (item < bids[0]?.price) {
        setError(
          "Bid Amount should be greater than Highest Bid  " + bids[0]?.price
        );
        return;
      } else {
        // alert(34);
        await axios.patch(
          process.env.NEXT_PUBLIC_API_BASE_URL + "/auctions/bid/" + product._id,
          {
            bider: userInfo._id,
            price: item,
          }
        );
        getBids();
      }
    }
  };
  return (
    <>
      {modalOpen && (
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Layout
          title={showingTranslateValue(product?.title)}
          description={showingTranslateValue(product.description)}
        >
          <div className="px-0 py-10 lg:py-10">
            <div className="mx-auto px-3 lg:px-10 max-w-screen-2xl">
              <div className="flex items-center pb-4">
                <ol className="flex items-center w-full overflow-hidden font-serif">
                  <li className="text-sm pr-1 transition duration-200 ease-in cursor-pointer hover:text-gray-500 font-bold">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="text-sm mt-[1px]">
                    {" "}
                    <FiChevronRight />{" "}
                  </li>
                  <li className="text-sm pl-1 transition duration-200 ease-in cursor-pointer hover:text-gray-500 font-bold ">
                    <Link href={`/auctions`}>
                      <button
                        className="text-gray-600 font-serif font-medium underline ml-2 hover:text-gray-600"
                        type="button"
                        onClick={() => setIsLoading(!isLoading)}
                      >
                        Auctions{" "}
                      </button>
                    </Link>
                  </li>
                  <li className="text-sm mt-[1px]">
                    {" "}
                    <FiChevronRight />{" "}
                  </li>
                  <li className="text-sm px-1 transition duration-200 ease-in ">
                    {showingTranslateValue(product?.title)}
                  </li>
                </ol>
              </div>
              <div className="w-full rounded-lg p-3 lg:p-12 bg-white">
                <div className="flex flex-col xl:flex-row">
                  <div className="flex-shrink-0 xl:pr-10 lg:block w-full mx-auto md:w-6/12 lg:w-5/12 xl:w-4/12">
                    <TimeLeft
                      endTime={product.endTime}
                      startTime={product.startTime}
                      slug
                      product={product}
                      discount={discount}
                    />

                    {product.image[0] ? (
                      <Image
                        src={img || product.image[0]}
                        alt="product"
                        width={650}
                        height={650}
                        priority
                      />
                    ) : (
                      <Image
                        src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                        width={650}
                        height={650}
                        alt="product Image"
                      />
                    )}

                    {product?.image?.length > 1 && (
                      <div className="flex flex-row flex-wrap mt-4 border-t">
                        <ImageCarousel
                          images={product.image}
                          handleChangeImage={handleChangeImage}
                        />
                      </div>
                    )}
                  </div>

                  <div className="w-full">
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                      <div className=" w-3/5 xl:pr-6 md:pr-6  md:w-2/3 mob-w-full">
                        <div className="mb-6">
                          <h1 className="leading-7 text-lg md:text-xl lg:text-2xl mb-1 font-bold font-serif text-gray-800">
                            {showingTranslateValue(product?.title)}
                          </h1>

                          <p className="uppercase font-serif font-medium text-gray-500 text-sm">
                            SKU :{" "}
                            <span className="font-bold text-gray-600">
                              {product.sku}
                            </span>
                          </p>

                          <div className="relative">
                            <Bids bids={product.bids.length} page />
                          </div>
                        </div>
                        <AuctionPrice
                          price={price}
                          product={product}
                          currency={currency}
                          originalPrice={originalPrice}
                        />

                        <div>
                          <div className="text-sm leading-6 text-gray-500 md:leading-7 text-wrap">
                            {isReadMore
                              ? showingTranslateValue(
                                  product?.description
                                )?.slice(0, 230)
                              : showingTranslateValue(product?.description)}
                            <br />
                            {Object?.keys(product?.description)?.includes(lang)
                              ? product?.description[lang]?.length > 230 && (
                                  <span
                                    onClick={() => setIsReadMore(!isReadMore)}
                                    className="read-or-hide"
                                  >
                                    {isReadMore
                                      ? t("common:moreInfo")
                                      : t("common:showLess")}
                                  </span>
                                )
                              : product?.description?.en?.length > 230 && (
                                  <span
                                    onClick={() => setIsReadMore(!isReadMore)}
                                    className="read-or-hide"
                                  >
                                    {isReadMore
                                      ? t("common:moreInfo")
                                      : t("common:showLess")}
                                  </span>
                                )}

                            <p className="text-red-500 font-bold">
                              {timeUntilEnd}
                            </p>
                          </div>
                          <div className="flex items-center mt-4">
                            <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
                              <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
                                {/* <p>{item}</p> */}
                                <input
                                  defaultValue={
                                    bids && bids?.length > 0
                                      ? bids[0].price
                                      : originalPrice
                                  }
                                  min={
                                    bids && bids?.length > 0
                                      ? bids[0].price
                                      : originalPrice
                                  }
                                  value={item}
                                  onChange={(e) => {
                                    setItem(e.target.value);
                                  }}
                                  type="number"
                                  style={{
                                    textAlign: "center",
                                    border: "none",
                                  }}
                                  className="font-bold flex items-center align-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-8  md:w-20 xl:w-24"
                                ></input>
                                <button
                                  onClick={() => setItem(parseInt(item) + 10)}
                                  disabled={
                                    new Date() > new Date(product.endTime)
                                  }
                                  className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500"
                                >
                                  <span className="text-dark text-base">
                                    <FiPlus />
                                  </span>
                                </button>
                              </div>
                              <button
                                disabled={
                                  new Date() > new Date(product.endTime)
                                }
                                onClick={
                                  userInfo ? handlePlaceBid : handleOpenLogin
                                }
                                className={
                                  "text-sm leading-4 inline-flex items-center cursor-pointer " +
                                  "transition ease-in-out duration-300 font-bold font-serif text-center justify-center border-0 border-transparent rounded-md" +
                                  " focus-visible:outline-none focus:outline-none text-white px-4 ml-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4  " +
                                  " w-full h-12" +
                                  `${
                                    new Date() > new Date(product.endTime)
                                      ? " bg-gray-500 "
                                      : "hover:text-white bg-red-500 hover:bg-red-600"
                                  }`
                                }
                              >
                                {t("common:placeBid")}
                              </button>
                            </div>
                          </div>
                          <p className="text-red-500 font-bold">{error}</p>
                          {/* <div className="flex flex-col mt-4">
                            <span className="font-serif font-bold py-1 text-sm d-block">
                              <span className="text-gray-800">
                                {t("common:category")}:
                              </span>{" "}
                              <Link
                                href={`/search?category=${category_name}&_id=${product?.category?._id}`}
                              >
                                <button
                                  type="button"
                                  className="text-gray-500 font-serif font-medium underline ml-2 hover:text-gray-600"
                                  onClick={() => setIsLoading(!isLoading)}
                                >
                                  {category_name}
                                </button>
                              </Link>
                            </span>
                            <Tags product={product} />
                          </div> */}

                          <div className="mt-8">
                            <p className="text-xs sm:text-sm text-gray-700 font-medium">
                              Call Us To Order By Mobile Number :{" "}
                              <span className="text-red-700 font-bold">
                                +0044235234
                              </span>{" "}
                            </p>
                          </div>

                          {/* social share */}
                          <div className="mt-2">
                            <h3 className="text-base font-bold mb-1 font-serif">
                              {t("common:shareYourSocial")}
                            </h3>
                            {/* <p className="font-sans text-sm text-gray-500">
                              {t("common:shareYourSocialText")}
                            </p> */}
                            <ul className="flex mt-4">
                              <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-gray-500  mr-2 transition ease-in-out duration-500">
                                <FacebookShareButton
                                  url={`https://ARMI-store-nine.vercel.app/product/${router.query.slug}`}
                                  quote=""
                                >
                                  <FacebookIcon size={32} round />
                                </FacebookShareButton>
                              </li>
                              <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-gray-500  mr-2 transition ease-in-out duration-500">
                                <TwitterShareButton
                                  url={`https://ARMI-store-nine.vercel.app/product/${router.query.slug}`}
                                  quote=""
                                >
                                  <TwitterIcon size={32} round />
                                </TwitterShareButton>
                              </li>
                              <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-gray-500  mr-2 transition ease-in-out duration-500">
                                <RedditShareButton
                                  url={`https://ARMI-store-nine.vercel.app/product/${router.query.slug}`}
                                  quote=""
                                >
                                  <RedditIcon size={32} round />
                                </RedditShareButton>
                              </li>
                              <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-red-500  mr-2 transition ease-in-out duration-500">
                                <WhatsappShareButton
                                  url={`https://ARMI-store-nine.vercel.app/product/${router.query.slug}`}
                                  quote=""
                                >
                                  <WhatsappIcon size={32} round />
                                </WhatsappShareButton>
                              </li>
                              <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-gray-500  mr-2 transition ease-in-out duration-500">
                                <LinkedinShareButton
                                  url={`https://ARMI-store-nine.vercel.app/product/${router.query.slug}`}
                                  quote=""
                                >
                                  <LinkedinIcon size={32} round />
                                </LinkedinShareButton>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* shipping description card */}

                      <div className="w-full xl:w-5/12 lg:w-6/12 md:w-5/12">
                        <div className="mt-6 md:mt-0 lg:mt-0 bg-gray-50 border border-gray-100 p-4 lg:p-1 rounded-lg">
                          {/* <Card /> */}
                          <Bidder bids={bids} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* related products */}
              {relatedProducts?.length >= 2 && (
                <div className="pt-10 lg:pt-20 lg:pb-10">
                  <h3 className="leading-7 text-lg lg:text-xl mb-3 font-bold font-serif hover:text-gray-600">
                    {t("common:relatedProducts")}
                  </h3>
                  <div className="flex">
                    <div className="w-full">
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                        {relatedProducts?.slice(1, 13).map((product, i) => (
                          <ProductCard
                            key={product._id}
                            product={product}
                            attributes={attributes}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

// you can use getServerSideProps alternative for getStaticProps and getStaticPaths

export const getServerSideProps = async (context) => {
  const { slug } = context.params;

  const [data, attributes] = await Promise.all([
    AuctionServices.getShowingStoreProducts({
      category: "",
      slug: slug,
    }),

    AttributeServices.getShowingAttributes({}),
  ]);
  let product = {};
  console.log("slug ==>> ", data);
  if (slug) {
    product = await AuctionServices.getProductBySlug(slug);
  }
  let props = {
    props: {
      product,
      relatedProducts: data?.relatedProducts,
      attributes,
    },
  };
  return props;
};

export default ProductScreen;
