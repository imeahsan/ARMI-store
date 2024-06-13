import React, {useContext, useEffect, useState} from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

//internal import
import Layout from "@layout/Layout";
import useFilter from "@hooks/useFilter";
import ProductServices from "@services/ProductServices";
import ProductCard from "@component/product/ProductCard";
import {SidebarContext} from "@context/SidebarContext";
import Loading from "@component/preloader/Loading";
import AttributeServices from "@services/AttributeServices";
import SideFilter from "@component/SideFilter";
import Navbar from "@layout/navbar/Navbar";
import {useRouter} from "next/router";
import FilterComponent from "../component/FilterComponent"; // Import the filter component
const filterOptions = [
    {
        name: "Make",
        label: "Year",
        options: ["2020", "2021", "2022", "2023", "2024"]
    }, {
        name: "year",
        label: "Year",
        options: ["2020", "2021", "2022", "2023", "2024"]
    }, {
        name: "year",
        label: "Year",
        options: ["2020", "2021", "2022", "2023", "2024"]
    },
    {
        name: "fuelInduction",
        label: "Fuel Induction",
        options: ["Turbocharged", "Naturally Aspirated"]
    },
    {
        name: "grade",
        label: "Grade",
        options: ["Standard", "Premium", "Sport"]
    },
    {
        name: "body",
        label: "Body",
        options: ["Sedan", "Hatchback", "SUV"]
    },
    {
        name: "driversPosition",
        label: "Driver's Position",
        options: ["Left", "Right"]
    },
    {
        name: "engine",
        label: "Engine",
        options: ["1.6L", "2.0L", "2.5L"]
    },
    {
        name: "destination",
        label: "Destination",
        options: ["Domestic", "Export"]
    },
    {
        name: "transmissionModel",
        label: "Transmission Model",
        options: ["Automatic", "Manual"]
    },
    {
        name: "seatingCapacity",
        label: "Seating Capacity",
        options: ["4", "5", "7"]
    },
    {
        name: "gearShiftType",
        label: "Gear Shift Type",
        options: ["Column", "Floor"]
    },
    {
        name: "atmMtm",
        label: "ATM, MTM",
        options: ["ATM", "MTM"]
    },
    {
        name: "noOfDoors",
        label: "No. of Doors",
        options: ["2", "4"]
    }
];


const Search = ({products, attributes}) => {
    const {t} = useTranslation();
    const {isLoading, setIsLoading} = useContext(SidebarContext);
    const [visibleProduct, setVisibleProduct] = useState(18);
    const router = useRouter();

    useEffect(() => {
        setIsLoading(false);
        setFilteredProducts(products);
    }, [products]);

    const {setSortedField, productData} = useFilter(products);
    const [filteredProducts, setFilteredProducts] = useState(productData);

    const handleFilterChange = (filters) => {
        let filtered = products;

        Object.keys(filters).forEach((key) => {
            if (filters[key]) {
                filtered = filtered.filter(
                    (product) => product[key] === filters[key]
                );
            }
        });

        setFilteredProducts(filtered);
    };

    return (
        <Layout title="Search" description="This is search page">
            <Navbar/>
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div className="flex ">
                    <div className="flex w-full">
                        <div className="w-full">
                            <FilterComponent
                                attributes={filterOptions}
                                onFilterChange={handleFilterChange}
                            />
                            {filteredProducts?.length === 0 ? null : (
                                <div
                                    className="flex justify-between my-3 bg-orange-100 border border-gray-100 rounded p-3">
                                    <h6 className="text-sm font-serif">
                                        {t("common:totalI")}{" "}
                                        <span className="font-bold">
                      {filteredProducts?.length}
                    </span>{" "}
                                        {t("common:itemsFound")}
                                    </h6>
                                    <span className="text-sm font-serif">
                    <select
                        onChange={(e) => setSortedField(e.target.value)}
                        className="py-0 text-sm font-serif font-medium block w-full rounded border-0 bg-white pr-10 cursor-pointer focus:ring-0"
                    >
                      <option className="px-3" value="All" defaultValue hidden>
                        {t("common:sortByPrice")}
                      </option>
                      <option className="px-3" value="Low">
                        {t("common:lowToHigh")}
                      </option>
                      <option className="px-3" value="High">
                        {t("common:highToLow")}
                      </option>
                    </select>
                  </span>
                                </div>
                            )}


                            <SideFilter
                                attributes={attributes}
                                productData={productData}
                                setfilteredProducts={setFilteredProducts}
                            >
                                {isLoading ? (
                                    <Loading loading={isLoading}/>
                                ) : (
                                    <>
                                        {filteredProducts?.length === 0 ? (
                                            <div className="text-center  align-middle mx-auto p-5 my-5">
                                                <Image
                                                    className="my-4 mx-auto"
                                                    src="/no-result.svg"
                                                    alt="no-result"
                                                    width={400}
                                                    height={380}
                                                />
                                                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-center mt-2 font-medium font-serif text-gray-600">
                                                    {t("common:sorryText")} 😞
                                                </h2>
                                            </div>
                                        ) : null}
                                        <div
                                            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-2 md:gap-3 lg:gap-3 ">
                                            {filteredProducts
                                                ?.slice(0, visibleProduct)
                                                .map((product, i) => (
                                                    <div className="m-2 shadow-lg">
                                                        <ProductCard
                                                            key={i + 1}
                                                            product={product}
                                                            attributes={attributes}
                                                        />
                                                    </div>
                                                ))}
                                        </div>

                                        {productData?.length > visibleProduct && (
                                            <button
                                                onClick={() => setVisibleProduct((pre) => pre + 10)}
                                                className="w-auto mx-auto md:text-sm leading-5 flex items-center transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none bg-indigo-100 text-gray-700 px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-gray-600 h-12 mt-6 text-sm lg:text-sm"
                                            >
                                                {t("common:loadMoreBtn")}
                                            </button>
                                        )}
                                    </>
                                )}
                            </SideFilter>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Search;

export const getServerSideProps = async (context) => {
    const {query, _id, filter} = context.query;

    const [data, attributes] = await Promise.all([
        query
            ? ProductServices.getShowingStoreProducts({
                category: _id ? _id : "",
                title: query ? encodeURIComponent(query) : "",
            })
            // todo
            : filter ? ProductServices.getFilteredProducts(filter) : ProductServices.getShowingProducts({
                category: _id ? _id : "",
                title: query ? encodeURIComponent(query) : "",
            }),
        AttributeServices.getShowingAttributes({}),
    ]);

    return {
        props: {
            products: query||filter ? data.products : data,
            attributes,
        },
    };
};
