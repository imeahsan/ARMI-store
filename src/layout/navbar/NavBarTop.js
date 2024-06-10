import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { IoLockOpenOutline } from "react-icons/io5";
import { FiPhoneCall, FiUser } from "react-icons/fi";

//internal import
import LoginModal from "@component/modal/LoginModal";
import { UserContext } from "@context/UserContext";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";

const NavBarTop = () => {
  const {
    dispatch,
    state: { userInfo },
  } = useContext(UserContext);
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  const handleModal = () => {
    if (userInfo?.email) {
      router.push("/user/dashboard");
    } else {
      setModalOpen(!modalOpen);
    }
  };

  const handleLogOut = () => {
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("userInfo");
    Cookies.remove("couponInfo");
    router.push("/");
  };
  // console.log(storeCustomizationSetting?.navbar?.logout);

  return (
    <>
      {modalOpen && (
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}

      <div className=" lg:block bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="text-gray-700 py-2 font-sans text-xs font-medium border-b flex justify-between items-center">
            <span className="flex items-center mx-auto sm:mx-0">
              <FiPhoneCall className="mr-2  " />
              <span className="">
                {showingTranslateValue(
                  storeCustomizationSetting?.navbar?.help_text
                )}
              </span>

              <a
                href={`tel:${
                  storeCustomizationSetting?.navbar?.phone ||
                  "920005662"
                }`}
                className="font-bold text-red-500 ml-1"
              >
                {storeCustomizationSetting?.navbar?.phone ||
                  "920005662"}
              </a>
            </span>

            <div className="lg:text-right  items-center navBar hidden sm:flex">
              {/* {storeCustomizationSetting?.navbar?.about_menu_status && (
                <div>
                  <Link
                    href="/about-us"
                    className="font-medium hover:text-red-600"
                  >
                    {showingTranslateValue(
                      storeCustomizationSetting?.navbar?.about_us
                    )}
                  </Link>
                  <span className="mx-2">|</span>
                </div>
              )} */}
              {/* {storeCustomizationSetting?.navbar?.contact_menu_status && (
                <div>
                  <Link
                    href="/contact-us"
                    className="font-medium hover:text-red-600"
                  >
                    {showingTranslateValue(
                      storeCustomizationSetting?.navbar?.contact_us
                    )}
                  </Link>
                  <span className="mx-2">|</span>
                </div>
              )} */}
              <button
                onClick={handleModal}
                className="font-medium hover:text-red-600"
              >
                {showingTranslateValue(
                  storeCustomizationSetting?.navbar?.my_account
                )}
              </button>
              <span className="mx-2 hidden sm:block">|</span>
              <div className="hidden sm:block">
                {userInfo?.email ? (
                  <button
                    onClick={handleLogOut}
                    className="flex items-center font-medium hover:text-red-600"
                  >
                    <span className="mr-1">
                      <IoLockOpenOutline />
                    </span>
                    {/* {showingTranslateValue(
                      storeCustomizationSetting?.navbar?.logout
                    )} */}
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => setModalOpen(!modalOpen)}
                    className="flex items-center font-medium hover:text-red-600"
                  >
                    <span className="mr-1">
                      <FiUser />
                    </span>

                    {showingTranslateValue(
                      storeCustomizationSetting?.navbar?.login
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(NavBarTop), { ssr: false });
