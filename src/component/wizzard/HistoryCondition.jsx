import { useWizzard } from "@context/WizardContext";
import React from "react";

const HistoryCondition = () => {
  const {
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
    errors,
  } = useWizzard();
  return (
    <div className=" w-3/4 border-4   p-2 border-collapse">
      <h1 className=" text-emerald-500 tracking-wide font-bold	text-center	uppercase">
        History And Condition
      </h1>
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="sm:col-span-2">
          {/* condition */}
          <div className="max-w-lg">
            <p className="text-sm text-gray-500">
              What is the overall condition of your vehicle?
            </p>
            <div className="mt-4 space-y-4 ml-8">
              <div className="flex items-center">
                <input
                  id="condition"
                  name="condition"
                  type="radio"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-500 border-gray-300"
                  value={"poor"}
                  checked={condition === "poor"}
                  onChange={(e) => {
                    setCondition(e.target.value);
                  }}
                />
                <label
                  htmlFor="condition"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Poor
                  <span></span>
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="condition1"
                  name="condition"
                  type="radio"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-500 border-gray-300"
                  value={"average"}
                  checked={condition === "average"}
                  onChange={(e) => {
                    setCondition(e.target.value);
                  }}
                />
                <label
                  htmlFor="condition1"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Average
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="condition2"
                  name="condition"
                  type="radio"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-500 border-gray-300"
                  value={"full"}
                  checked={condition === "full"}
                  onChange={(e) => {
                    setCondition(e.target.value);
                  }}
                />
                <label
                  htmlFor="condition2"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Full
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* history */}
        <div className="sm:col-span-2">
          <div className="max-w-lg">
            <p className="text-sm text-gray-500">
              What is the service history of your vehicle?
            </p>
            <div className="mt-4 space-y-4 ml-8">
              <div className="flex items-center">
                <input
                  id="history"
                  name="history"
                  type="radio"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-500 border-gray-300"
                  value={"none"}
                  checked={history === "none"}
                  onChange={(e) => {
                    setHistory(e.target.value);
                  }}
                />
                <label
                  htmlFor="history"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  None
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="history1"
                  name="history"
                  type="radio"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-500 border-gray-300"
                  value={"partial"}
                  checked={history === "partial"}
                  onChange={(e) => {
                    setHistory(e.target.value);
                  }}
                />
                <label
                  htmlFor="history1"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Partial
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="history2"
                  name="history"
                  type="radio"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-500 border-gray-300"
                  value={"full"}
                  checked={history === "full"}
                  onChange={(e) => {
                    setHistory(e.target.value);
                  }}
                />
                <label
                  htmlFor="history2"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Full
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* fault */}
        <div className="sm:col-span-2">
          <div className="max-w-lg">
            <p className="text-sm text-gray-500">
              Does the vehicle has any major fault?{" "}
            </p>
            <div className="mt-4 space-y-4 ml-8">
              <div className="flex items-center">
                <input
                  id="fault"
                  name="fault"
                  type="radio"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-500 border-gray-300"
                  value={"yes"}
                  checked={fault === "yes"}
                  onChange={(e) => {
                    setFault(e.target.value);
                  }}
                />
                <label
                  htmlFor="fault"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="fault1"
                  name="fault"
                  type="radio"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-500 border-gray-300"
                  value={"no"}
                  checked={fault === "no"}
                  onChange={(e) => {
                    setFault(e.target.value);
                  }}
                />
                <label
                  htmlFor="fault1"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  No
                </label>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* loss */}
        <div className="sm:col-span-2">
          <div className="max-w-lg">
            <p className="text-sm text-gray-500">
              Has the vehicle previously been a total loss?
            </p>
            <div className="mt-4 space-y-4 ml-8">
              <div className="flex items-center">
                <input
                  id="loss"
                  name="loss"
                  type="radio"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-500 border-gray-300"
                  value={"yes"}
                  checked={loss === "yes"}
                  onChange={(e) => {
                    setLoss(e.target.value);
                  }}
                />
                <label
                  htmlFor="loss"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="loss1"
                  name="loss1"
                  type="radio"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-500 border-gray-300"
                  value={"no"}
                  checked={loss === "no"}
                  onChange={(e) => {
                    setLoss(e.target.value);
                  }}
                />
                <label
                  htmlFor="loss1"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  No
                </label>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* run and drive */}
        <div className="sm:col-span-2">
          <div className="max-w-lg">
            <p className="text-sm text-gray-500">
              Does the vehicle run and drive?{" "}
            </p>
            <div className="mt-4 space-y-4 ml-8">
              <div className="flex items-center">
                <input
                  id="drive"
                  name="push-notifications"
                  type="radio"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-500 border-gray-300"
                  value={"yes"}
                  checked={runAndDrive === "yes"}
                  onChange={(e) => {
                    setRunAndDrive(e.target.value);
                  }}
                />
                <label
                  htmlFor="drive"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="drive1"
                  name="push-notifications"
                  type="radio"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-500 border-gray-300"
                  value={"no"}
                  checked={runAndDrive === "no"}
                  onChange={(e) => {
                    setRunAndDrive(e.target.value);
                  }}
                />
                <label
                  htmlFor="drive1"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  No
                </label>
              </div>
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

export default HistoryCondition;
