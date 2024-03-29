import React, { useState, useRef } from "react";

//internal import
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import PageHeader from "@component/header/PageHeader";
import CMSkeleton from "@component/preloader/CMSkeleton";
import useUtilsFunction from "@hooks/useUtilsFunction";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import MinifiedLayout from "@layout/MinifiedLayout";
import Stepper from "@component/wizzard/Stepper";
import StepperController from "@component/wizzard/StepperController";
import MakeModelVariant from "@component/wizzard/MakeModelVariant";
import HistoryCondition from "@component/wizzard/HistoryCondition";
import ContactDetails from "@component/wizzard/ContactDetails";
import PricingDetails from "@component/wizzard/PricingDetails";
import Summary from "@component/wizzard/Summary";
import Sidebar from "@component/wizzard/Sidebar";
import { WizardProvider } from "@context/WizardContext";

const QuotationRequest = () => {
  const { storeCustomizationSetting, loading, error } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  const { t } = useTranslation();
  const steps = [
    "Model & Variant",
    "History & Condition",
    "Contact Details",
    "Pricing",
    "Summary",
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const dispayStep = (step) => {
    switch (step) {
      case 1:
        return <MakeModelVariant />;

      case 2:
        return <HistoryCondition />;

      case 3:
        return <ContactDetails />;
      case 4:
        return <PricingDetails />;
      case 5:
        return <Summary setCurrentStep={setCurrentStep} />;
    }
  };

  const handleClick = async (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <MinifiedLayout
      title="Quotation Request"
      description="Submit Car details to get a quotation"
    >
      <WizardProvider>
        <div
          className="lg:w-2/3 mx-auto shaddow xl rounded-2xl pb-2 bg-white"
          style={{ backgroundColor: "#f1f5f9" }}
        >
          <div className="  mt-5 mb-0 sm:mb-12 p-4">
            <Stepper steps={steps} currentStep={currentStep} />
          </div>
          {/* <div className="w-1/4"></div> */}
          <div className=" flex justify-center pb-4">
            <Sidebar />
            {dispayStep(currentStep)}
          </div>

          {/* controller */}
          <StepperController
            handleClick={handleClick}
            steps={steps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </div>
      </WizardProvider>
    </MinifiedLayout>
  );
};

export default QuotationRequest;
