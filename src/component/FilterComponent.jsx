import React, {useEffect, useState} from 'react';
import useTranslation from 'next-translate/useTranslation';
import {instance} from "@services/httpServices";
import {useRouter} from "next/router";

const FilterComponent = ({onFilterChange}) => {
    const [filters, setFilters] = useState({
        make: '',
        model: '',
        variant: '',
        year: ''
    });
    const [errors, setErrors] = useState({});
    const {t} = useTranslation();

    const handleFilterChange = (e) => {
        const {name, value} = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: !value,
        });
    };

    useEffect(() => {
        onFilterChange(filters);
    }, [filters]);


    let getManufacturers = async () => {
        let x = await instance.get("/buying/getManufacturers");
        console.log(x);
        return x.data.manufactuers;
    };

    const [manufacturers, setManufacturers] = useState();
    const [models, setModels] = useState();
    let getModels = async (make) => {
        let x = await instance.get("/buying/getModel/" + make);
        setModels(x.data.models);
        console.log(models);
    };
    const [make, setMake] = useState();
    const [model, setModel] = useState();
    const [variant, setVariant] = useState();
    const [variants, setVariants] = useState();
    const [year, setYear] = useState();

    let getVariants = async (make, model) => {
        let x = await instance.get(`/buying/getVariant/${make}/${model}`);
        setVariants(x.data.variants);
        console.log("variants==>>", variants);
    };
    const router = useRouter();

    useEffect(() => {
        getManufacturers().then((data) => {
            // manufacturers = data;
            setManufacturers(data);
        });
    }, []);

    let options = [];
    let currentYear = new Date().getFullYear();
    for (let y = currentYear; y > 1950; y--) {
        options.push(<option value={y}>{y}</option>);
    }

    const handleMakeChange = (e) => {
        console.log(e.target.value);
        getModels(e.target.value);
        setMake(e.target.value);
    };

    const handleModelChange = (e) => {
        setModel(e.target.value);
        getVariants(make, e.target.value);
    };
    const handleVariantChange = (e) => {
        setVariant(e.target.value);
    };
    const handleSubmit = () => {
        const newErrors = {};
        if (!make)
            newErrors['make'] = true;
        if (!model)
            newErrors['model'] = true;
        if (!variant)
            newErrors['variant'] = true;
        if (!year)
            newErrors['year'] = true;


        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Submit the form if no errors
            router.replace(`/search?filter=${JSON.stringify({make:make?.toLowerCase(), model:model?.toLowerCase(),variant:variant?.toLowerCase(), year:year?.toLowerCase()})}`, null, { scroll: false });
        }
    };

    return (
        <>
            <div className="grid grid-cols-2 gap-4 bg-gray-200 p-4 my-4">
                <div className="flex items-center justify-center w-full">
                    <select
                        className={`flex-grow px-4 py-2 border ${errors.make ? 'border-red-500' : 'border-gray-300'} rounded`}
                        name="make"
                        onChange={handleMakeChange}

                    >
                        <option value="" selected disabled>{t('common:SelectMake')}</option>
                        {manufacturers?.map((m) => (
                            <option value={m}>{m}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center justify-center w-full">
                    <select
                        className={`flex-grow px-4 py-2 border ${errors.model ? 'border-red-500' : 'border-gray-300'} rounded`}
                        name="model"
                        onChange={handleModelChange}
                        value={model}
                    >
                        <option value="" selected disabled>{t('common:SelectModel')}</option>
                        {models?.map((m) => (
                            <option value={m}>{m}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center justify-center w-full">
                    <select
                        className={`flex-grow px-4 py-2 border ${errors.variant ? 'border-red-500' : 'border-gray-300'} rounded`}
                        name="variant"
                        onChange={handleVariantChange}
                        value={variant}
                    >
                        <option value="" selected disabled>{t('common:SelectVariant')}</option>
                        {variants?.map((m) => (
                            <option value={m}>{m}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center justify-center w-full">
                    <select
                        className={`flex-grow px-4 py-2 border ${errors.year ? 'border-red-500' : 'border-gray-300'} rounded`}
                        name="year"
                        onChange={(e) => {
                            setYear(e.target.value)
                        }}
                    >
                        <option value="" selected disabled>{t('common:SelectYear')}</option>
                        {options}

                    </select>
                </div>
            </div>
            <button
                onClick={handleSubmit}
                className="w-auto mx-auto md:text-md transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none bg-red-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-gray-600 h-12 mt-0 text-sm lg:text-md"
            >
                {t('common:search')}
            </button>
        </>
    );
};

export default FilterComponent;

// Example usage
