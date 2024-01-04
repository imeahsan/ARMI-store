import { useContext, createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const DirectionContext = createContext();
//todo
export const DirectionProvider = ({ children }) => {
  const [direction, setDirection] = useState();

  const router = useRouter();
  const currentLocale = router.locale;
  useEffect(() => {
    // Read cookie
    const dir = Cookies.get("_lang");

    if (currentLocale === "ar") {
      setDirection("rtl");
    } else {
      setDirection("ltr");
    }
    // console.log(currentLocale);
    Cookies.set("_lang", currentLocale, {
      sameSite: "None",
      secure: true,
    });
  }, []);

  const handleRoute = (locale) => router.push(`${locale}${router.asPath}`);

  const setRTL = () => {
    setDirection("rtl");
    // alert(router.pathname);
    // router.locale = "ar";
    router.push(router.pathname, router.asPath, { locale: "ar" });

    Cookies.set("_lang", "de", {
      sameSite: "None",
      secure: true,
    });
    // router.reload();
  };
  const setLTR = () => {
    setDirection("ltr");
    router.locale = "en";

    router.push(router.pathname, router.asPath, { locale: "en" });
    // window.location.pathname = "/en";

    Cookies.set("_lang", "en", {
      sameSite: "None",
      secure: true,
    });
  };

  const value = {
    // states and funtions
    direction,
    setLTR,
    setRTL,
  };

  return (
    <DirectionContext.Provider value={value}>
      {children}
    </DirectionContext.Provider>
  );
};

export const useDirection = () => useContext(DirectionContext);
