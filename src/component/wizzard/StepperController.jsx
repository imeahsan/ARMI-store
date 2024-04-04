import { useWizzard } from "@context/WizardContext";
import useTranslation from "next-translate/useTranslation";
import React from "react";

const StepperController = ({ handleClick, steps, currentStep }) => {
  const { t } = useTranslation();
  // alert(currentStep);
  const { validateForm, submitData } = useWizzard();
  let stepper =
    currentStep < steps.length ? (
      <div className=" flex justify-around mt-4 mb-8">
        {/* back button */}
        <button
          onClick={() => handleClick()}
          className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-bold  border-2 border-slate-300 hover:bg-slate-700
         hover:text-white transition duration-200 ease-in-out ${
           parseInt(currentStep) == 1
             ? "opacity-50   cursor-not-allowed"
             : "cursor-pointer"
         } `}
        >
          {t("common:Back")}
        </button>
        {/* next button */}
        <button
          onClick={async () => {
            if (validateForm(currentStep)) {
              if (currentStep === 4) {
                let success = await submitData();
                if (success) {
                  return handleClick("next");
                }
                return null;
              }
              handleClick("next");
            }
          }}
          // currentStep !== steps.length - 1
          //   ? () =>
          //   : () => validateForm(currentStep)

          className="bg-red-500 text-white uppercase py-2 px-4 rounded-xl font-bold cursor-pointer   hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
        >
          {currentStep === steps.length - 1
            ? t("common:Submit")
            : t("common:Next")}
        </button>
      </div>
    ) : null;
  return stepper;
};

export default StepperController;
