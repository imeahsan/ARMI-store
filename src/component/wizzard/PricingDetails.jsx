import React from "react";
import Example from "./labels";
import { useWizzard } from "@context/WizardContext";

const PricingDetails = () => {
  const {
    currency,
    setCurrency,
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
    errors,
    validateForm,
  } = useWizzard();
  return (
    <div className=" w-3/4 border-4   p-2 border-collapse">
      <h1 className=" text-emerald-500 tracking-wide font-bold	text-center	uppercase">
        Pricing
      </h1>
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Price quoted elsewhere
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="text"
                name="price"
                id="price"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="0.00"
                value={quotedPrice}
                onChange={(e) => {
                  setQuotedPrice(e.target.value);
                }}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                  onChange={(e) => {
                    setCurrency(e.target.value);
                  }}
                  value={currency}
                >
                  <option value={currency || "SAR"} selected>
                    {currency || "SAR"}
                  </option>
                  <option value="SAR">SAR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Expected Price{" "}
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="text"
                name="price"
                id="price"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="0.00"
                value={expectedPrice}
                onChange={(e) => {
                  setExpectedPrice(e.target.value);
                }}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                  onChange={(e) => {
                    setCurrency(e.target.value);
                  }}
                  value={currency}
                >
                  <option value={currency || "SAR"} selected>
                    {currency || "SAR"}
                  </option>
                  <option value="SAR">SAR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="year"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            MOT Remaining
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <select
              id="year"
              name="year"
              autoComplete="year"
              className="max-w-lg block focus:ring-emerald-500 focus:border-emerald-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              required={true}
              onChange={(e) => {
                setMOT(e.target.value);
              }}
            >
              <option value="" selected>
                {MOT ? MOT : " Select RegistrationYear"}
              </option>
            </select>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Mileage
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="number"
              min={1}
              defaultValue={1}
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="max-w-lg block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              value={Mileage}
              onChange={(e) => {
                setMileage(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="detail"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Additional Details
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea
              id="detail"
              name="detail"
              rows={3}
              className="max-w-lg shadow-sm block w-full focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm border border-gray-300 rounded-md"
              defaultValue={""}
              placeholder="Extra details"
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="p-8 text-red-600 font-semibold">
        {errors?.map((e) => (
          <p> * {e}</p>
        ))}
      </div>
    </div>
  );
};

export default PricingDetails;
