import { useWizzard } from "@context/WizardContext";
import React from "react";

const Sidebar = () => {
  const reader = new FileReader();

  const { make, model, variant, year, image } = useWizzard();
  return (
    <div className=" w-1/4 border-4  p-2 bg-white border-collapse">
      <h1 className="  text-emerald-500 tracking-wide font-bold	text-center	">
        YOUR VEHICLE
      </h1>
      <div className="flex items-center justify-center">
        <div>
          <img
            className="inline-block  h-32  rounded-xl"
            src={image ? URL.createObjectURL(image) : "/car-placeholder.png"}
            alt=""
          />
        </div>
      </div>
      <p className="  text-emerald-500 tracking-wide font-bold text-sm	pt-8	">
        Make
      </p>
      <p className="  text-sm	 -mt-4	"> {make}</p>
      <p className="  text-emerald-500 tracking-wide font-bold text-sm		">
        Model :
      </p>
      <p className="  text-sm	-mt-4	">{model} </p>

      <p className="  text-emerald-500 tracking-wide font-bold text-sm		">
        Variant :
      </p>

      <p className="  text-sm	-mt-4	">{variant} </p>
      <p className="  text-emerald-500 tracking-wide font-bold text-sm		">
        Registration year :
      </p>

      <p className="  text-sm	-mt-4	">{year} </p>
    </div>
  );
};

export default Sidebar;
