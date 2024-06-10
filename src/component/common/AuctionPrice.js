import useUtilsFunction from "@hooks/useUtilsFunction";
import useTranslation from "next-translate/useTranslation";

const AuctionPrice = ({ product, price, card, currency, originalPrice }) => {
  // console.log("price", price, "originalPrice", originalPrice, "card", card);
  const { getNumberTwo } = useUtilsFunction();
  const { t } = useTranslation();
  return (
    <div className="flex flex-col font-serif product-price font-bold">
      <>
        <span className="text-gray-500 text-sm">{t("common:StartingBid")}</span>
        <span
          className={
            card
              ? "inline-block text-lg font-bold text-gray-800"
              : "inline-block text-2xl"
          }
        >
          {currency}
          {getNumberTwo(product?.prices?.originalPrice)}
        </span>
      </>
    </div>
  );
};

export default AuctionPrice;
