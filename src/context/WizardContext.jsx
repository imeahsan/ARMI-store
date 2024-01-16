import React, { createContext } from "react";

const WizardContext = createContext();

export const WizardProvider = ({ children }) => {
  const value = {
    // states and funtions
    // direction,
    // setLTR,
    // setRTL,
  };

  return (
    <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
  );
};

export const useWizzard = () => useContext(WizardContext);
