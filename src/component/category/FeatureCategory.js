import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

//internal import

import useAsync from "@hooks/useAsync";
import CategoryServices from "@services/CategoryServices";
import CMSkeleton from "@component/preloader/CMSkeleton";
import { SidebarContext } from "@context/SidebarContext";
import useUtilsFunction from "@hooks/useUtilsFunction";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const FeatureCategory = () => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { showingTranslateValue } = useUtilsFunction();

  const { data, error, loading } = useAsync(
    CategoryServices.getShowingCategory
  );

  // console.log('category',data)

  const handleCategoryClick = (id, categoryName) => {
    const category_name = categoryName
      ?.toLowerCase()
      ?.replace(/[^A-Z0-9]+/gi, "-");
    const url = `/search?category=${category_name}&_id=${id}`;
    router.push(url);
    setIsLoading(!isLoading);
  };
  const { t } = useTranslation();
  return (
    <>
      {loading ? (
        <CMSkeleton count={10} height={20} error={error} loading={loading} />
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-4">
          {data[0]?.children?.map((category, i) => (
            <>
              <li className="group ml-4" key={i + 1}>
                <div className="flex w-full h-full border shadow-md rounded-lg	 bg-gray-100   cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg ">
                  <div className=" w-full justify-center	 items-center">
                    <div class="  relative">
                      <Image
                        src={category?.icon}
                        alt="category"
                        width={350}
                        height={550}
                        className="object-contain transition duration-150 ease-linear transform group-hover:scale-105"
                      />
                      {/* <!-- Text Overlay --> */}
                      <div class="absolute top-0 left-0 right-0 bottom-0 flex items-start mb-8 justify-center">
                        <div class="text-center">
                          <h2 class="text-2xl font-black mb-2  mt-2 uppercase italic">
                            {showingTranslateValue(category?.name)}
                          </h2>
                          <p class="text-sm text-gray-600">
                            {" "}
                            {showingTranslateValue(category?.description)}
                          </p>
                        </div>
                      </div>
                      <div class="absolute top-0 left-0 right-0 bottom-0 flex items-end mb-8 justify-center">
                        <div class="text-center">
                          <a>
                            <button
                              className=""
                              class="mt-4 bg-emerald-500 text-white py-2 px-4 rounded-full"
                              onClick={() => {
                                handleCategoryClick(
                                  category?._id,
                                  category?.name.en
                                );
                              }}
                            >
                              {t("common:shopNow")}
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </>
          ))}
        </ul>
      )}
    </>
  );
};

export default FeatureCategory;
