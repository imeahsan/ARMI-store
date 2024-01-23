import { useWizzard } from "@context/WizardContext";
import React from "react";

const ContactDetails = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
    errors,
  } = useWizzard();

  return (
    <div className=" w-3/4 border-4   p-2 border-collapse">
      <h1 className=" text-emerald-500 tracking-wide font-bold uppercase	text-center	">
        Contact Details
      </h1>
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Full Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="name"
                  className="flex-1 block w-full focus:ring-emerald-500 focus:border-emerald-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Phone No.
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="phone"
                  id="username"
                  autoComplete="phone"
                  className="flex-1 block w-full focus:ring-emerald-500 focus:border-emerald-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Email
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg flex rounded-md shadow-sm">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="flex-1 block w-full focus:ring-emerald-500 focus:border-emerald-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Address
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                id="address"
                name="address"
                autoComplete="address"
                rows={3}
                className="max-w-lg shadow-sm block w-full focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm border border-gray-300 rounded-md"
                defaultValue={""}
                placeholder="your complete address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-8  text-red-600 font-semibold">
        {errors?.map((e) => (
          <p> * {e}</p>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
