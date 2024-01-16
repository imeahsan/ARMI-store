import Error from "@component/form/Error";
import InputArea from "@component/form/InputArea";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import React from "react";

const MakeModelVariant = () => {
  const { showingTranslateValue } = useUtilsFunction();
  const { storeCustomizationSetting } = useGetSetting();
  const errors = {};
  return <div className="w-full h-96 border-2 border-red-500"></div>;
};

export default MakeModelVariant;
