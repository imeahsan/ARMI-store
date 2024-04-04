import { useWizzard } from "@context/WizardContext";
import React from "react";

const Summary = ({ setCurrentStep }) => {
  const { requestNo } = useWizzard();
  return (
    <div className=" w-3/4 border-4   p-2 border-collapse">
      <h1 className=" text-red-600 tracking-wide font-bold	text-center	uppercase">
        Summary
      </h1>
      {requestNo ? (
        <div className="space-y-8  divide-gray-200 sm:space-y-5 p-8">
          <p className="">
            Your request has been submitted successfully, or representative will
            contact you within 1 bussiness day for further queries, you can also
            conatct us ans about this request my nentioning your request number.
          </p>
          <h1 className="  tracking-wide font-bold">
            Request Number: <span className="text-red-600">{requestNo}</span>
          </h1>
        </div>
      ) : (
        <div className="space-y-8  divide-gray-200 sm:space-y-5 p-8">
          <p className="">
            Something went wrong whole submitting your request, please go back
            and try submitting your request again
          </p>
          <h1
            className="  tracking-wide font-bold"
            onClick={() => setCurrentStep(4)}
          >
            <span className="text-emerald-500">Go Back</span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Summary;
