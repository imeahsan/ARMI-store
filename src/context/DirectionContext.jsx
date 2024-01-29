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
    console.log("curent locale=>>", currentLocale);
    console.log("curent lang=>>", dir);
    if (currentLocale === "ar") {
      setDirection("rtl");
    } else {
      setDirection("ltr");
    }
    console.log(currentLocale);
    Cookies.set("_lang", currentLocale, {
      sameSite: "None",
      secure: true,
    });
  }, []);

  const handleRoute = (locale) => router.push(`${locale}/${router.asPath}`);

  const setRTL = async () => {
    setDirection("rtl");
    // alert(router.pathname);
    // router.locale = "ar";

    Cookies.set("i18next", "ar", {
      sameSite: "None",
    });

    await router.push(router.pathname, router.asPath, { locale: "ar" });

    // router.reload();
  };
  const setLTR = async () => {
    setDirection("ltr");
    router.locale = "en";

    // window.location.pathname = "/en";

    Cookies.set("i18next", "en", {
      sameSite: "None",
    });
    await router.push(router.pathname, router.asPath, { locale: "en" });
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
