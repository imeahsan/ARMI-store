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
import { WizardProvider } from "@context/WizardContext";

const TermAndConditions = () => {
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
        return <Summary />;
    }
  };

  const handleClick = (direction) => {
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
          className="md:w-2/3 mx-auto shaddow xl rounded-2xl pb-2 bg-white"
          style={{ backgroundColor: "#f1f5f9" }}
        >
          <div className="container horizontal mt-5 mb-12 p-6">
            <Stepper steps={steps} currentStep={currentStep} />
          </div>
          {/* <div className="w-1/4"></div> */}
          <div>{dispayStep(currentStep)}</div>

          {/* controller */}
          <StepperController
            handleClick={handleClick}
            steps={steps}
            currentStep={currentStep}
          />
        </div>
      </WizardProvider>
    </MinifiedLayout>
  );
};

export default TermAndConditions;
