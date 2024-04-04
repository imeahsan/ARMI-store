import Error from "@component/form/Error";
import InputArea from "@component/form/InputArea";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import React, { useEffect, useState } from "react";
import Example from "./labels";
import requests, { instance } from "@services/httpServices";
import useAsync from "@hooks/useAsync";
import { useWizzard } from "@context/WizardContext";
import { values } from "next-pwa/cache";
import useTranslation from "next-translate/useTranslation";

const MakeModelVariant = () => {
  const {
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
    errors,
  } = useWizzard();
  const { showingTranslateValue } = useUtilsFunction();
  const { storeCustomizationSetting } = useGetSetting();
  let getManufacturers = async () => {
    let x = await instance.get("/buying/getManufacturers");
    console.log(x);
    return x.data.manufactuers;
  };

  const [manufacturers, setManufacturers] = useState();
  const [models, setModels] = useState();
  let getModels = async (make) => {
    let x = await instance.get("/buying/getModel/" + make);
    setModels(x.data.models);
    console.log(models);
  };
  const [variants, setVariants] = useState();

  let getVariants = async (make, model) => {
    let x = await instance.get(`/buying/getVariant/${make}/${model}`);
    setVariants(x.data.variants);
    console.log("variants==>>", variants);
  };
  useEffect(() => {
    getManufacturers().then((data) => {
      // manufacturers = data;
      setManufacturers(data);
    });
  }, []);

  let options = [];
  let currentYear = new Date().getFullYear();
  for (let y = currentYear; y > 1950; y--) {
    options.push(<option value={y}>{y}</option>);
  }

  const handleMakeChange = (e) => {
    console.log(e.target.value);
    getModels(e.target.value);
    setMake(e.target.value);
  };

  const handleModelChange = (e) => {
    setModel(e.target.value);
    getVariants(make, e.target.value);
  };
  const { t } = useTranslation();
  return (
    <div className=" w-3/4 border-4   p-2 border-collapse">
      <h1 className=" text-red-600 tracking-wide font-bold	text-center	">
        {t("common:makeModelVariant")}
      </h1>
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            {t("common:manufacturer")}
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="max-w-lg block focus:ring-gray-500 focus:border-gray-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              onChange={handleMakeChange}
            >
              <option value={make} selected>
                {make ? make : t("common:selectManufacturer")}
              </option>
              {manufacturers?.map((m) => (
                <option value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            {t("common:Model")}
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="max-w-lg block focus:ring-gray-500 focus:border-gray-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              onChange={handleModelChange}
              value={model}
            >
              <option value="" selected disabled>
                {model ? model : t("common:selectModel")}
              </option>
              {models?.map((m) => (
                <option value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>{" "}
        {/* model */}
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            {t("common:Variant")}
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="max-w-lg block focus:ring-gray-500 focus:border-gray-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              onChange={(e) => {
                setVariant(e.target.value);
                console.log(variant);
              }}
              value={variant}
            >
              <option value="" selected disabled>
                {variant ? variant : t("common:selectVariant")}
              </option>
              {variants?.map((m) => (
                <option value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>{" "}
        {/* variant */}
        {/* <div className="sm:col-span-2">
          <div className="max-w-lg">
            <p className="text-sm text-gray-500">Please Select your variant </p>
            <div className="mt-4 space-y-4 ml-8">
              <div className="flex items-center">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  className="focus:ring-gray-500 h-4 w-4 text-gray-500 border-gray-300"
                />
                <label
                  htmlFor="push-everything"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Everything
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  className="focus:ring-gray-500 h-4 w-4 text-gray-500 border-gray-300"
                />
                <label
                  htmlFor="push-email"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Same as email
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  className="focus:ring-gray-500 h-4 w-4 text-gray-500 border-gray-300"
                />
                <label
                  htmlFor="push-nothing"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  No push notifications
                </label>
              </div>
            </div>
          </div>
        </div> */}
        {/* country */}
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="year"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            {t("common:RegistrationYear")}
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <select
              id="year"
              name="year"
              autoComplete="year"
              className="max-w-lg block focus:ring-gray-500 focus:border-gray-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              required={true}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            >
              <option value="" selected>
                {year ? year : t("common:selectRegYear")}
              </option>

              {options}
            </select>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            {t("common:Image")}
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span> {t("common:UploadAfile")}</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  {image ? image.name : " PNG, JPG, GIF up to 10MB"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8  text-red-600 font-bold">
        {errors?.map((e) => (
          <p> * {e}</p>
        ))}
      </div>
    </div>
  );
};

export default MakeModelVariant;
