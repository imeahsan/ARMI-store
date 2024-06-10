import dynamic from "next/dynamic";
import Image from "next/image";
import {useState} from "react";
import {IoAdd, IoBagAddSharp, IoRemove} from "react-icons/io5";
import {useCart} from "react-use-cart";

//internal import
import Price from "@component/common/Price";
import Stock from "@component/common/Stock";
import {notifyError} from "@utils/toast";
import useAddToCart from "@hooks/useAddToCart";
import useGetSetting from "@hooks/useGetSetting";
import Discount from "@component/common/Discount";
import useUtilsFunction from "@hooks/useUtilsFunction";
import ProductModal from "@component/modal/ProductModal";
import ImageWithFallback from "@component/common/ImageWithFallBack";
import {handleLogEvent} from "@utils/analytics";

const CarLogoCard = ({logo, }) => {


    // console.log('attributes in product cart',attributes)



    return (
        <>


            <div
                className="group box-border overflow-hidden flex rounded-md  pe-0 flex-col items-center  relative">

                <div

                    className="relative flex justify-center cursor-pointer pt-2 w-full h-44"
                >
                    <div className="relative w-full h-full p-2">

                            <Image
                                src={logo}
                                fill
                                style={{
                                    objectFit: "contain",
                                }}
                                sizes="100%"
                                alt="product"
                                className="object-contain transition duration-150 ease-linear transform group-hover:scale-105"
                            />

                    </div>
                </div>

            </div>
        </>
    );
};

export default dynamic(() => Promise.resolve(CarLogoCard), {ssr: false});
