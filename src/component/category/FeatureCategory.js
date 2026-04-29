import { useRouter } from "next/router";
import { useContext } from "react";

//internal import

import useAsync from "@hooks/useAsync";
import CategoryServices from "@services/CategoryServices";
import CMSkeleton from "@component/preloader/CMSkeleton";
import { SidebarContext } from "@context/SidebarContext";
import useUtilsFunction from "@hooks/useUtilsFunction";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import DynamicIcon from "@component/icon/DynamicIcon";

const FeatureCategory = () => {
  const { setIsLoading } = useContext(SidebarContext);
  const { showingTranslateValue } = useUtilsFunction();

  const { data, error, loading } = useAsync(
    CategoryServices.getShowingCategory,
  );

  const getCategoryUrl = (id, nameEn) => {
    const slug = nameEn?.toLowerCase()?.replace(/[^A-Z0-9]+/gi, "-");
    return `/search?category=${slug}&_id=${id}`;
  };

  const { t } = useTranslation();
  return (
    <>
      {loading ? (
        <CMSkeleton count={10} height={20} error={error} loading={loading} />
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-4">
          {data?.map((category, i) => (
            <li className="group ml-4" key={category._id || i}>
              <Link
                href={getCategoryUrl(category?._id, category?.name?.en)}
                onClick={() => setIsLoading(true)}
                className="block w-full h-full"
              >
                <div className="flex w-full h-full border shadow-md rounded-lg bg-gray-100 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg group-hover:border-red-400">
                  <div className="w-full flex justify-center items-center">
                    <div className="relative p-6 flex flex-col items-center justify-center min-h-[200px]">
                      <DynamicIcon
                        iconName={category?.icon}
                        size={80}
                        className="text-gray-700 mb-4 transition duration-150 ease-linear transform group-hover:-translate-y-1"
                      />
                      <div className="text-center">
                        <h2 className="text-xl font-black mb-2 mt-2 uppercase italic">
                          {showingTranslateValue(category?.name)}
                        </h2>
                        <p className="text-sm text-gray-600">
                          {showingTranslateValue(category?.description)}
                        </p>
                      </div>
                      <div className="mt-4 text-center">
                        <span className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-red-700 transition-colors">
                          {t("common:shopNow")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FeatureCategory;
