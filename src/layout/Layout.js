import Head from "next/head";
import { ToastContainer } from "react-toastify";

//internal import
import NavbarPromo from "@layout/navbar/NavbarPromo";

import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import NavBarTop from "./navbar/NavBarTop";
import FooterTop from "@layout/footer/FooterTop";
import MobileFooter from "@layout/footer/MobileFooter";
import FeatureCard from "@component/feature-card/FeatureCard";
import { useDirection } from "@context/DirectionContext";
import StickyCart from "@component/cart/StickyCart";
import CartDrawer from "@component/drawer/CartDrawer";

const Layout = ({ title, description, children }) => {
  const { direction } = useDirection();
  return (
    <>
      <ToastContainer />

      <div className="font-sans" style={{ direction: direction }}>
        <Head>
          <title>
            {title
              ? `ARMI | ${title}`
              : "ARMI - Auto Recycling and Modification "}
          </title>
          {description && <meta name="description" content={description} />}
          <link ref="icon" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <NavBarTop />
        <NavbarPromo />
        <CartDrawer />

        <div
          className="bg-gray-50"
          // style={{ direction: "rtl" }}
        >
          <StickyCart />
          {children}
        </div>
        <MobileFooter />
        <div className="w-full">
          {/* <FooterTop /> */}
          <div className="hidden relative lg:block mx-auto max-w-screen-2xl py-6 px-3 sm:px-10">
            <FeatureCard />
          </div>
          <hr className="hr-line"></hr>
          <div className="border-t border-gray-100 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
