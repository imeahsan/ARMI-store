import React, { createContext, useState, useContext } from "react";
import requests, { instance } from "@services/httpServices";

const WizardContext = createContext();

export const WizardProvider = ({ children }) => {
  const [make, setMake] = useState();
  const [model, setModel] = useState();
  const [variant, setVariant] = useState();
  const [year, setYear] = useState();
  const [image, setImage] = useState();
  const [condition, setCondition] = useState();
  const [history, setHistory] = useState();
  const [fault, setFault] = useState();
  const [loss, setLoss] = useState();
  const [runAndDrive, setRunAndDrive] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [quotedPrice, setQuotedPrice] = useState(0);
  const [expectedPrice, setExpectedPrice] = useState();
  const [MOT, setMOT] = useState();
  const [Mileage, setMileage] = useState();
  const [details, setDetails] = useState();
  const [currency, setCurrency] = useState("SAR");
  const [errors, setErrors] = useState([]);
  const [requestNo, setRequestNo] = useState();
  const submitData = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("model", model);
    formData.append("make", make);
    formData.append("variant", variant);
    formData.append("year", year);
    formData.append("condition", condition);
    formData.append("history", history);
    formData.append("fault", fault);
    formData.append("loss", loss);
    formData.append("runAndDrive", runAndDrive);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("quotedPrice", quotedPrice);
    formData.append("expectedPrice", expectedPrice);
    formData.append("MOT", MOT);
    formData.append("Mileage", Mileage);
    formData.append("details", details);
    formData.append("currency", currency);
    let res = await instance.post(`/buying/submit`, formData);
    if (res.data.success) {
      // console.log(res);

      setRequestNo(res.data.requestNo);
      return true;
    }
    // console.log(requestNo);
    setErrors([
      ...errors,
      "Something went wrong, kindly verify and resubmit yout request",
    ]);
    return false;
  };
  const validateForm = (currentStep) => {
    let err = [];

    switch (currentStep) {
      case 1:
        if (!make) {
          err.push("Please select a manufacturer");
        }
        if (!model) {
          err.push("Please select a model");
        }
        if (!variant) {
          err.push("Please select a variant");
        }
        if (!year) {
          err.push("Please select a year");
        }
        if (!image) {
          err.push("Please select an image");
        }
        break;
      case 2:
        if (!condition) {
          err.push("Please select condition");
        }
        if (!history) {
          err.push("Please select history");
        }
        if (!fault) {
          err.push("Please select fault");
        }

        if (!loss) {
          err.push("Please select total loss");
        }
        if (!runAndDrive) {
          err.push("Please select run and drive");
        }
        break;
      case 3:
        if (!name) {
          err.push("Please enter your fullname");
        }
        if (!phone) {
          err.push("Please enter your phone");
        }
        if (!email) {
          err.push("Please enter your email");
        }
        if (!address) {
          err.push("Please enter your address");
        }
        break;
      case 4:
        if (!expectedPrice) {
          err.push("Please enter expected price");
        }
        if (!Mileage) {
          err.push("Please enter current mileage");
        }
        break;
      case 5:
        break;
    }

    setErrors(err);
    if (err.length === 0) {
      return true;
    }
  };

  const value = {
    make,
    setMake,
    model,
    setModel,
    variant,
    setVariant,
    year,
    setYear,
    image,
    setImage,
    condition,
    setCondition,
    history,
    setHistory,
    fault,
    setFault,
    loss,
    setLoss,
    runAndDrive,
    setRunAndDrive,
    name,
    setName,
    email,
    setEmail,
    quotedPrice,
    setQuotedPrice,
    quotedPrice,
    setQuotedPrice,
    expectedPrice,
    setExpectedPrice,
    MOT,
    setMOT,
    Mileage,
    setMileage,
    details,
    setDetails,
    currency,
    setCurrency,
    validateForm,
    address,
    setAddress,
    phone,
    setPhone,
    errors,
    submitData,
    requestNo,
  };

  return (
    <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
  );
};

export const useWizzard = () => useContext(WizardContext);
