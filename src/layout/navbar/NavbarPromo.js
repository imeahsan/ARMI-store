import { Fragment, useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Transition, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import SettingServices from "@services/SettingServices";
import Cookies from "js-cookie";
import {
  FiGift,
  FiAlertCircle,
  FiHelpCircle,
  FiShoppingBag,
  FiFileText,
  FiUsers,
  FiPocket,
  FiPhoneIncoming,
} from "react-icons/fi";
import Image from "next/image";

//internal import
import { notifyError } from "@utils/toast";
import useGetSetting from "@hooks/useGetSetting";
import Category from "@component/category/Category";
import { SidebarContext } from "@context/SidebarContext";
import useUtilsFunction from "@hooks/useUtilsFunction";
import { useDirection } from "@context/DirectionContext";
import useTranslation from "next-translate/useTranslation";

const NavbarPromo = () => {
  const [languages, setLanguages] = useState([]);
  const [currentLang, setCurrentLang] = useState({});
  const { lang, storeCustomizationSetting } = useGetSetting();
  const { isLoading, setIsLoading } = useContext(SidebarContext);

  const { showingTranslateValue } = useUtilsFunction();
  const { direction, setRTL, setLTR } = useDirection();
  console.log(direction);
  const handleLanguage = (lang) => {
    setCurrentLang(lang);
    Cookies.set("_lang", lang?.iso_code, {
      sameSite: "None",
      secure: true,
    });

    console.log(navigator.language);

    if (lang.iso_code === "en") {
      setLTR();
    } else {
      setRTL();
    }
  };

  useEffect(() => {
    (async () => {
      {
        try {
          const res = await SettingServices.getShowingLanguage();
          setLanguages(res);
          console.log("result", res);

          const result = res?.find((language) => language?.iso_code === lang);
          console.log("result", result);
          setCurrentLang(result);
          console.log(result);
          console.log("flag", currentLang?.flag?.toLowerCase());
        } catch (err) {
          notifyError(err);
          console.log("error on getting lang", err);
        }
      }
    })();
  }, []);

  const { t } = useTranslation();
  return (
    <>
      <div
        className=" lg:block xl:block bg-white border-b"
        style={{ zIndex: 99999, direction: "ltr" }}
      >
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 h-32 flex justify-between items-center">
          <div className="w-1/3 inline-flex">
            <Popover className="relative">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center md:justify-start md:space-x-10">
                  <Popover.Group
                    as="nav"
                    className=" space-x-10 items-center hidden lg:flex xl:flex"
                  >
                    {storeCustomizationSetting?.navbar?.contact_menu_status && (
                      <Link
                        onClick={() => setIsLoading(!isLoading)}
                        href="/contact-us"
                        className="font-serif mx-4 py-2 text-sm font-medium hover:text-red-600 whitespace-nowrap	tracking-wide"
                      >
                        {t("common:HOME")}
                      </Link>
                    )}

                    {storeCustomizationSetting?.navbar?.about_menu_status && (
                      <Link
                        href="/about-us"
                        onClick={() => setIsLoading(!isLoading)}
                        className="font-serif mx-4 py-2 text-sm font-medium hover:text-red-600 tracking-wide"
                      >
                        {showingTranslateValue(
                          storeCustomizationSetting?.navbar?.about_us
                        )}
                      </Link>
                    )}
                    {storeCustomizationSetting?.navbar?.about_menu_status && (
                      <Link
                        href="/about-us#team"
                        onClick={() => setIsLoading(!isLoading)}
                        className="font-serif mx-4 py-2 text-sm font-medium hover:text-red-600 tracking-wide"
                      >
                        {t("common:team")}
                      </Link>
                    )}
                  </Popover.Group>
                </div>
              </div>
            </Popover>
          </div>
          <div className="w-1/1  md:w-2/8  flex justify-center">
            <Link href="/" className="   ">
              <Image
                width={225}
                height={225}
                // layout="responsive"
                src={
                  storeCustomizationSetting?.navbar?.header_logo ||
                  "/logo/logo-light.svg"
                }
                alt="logo"
                className=" lg:mr-12 sm:-translate-x-12  block md:-translate-x-20 lg:-translate-x-0"
              />
            </Link>
          </div>

          <div className=" w-3/8 inline-flex ">
            <Popover className="relative">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center md:justify-start md:space-x-10 mx-10">
                  <Popover.Group
                    as="nav"
                    className=" space-x-10 items-center hidden lg:flex xl:flex"
                  >
                    {storeCustomizationSetting?.navbar
                      ?.categories_menu_status && (
                      <Popover className="relative font-serif">
                        <Popover.Button className="group inline-flex items-center py-2 hover:text-red-600 focus:outline-none">
                          <span className="font-serif text-sm font-medium tracking-wide">
                            {showingTranslateValue(
                              storeCustomizationSetting?.navbar?.categories
                            )}
                          </span>

                          <ChevronDownIcon
                            className="ml-1 h-3 w-3 group-hover:text-red-600"
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-50 -ml-1 mt-1 transform w-screen max-w-xs c-h-25vh bg-white">
                            <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll flex-grow scrollbar-hide w-full h-full">
                              <Category />
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </Popover>
                    )}
                    {storeCustomizationSetting?.navbar?.offers_menu_status && (
                      <Link
                        href="/offer"
                        onClick={() => setIsLoading(!isLoading)}
                        className="relative inline-flex items-center tracking-wide  bg-red-100 font-serif mx-4 py-0 px-2 rounded text-sm font-medium text-red-500 hover:text-red-600"
                      >
                        {showingTranslateValue(
                          storeCustomizationSetting?.navbar?.offers
                        )}
                        <div className="absolute flex w-2 h-2 left-auto -right-1 -top-1">
                          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </div>
                      </Link>
                    )}

                    {storeCustomizationSetting?.navbar?.contact_menu_status && (
                      <Link
                        onClick={() => setIsLoading(!isLoading)}
                        href="/contact-us"
                        className="font-serif mx-4 py-2 text-sm font-medium tracking-wide hover:text-red-600"
                      >
                        {showingTranslateValue(
                          storeCustomizationSetting?.navbar?.contact_us
                        )}
                      </Link>
                    )}
                  </Popover.Group>
                </div>
              </div>
            </Popover>
            {/* flag */}
            <div className="dropdown ">
              <div
                className={` flot-l flag ${
                  currentLang?.flag?.toLowerCase() || "us"
                }`}
              ></div>
              <button className="dropbtn lg:block hidden">
                {currentLang?.name}
                &nbsp;<i className="fas fa-angle-down"></i>
              </button>
              <div
                className={`dropdown-content lg:translate-x-0 
                 ${
                   direction === "rtl"
                     ? "translate-x-32 md:translate-x-12"
                     : "-translate-x-20 md:-translate-x-12"
                 }
                `}
              >
                {languages?.map((language, i) => {
                  return (
                    <Link
                      onClick={() => {
                        handleLanguage(language);
                      }}
                      key={i + 1}
                      href="#"
                    >
                      <div
                        className={`flot-l  flag ${language?.flag?.toLowerCase()}`}
                      ></div>
                      {language?.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* {storeCustomizationSetting?.navbar?.privacy_policy_status && (
              <Link
                onClick={() => setIsLoading(!isLoading)}
                href="/privacy-policy"
                className="font-serif mx-4 py-2 text-sm font-medium hover:text-red-600"
              >
                {showingTranslateValue(
                  storeCustomizationSetting?.navbar?.privacy_policy
                )}
              </Link>
            )} */}
            {/* {storeCustomizationSetting?.navbar?.term_and_condition_status && (
              <Link
                onClick={() => setIsLoading(!isLoading)}
                href="/terms-and-conditions"
                className="font-serif mx-4 py-2 text-sm font-medium hover:text-red-600"
              >
                {showingTranslateValue(
                  storeCustomizationSetting?.navbar?.term_and_condition
                )}
              </Link>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarPromo;
