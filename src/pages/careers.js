import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import { FiMail, FiMapPin, FiBell } from "react-icons/fi";

//internal import
import Layout from "@layout/Layout";
import Label from "@component/form/Label";
import Error from "@component/form/Error";
import { notifyError, notifySuccess } from "@utils/toast";
import InputArea from "@component/form/InputArea";
import PageHeader from "@component/header/PageHeader";
import useGetSetting from "@hooks/useGetSetting";
import CMSkeleton from "@component/preloader/CMSkeleton";
import useUtilsFunction from "@hooks/useUtilsFunction";
import axios from "axios";
import { instance } from "@services/httpServices";

const Careers = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { showingTranslateValue } = useUtilsFunction();
  const { storeCustomizationSetting, loading, error } = useGetSetting();

  const submitHandler = async ({ ...data }) => {
    try {
      console.log(data);
      let formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("cv", data.subject[0]);
      formData.append("message", data.message);
      let res = await instance.post("/utils/careers", formData);
      if (res.data.success) {
        console.log(res.data);
        notifySuccess(
          "your message sent successfully. We will contact you shortly."
        );
        return true;
      }
      notifyError("Unable to process your request. Please try again later.");
    } catch (e) {
      notifyError("Unable to process your request. Please try again later.");
    }
  };
  return (
    <Layout title="Careers" description="This is contact us page">
      <PageHeader
        headerBg={storeCustomizationSetting?.contact_us?.header_bg}
        title={t("common:careers")}
      />

      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-0 py-10 px-4 sm:px-10">
          {/* contact promo */}

          {/* contact form */}
          <div className="px-0  mx-auto items-center flex flex-col md:flex-row w-full justify-center">
            {/* <div className="hidden md:w-full lg:w-5/12 lg:flex flex-col h-full">
              <Image
                width={874}
                height={874}
                src={
                  // storeCustomizationSetting?.contact_us?.midLeft_col_img ||
                  "/careers.svg"
                }
                alt="logo"
                className="block w-auto"
              />
            </div> */}
            <div className="px-0 pb-2 lg:w-5/12 flex flex-col md:flex-row">
              <form
                onSubmit={handleSubmit(submitHandler)}
                className="w-full mx-auto flex flex-col justify-center"
              >
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl lg:text-2xl font-bold font-serif mb-3">
                    <CMSkeleton
                      count={1}
                      height={50}
                      // error={error}
                      loading={loading}
                      data={{
                        en: t("common:careerHeading"),
                        de: t("common:careerHeading"),
                      }}
                    />
                  </h3>
                  <p className="text-base opacity-90 leading-7">
                    <CMSkeleton
                      count={2}
                      height={20}
                      // error={error}
                      loading={loading}
                      data={{
                        en: t("common:careerDesc"),
                        de: t("common:careerDesc"),
                      }}
                    />
                  </p>
                </div>

                <div className="flex flex-col space-y-5">
                  <div className="flex flex-col md:flex-row space-y-5  md:space-y-0">
                    <div className="w-full md:w-1/2 ">
                      <InputArea
                        register={register}
                        label={t("common:contact-page-form-input-name")}
                        name="name"
                        type="text"
                        placeholder={t(
                          "common:contact-page-form-plaholder-name"
                        )}
                      />
                      <Error errorName={errors.name} />
                    </div>
                    <div className="w-full md:w-1/2 md:ml-2.5 lg:ml-5 lg:mr-5 mt-2 md:mt-0">
                      <InputArea
                        register={register}
                        label={t("common:contact-page-form-input-email")}
                        name="email"
                        type="email"
                        placeholder={t(
                          "common:contact-page-form-plaholder-email"
                        )}
                      />
                      <Error errorName={errors.email} />
                    </div>
                  </div>
                  <div className="relative">
                    <InputArea
                      register={register}
                      label={t("common:cv")}
                      name="subject"
                      type="file"
                      placeholder={t("common:cv")}
                    />
                    <Error errorName={errors.subject} />
                  </div>
                  <div className="relative">
                    <Label label={"Position"} />

                    <select
                      name="job_position"
                      {...register(`${"job"}`, {
                        required: `${"job"} is required!`,
                      })}
                      className={
                        "py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-gray-500 h-11 md:h-12"
                      }
                    >
                      <option value="" selected disabled>
                        Position
                      </option>
                      <option value="software_engineer">
                        Software Engineer
                      </option>
                      <option value="marketing_manager">
                        Marketing Manager
                      </option>
                      <option value="sales_representative">
                        Sales Representative
                      </option>
                      <option value="customer_support_specialist">
                        Customer Support Specialist
                      </option>
                      <option value="project_manager">Project Manager</option>
                      <option value="data_analyst">Data Analyst</option>
                      <option value="human_resources_coordinator">
                        Human Resources Coordinator
                      </option>
                      <option value="graphic_designer">Graphic Designer</option>
                      <option value="financial_analyst">
                        Financial Analyst
                      </option>
                      <option value="content_writer_editor">
                        Content Writer/Editor
                      </option>
                      <option value="other">Other </option>
                    </select>

                    <Error errorName={errors.subject} />
                  </div>
                  <div className="relative mb-4">
                    <Label
                      label={t("common:contact-page-form-input-message")}
                    />
                    <textarea
                      {...register("message", {
                        required: `Message is required!`,
                      })}
                      name="message"
                      className="px-4 py-3 flex items-center w-full rounded appearance-none opacity-75 transition duration-300 ease-in-out text-sm focus:ring-0 bg-white border border-gray-300 focus:shadow-none focus:outline-none focus:border-gray-500 placeholder-body"
                      autoComplete="off"
                      spellCheck="false"
                      rows="4"
                      placeholder={t(
                        "common:contact-page-form-plaholder-message"
                      )}
                    ></textarea>
                    <Error errorName={errors.message} />
                  </div>
                  <div className="relative">
                    <button
                      data-variant="flat"
                      className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-bold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-red-500 text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 hover:text-white hover:bg-red-600 h-12 mt-1 text-sm lg:text-base w-full sm:w-auto"
                    >
                      {t("common:contact-page-form-send-btn")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8 font-serif pt-24">
            {loading ? (
              <CMSkeleton
                count={10}
                height={20}
                error={error}
                loading={loading}
              />
            ) : (
              <div className="border p-10 rounded-lg text-center">
                <span className="flex justify-center text-4xl text-red-500 mb-4">
                  <FiMail />
                </span>
                <h5 className="text-xl mb-2 font-bold">
                  {showingTranslateValue(
                    storeCustomizationSetting?.contact_us?.email_box_title
                  )}
                </h5>
                <p className="mb-0 text-base opacity-90 leading-7">
                  <a
                    href={`mailto:${storeCustomizationSetting?.contact_us?.email_box_email}`}
                    className="text-red-500"
                  >
                    {showingTranslateValue(
                      storeCustomizationSetting?.contact_us?.email_box_email
                    )}
                  </a>{" "}
                  {showingTranslateValue(
                    storeCustomizationSetting?.contact_us?.email_box_text
                  )}
                </p>
              </div>
            )}

            {loading ? (
              <CMSkeleton
                count={10}
                height={20}
                error={error}
                loading={loading}
              />
            ) : (
              <div className="border p-10 rounded-lg text-center">
                <span className="flex justify-center text-4xl text-red-500 mb-4">
                  <FiBell />
                </span>
                <h5 className="text-xl mb-2 font-bold">
                  {showingTranslateValue(
                    storeCustomizationSetting?.contact_us?.call_box_title
                  )}
                </h5>
                <p className="mb-0 text-base opacity-90 leading-7">
                  <a
                    href={`mailto:${storeCustomizationSetting?.contact_us?.call_box_phone}`}
                    className="text-red-500"
                  >
                    {showingTranslateValue(
                      storeCustomizationSetting?.contact_us?.call_box_phone
                    )}
                  </a>{" "}
                  {showingTranslateValue(
                    storeCustomizationSetting?.contact_us?.call_box_text
                  )}
                </p>
              </div>
            )}
            {loading ? (
              <CMSkeleton
                count={10}
                height={20}
                error={error}
                loading={loading}
              />
            ) : (
              <div className="border p-10 rounded-lg text-center">
                <span className="flex justify-center text-4xl text-red-500 mb-4">
                  <FiMapPin />
                </span>
                <h5 className="text-xl mb-2 font-bold">
                  {showingTranslateValue(
                    storeCustomizationSetting?.contact_us?.address_box_title
                  )}
                </h5>
                <p className="mb-0 text-base opacity-90 leading-7">
                  <span>
                    {showingTranslateValue(
                      storeCustomizationSetting?.contact_us
                        ?.address_box_address_one
                    )}
                  </span>{" "}
                  <br />
                  {showingTranslateValue(
                    storeCustomizationSetting?.contact_us
                      ?.address_box_address_two
                  )}{" "}
                  <br />
                  {showingTranslateValue(
                    storeCustomizationSetting?.contact_us
                      ?.address_box_address_three
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
