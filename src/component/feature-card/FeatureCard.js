import React from "react";
import { FiCreditCard, FiGift, FiPhoneCall, FiTruck } from "react-icons/fi";
import useTranslation from "next-translate/useTranslation";

const FeatureCard = () => {
  const { t } = useTranslation();

  const featurePromo = [
    {
      id: 1,
      title: t("common:featurePromo1-title"),
      info: t("common:featurePromo1-info"),
      icon: FiTruck,
    },
    {
      id: 2,
      title: t("common:featurePromo2-title"),
      info: t("common:featurePromo2-info"),
      icon: FiPhoneCall,
    },
    {
      id: 3,
      title: t("common:featurePromo3-title"),
      info: t("common:featurePromo3-info"),
      icon: FiCreditCard,
    },
    {
      id: 4,
      title: t("common:featurePromo4-title"),
      info: t("common:featurePromo4-info"),
      icon: FiGift,
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mx-auto">
      {featurePromo.map((promo, index) => (
        <div
          key={promo.id}
          className={
            " border-r border-gray-200 py-1 flex items-center justify-center bg-white" +
            (index === 0 ? " border-l" : "")
          }
        >
          <div className="mr-3">
            <promo.icon
              className="flex-shrink-0 h-4 w-4 text-red-600"
              aria-hidden="true"
            />
          </div>
          <div className="">
            <span className="block font-serif text-sm font-medium leading-5">
              {promo?.title}
            </span>
            <span className="block font-serif text-xs text-gray-500 leading-4">
              {promo?.info}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
