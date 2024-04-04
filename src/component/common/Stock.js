import useTranslation from "next-translate/useTranslation";

const Stock = ({ stock, card }) => {
  const { t } = useTranslation();

  return (
    <div className="hidden md:block">
      {stock <= 0 ? (
        <span className="bg-red-100 absolute z-10 text-red-700 rounded-full hidden md:inline-flex items-center justify-center px-2 py-0 text-xs font-medium font-serif">
          {t("common:stockOut")}
        </span>
      ) : (
        <>
          <span
            className={`    ${
              card
                ? "bg-gray-100 absolute z-10 text-Gray-500 rounded-full text-xs px-2 py-0 font-medium"
                : "bg-green-100 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-0 text-xs font-bold font-serif"
            }`}
          >
            {t("common:stock")} :
            <span className="text-orange-700 pl-1 font-bold">{stock} </span>
          </span>
        </>
      )}
    </div>
  );
};

export default Stock;
