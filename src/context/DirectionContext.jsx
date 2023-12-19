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

    if (dir === "de") {
      setDirection("rtl");
    } else {
      setDirection("ltr");
    }
  }, []);
  const setRTL = () => {
    setDirection("rtl");
    // router.reload();
  };
  const setLTR = () => {
    setDirection("ltr");
    // router.reload();
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
