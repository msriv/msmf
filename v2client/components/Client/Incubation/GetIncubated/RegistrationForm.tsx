import { Snackbar } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { ChangeEvent, useState } from "react";
import * as Yup from "yup";
import { createRoute, ServerRoutes } from "../../../../utils/API";

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      orgName: "",
      applicantName: "",
      email: "",
      phoneNumber: "",
      linkedInProfile: "",
      alternateContact: "",
      stage: "",
      isNonProfit: false,
      mcaRegistration: false,
      incorporationYear: "",
      headquarters: "",
      sector: "",
      subSector: "",
      customerProblem: "",
      solution: "",
      solutionBetter: "",
      primaryBeneficiary: "",
      milestone: "",
      reasonToIncubate: "",
      earlierFunds: false,
      totalEarlierFunds: "",
      anyPatent: false,
      aboutPatent: "",
      otherDetails: "",
      pitchDeck: null,
      logo: null,
      gdpr: false,
    },
    validationSchema: Yup.object().shape({
      orgName: Yup.string().required("Organisation Name Missing!"),
      applicantName: Yup.string().required("Applicant Name Missing!"),
      email: Yup.string()
        .email("Should be an email")
        .required("Email ID Missing!"),
      phoneNumber: Yup.string()
        .max(13, "Add a valid mobile number")
        .required("Phone Number Missing!"),
      linkedInProfile: Yup.string()
        .url("Must be a URL")
        .required("LinkedIn Profile Missing!"),
      alternateContact: Yup.string(),
      stage: Yup.string().required("Start-up stage missing"),
      isNonProfit: Yup.bool().required("Non Profit Declaration missing"),
      mcaRegistration: Yup.bool().required(
        "MCA Registration Declaration missing"
      ),
      incorporationYear: Yup.string()
        .min(4, "Enter a valid year")
        .required("Incorporation Year Missing"),
      headquarters: Yup.string().required("Headquarters missing"),
      sector: Yup.string().required("Sector missing"),
      subSector: Yup.string().required("Sub Sector missing"),
      customerProblem: Yup.string().required("Problem missing"),
      solution: Yup.string().required("Solution missing"),
      solutionBetter: Yup.string().required(
        "Please mention why your solution is better?"
      ),
      primaryBeneficiary: Yup.string().required("Primary Beneficiary missing"),
      milestone: Yup.string().required("Milestone missing"),
      reasonToIncubate: Yup.string().required("Reason to Incubate missing"),
      earlierFunds: Yup.bool().required("Earlier Fund Declaration missing"),
      totalEarlierFunds: Yup.string(),
      anyPatent: Yup.bool().required("Patent Declaration missing"),
      aboutPatent: Yup.string(),
      otherDetails: Yup.string(),
      pitchDeck: Yup.mixed().required("Pitch Deck Missing"),
      logo: Yup.mixed().required(),
      gdpr: Yup.bool().oneOf([true], "Must accept GDPR"),
    }),
    onSubmit: async (values: any, { resetForm }) => {
      if (Object.keys(formik.errors).length > 0) {
        return;
      }

      const formData = new FormData();

      Object.keys(values).forEach((val: string) => {
        formData.append(`${val}`, values[val]);
      });

      try {
        const response = await axios.post(
          "https://script.google.com/macros/s/AKfycbyKwtqrjyLmRQFQOszL4-D2RjceKwUuCHXgzzZt4je_32r1GksfN4D5a9tUlTMWetwH/exec",
          formData,
          {
            
          }
        );
        // resetForm({ ...formik.initialValues });
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="w-10/12 mx-auto">
      <label className="block mt-2" htmlFor="orgName">
        <span className="text-gray-700 text-xl">
          Name of the Organisation / Startup
        </span>
        <input
          type="text"
          name="orgName"
          id="orgName"
          placeholder="Enter Organisation Name..."
          value={formik.values.orgName}
          className={`mt-1 block w-full text-xl ${
            formik.touched.orgName &&
            formik.errors.orgName &&
            "border-red-500 border-2 ring-2 ring-red-200"
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.orgName && formik.errors.orgName ? (
          <span>{formik.errors.orgName}</span>
        ) : null}
      </label>
      <label className="block mt-6" htmlFor="applicantName">
        <span className="text-gray-700 text-xl">
          Name of the Applicant / Entrepreneur
        </span>
        <input
          type="text"
          name="applicantName"
          id="applicantName"
          placeholder="Your name?"
          value={formik.values.applicantName}
          className={`mt-1 block w-full text-xl ${
            formik.touched.applicantName &&
            formik.errors.applicantName &&
            "border-red-500 border-2 ring-2 ring-red-200"
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.applicantName && formik.errors.applicantName ? (
          <span>{formik.errors.applicantName}</span>
        ) : null}
      </label>
      <div className="flex flex-grow-1 space-x-10 w-full">
        <label className="block mt-6 w-full" htmlFor="email">
          <span className="text-gray-700 text-xl">Email Address</span>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Organisation Email Address..."
            value={formik.values.email}
            className={`mt-1 block w-full text-xl ${
              formik.touched.email &&
              formik.errors.email &&
              "border-red-500 border-2 ring-2 ring-red-200"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <span>{formik.errors.email}</span>
          ) : null}
        </label>
        <label className="block mt-6 w-full" htmlFor="phoneNumber">
          <span className="text-gray-700 text-xl">Mobile Number</span>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Mobile Number of Point of Contact"
            value={formik.values.phoneNumber}
            className={`mt-1 block w-full text-xl ${
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? "border-red-500 border-2 ring-2 ring-red-200"
                : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <span>{formik.errors.phoneNumber}</span>
          ) : null}
        </label>
      </div>
      <div className="flex flex-grow-1 space-x-10 w-full">
        <label className="block mt-6 w-full" htmlFor="linkedInProfile">
          <span className="text-gray-700 text-xl">LinkedIn Profile URL</span>
          <input
            type="text"
            name="linkedInProfile"
            id="linkedInProfile"
            placeholder="Organisation LinkedIn Profile"
            value={formik.values.linkedInProfile}
            className={`mt-1 block w-full text-xl ${
              formik.touched.linkedInProfile &&
              formik.errors.linkedInProfile &&
              "border-red-500 border-2 ring-2 ring-red-200"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.linkedInProfile && formik.errors.linkedInProfile ? (
            <span>{formik.errors.linkedInProfile}</span>
          ) : null}
        </label>
        <label className="block mt-6 w-full" htmlFor="alternateContact">
          <span className="text-gray-700 text-xl">
            Alternative contact info
          </span>
          <input
            type="text"
            name="alternateContact"
            id="alternateContact"
            placeholder="Any other way to contact?"
            value={formik.values.alternateContact}
            className={`mt-1 block w-full text-xl ${
              formik.touched.alternateContact &&
              formik.errors.alternateContact &&
              "border-red-500 border-2 ring-2 ring-red-200"
            }`}
            onChange={formik.handleChange}
          />
          {formik.touched.linkedInProfile && formik.errors.linkedInProfile ? (
            <span>{formik.errors.linkedInProfile}</span>
          ) : null}
        </label>
      </div>
      <label className="block mt-6" htmlFor="stage">
        <span className="text-gray-700 text-xl">Start-up Stage</span>
        <input
          type="text"
          name="stage"
          id="stage"
          placeholder="Enter Startup Stage"
          value={formik.values.stage}
          className={`mt-1 block w-full text-xl ${
            formik.touched.stage &&
            formik.errors.stage &&
            "border-red-500 border-2 ring-2 ring-red-200"
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.linkedInProfile && formik.errors.linkedInProfile ? (
          <span>{formik.errors.linkedInProfile}</span>
        ) : null}
      </label>
      <div className="mt-6">
        <span className="text-gray-700 text-xl">
          Is your enterprise a Non-profit or For-profit start-up ?
        </span>
        <div role={"radiogroup"} className="flex flex-start space-x-16">
          <label className="mt-6 flex items-center" htmlFor="isNonProfitYes">
            <input
              type="radio"
              name="isNonProfitYes"
              id="isNonProfitYes"
              checked={formik.values.isNonProfit}
              onChange={(event) => {
                formik.setFieldValue("isNonProfit", true);
              }}
              onBlur={formik.handleBlur}
            />
            <span className="text-gray-700 text-xl ml-4">Yes</span>
          </label>
          <label className="mt-6 flex items-center" htmlFor="isNonProfitNo">
            <input
              type="radio"
              name="isNonProfitNo"
              id="isNonProfitNo"
              checked={!formik.values.isNonProfit}
              onChange={(event) => {
                formik.setFieldValue("isNonProfit", false);
              }}
              onBlur={formik.handleBlur}
            />
            <span className="text-gray-700 text-xl ml-4">No</span>
          </label>
        </div>
        {formik.touched.isNonProfit && formik.errors.isNonProfit && (
          <p className="text-red-500 text-base">{formik.errors.isNonProfit}</p>
        )}
      </div>
      <div className="mt-6">
        <span className="text-gray-700 text-xl">
          Is your company registered under the MCA?
        </span>
        <div role={"radiogroup"} className="flex flex-start space-x-16">
          <label
            className="mt-6 flex items-center"
            htmlFor="mcaRegistrationYes"
          >
            <input
              type="radio"
              name="mcaRegistrationYes"
              id="mcaRegistrationYes"
              checked={formik.values.mcaRegistration}
              onChange={(event) => {
                formik.setFieldValue("mcaRegistration", true);
              }}
              onBlur={formik.handleBlur}
            />
            <span className="text-gray-700 text-xl ml-4">Yes</span>
          </label>
          <label className="mt-6 flex items-center" htmlFor="mcaRegistrationNo">
            <input
              type="radio"
              name="mcaRegistrationNo"
              id="mcaRegistrationNo"
              checked={!formik.values.mcaRegistration}
              onChange={(event) => {
                formik.setFieldValue("mcaRegistration", false);
              }}
              onBlur={formik.handleBlur}
            />
            <span className="text-gray-700 text-xl ml-4">No</span>
          </label>
        </div>
        {formik.touched.mcaRegistration && formik.errors.mcaRegistration && (
          <p className="text-red-500 text-base">
            {formik.errors.mcaRegistration}
          </p>
        )}
      </div>
      <div className="flex flex-grow-1 space-x-10 w-full">
        <label className="block mt-6 w-full" htmlFor="incorporationYear">
          <span className="text-gray-700 text-xl">Year of Incorporation</span>
          <input
            type="text"
            name="incorporationYear"
            id="incorporationYear"
            placeholder="Enter year of incorporation"
            value={formik.values.incorporationYear}
            className={`mt-1 block w-full text-xl ${
              formik.touched.incorporationYear &&
              formik.errors.incorporationYear &&
              "border-red-500 border-2 ring-2 ring-red-200"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.incorporationYear &&
          formik.errors.incorporationYear ? (
            <span>{formik.errors.incorporationYear}</span>
          ) : null}
        </label>
        <label className="block mt-6 w-full" htmlFor="headquarters">
          <span className="text-gray-700 text-xl">Headquarter City</span>
          <input
            type="text"
            name="headquarters"
            id="headquarters"
            placeholder="Your headquarter's based out of..."
            value={formik.values.headquarters}
            className={`mt-1 block w-full text-xl ${
              formik.touched.headquarters &&
              formik.errors.headquarters &&
              "border-red-500 border-2 ring-2 ring-red-200"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.headquarters && formik.errors.headquarters ? (
            <span>{formik.errors.headquarters}</span>
          ) : null}
        </label>
      </div>
      <div className="flex flex-grow-1 space-x-10 w-full">
        <label className="block mt-6 w-full" htmlFor="sector">
          <span className="text-gray-700 text-xl">Sector</span>
          <input
            type="text"
            name="sector"
            id="sector"
            placeholder="Enter sector..."
            value={formik.values.sector}
            className={`mt-1 block w-full text-xl ${
              formik.touched.sector &&
              formik.errors.sector &&
              "border-red-500 border-2 ring-2 ring-red-200"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.sector && formik.errors.sector ? (
            <span>{formik.errors.sector}</span>
          ) : null}
        </label>
        <label className="block mt-6 w-full" htmlFor="subSector">
          <span className="text-gray-700 text-xl">Sub-sector</span>
          <input
            type="text"
            name="subSector"
            id="subSector"
            placeholder="Enter sub-sector..."
            value={formik.values.subSector}
            className={`mt-1 block w-full text-xl ${
              formik.touched.subSector &&
              formik.errors.subSector &&
              "border-red-500 border-2 ring-2 ring-red-200"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.subSector && formik.errors.subSector ? (
            <span>{formik.errors.subSector}</span>
          ) : null}
        </label>
      </div>
      <label className="block mt-6" htmlFor="customerProblem">
        <span className="text-gray-700 text-xl">
          What is the customer problem you are addressing ?
        </span>
        <textarea
          name="customerProblem"
          id="customerProblem"
          rows={3}
          value={formik.values.customerProblem}
          className={`mt-1 block w-full text-xl ${
            formik.touched.customerProblem &&
            formik.errors.customerProblem &&
            "border-red-500 border-2 ring-2 ring-red-200"
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.customerProblem && formik.errors.customerProblem ? (
          <span>{formik.errors.customerProblem}</span>
        ) : null}
      </label>
      <label className="block mt-6" htmlFor="solution">
        <span className="text-gray-700 text-xl">
          What is your solution to address the customer problem?
        </span>
        <textarea
          name="solution"
          id="solution"
          rows={3}
          value={formik.values.solution}
          className={`mt-1 block w-full text-xl ${
            formik.touched.solution &&
            formik.errors.solution &&
            "border-red-500 border-2 ring-2 ring-red-200"
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.solution && formik.errors.solution ? (
          <span>{formik.errors.solution}</span>
        ) : null}
      </label>
      <label className="block mt-6" htmlFor="solutionBetter">
        <span className="text-gray-700 text-xl">
          How is your solution better than the available options in the market?
        </span>
        <textarea
          name="solutionBetter"
          id="solutionBetter"
          rows={3}
          value={formik.values.solutionBetter}
          className={`mt-1 block w-full text-xl ${
            formik.touched.solutionBetter &&
            formik.errors.solutionBetter &&
            "border-red-500 border-2 ring-2 ring-red-200"
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.solutionBetter && formik.errors.solutionBetter ? (
          <span>{formik.errors.solutionBetter}</span>
        ) : null}
      </label>
      <label className="block mt-6" htmlFor="primaryBeneficiary">
        <span className="text-gray-700 text-xl">
          Who is the primary beneficiary of your product/service ?
        </span>
        <textarea
          name="primaryBeneficiary"
          id="primaryBeneficiary"
          rows={3}
          value={formik.values.primaryBeneficiary}
          className={`mt-1 block w-full text-xl ${
            formik.touched.primaryBeneficiary &&
            formik.errors.primaryBeneficiary &&
            "border-red-500 border-2 ring-2 ring-red-200"
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.primaryBeneficiary &&
        formik.errors.primaryBeneficiary ? (
          <span>{formik.errors.primaryBeneficiary}</span>
        ) : null}
      </label>
      <label className="block mt-6" htmlFor="milestone">
        <span className="text-gray-700 text-xl">
          Highlight significant milestones achieved by the company
        </span>
        <textarea
          name="milestone"
          id="milestone"
          rows={3}
          value={formik.values.milestone}
          className={`mt-1 block w-full text-xl ${
            formik.touched.milestone &&
            formik.errors.milestone &&
            "border-red-500 border-2 ring-2 ring-red-200"
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.milestone && formik.errors.milestone ? (
          <span>{formik.errors.milestone}</span>
        ) : null}
      </label>
      <label className="block mt-6" htmlFor="reasonToIncubate">
        <span className="text-gray-700 text-xl">
          What are you seeking from your Incubation at Bionest ?
        </span>
        <textarea
          name="reasonToIncubate"
          id="reasonToIncubate"
          rows={3}
          value={formik.values.reasonToIncubate}
          className={`mt-1 block w-full text-xl ${
            formik.touched.reasonToIncubate &&
            formik.errors.reasonToIncubate &&
            "border-red-500 border-2 ring-2 ring-red-200"
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.reasonToIncubate && formik.errors.reasonToIncubate ? (
          <span>{formik.errors.reasonToIncubate}</span>
        ) : null}
      </label>
      <div className="mt-6">
        <span className="text-gray-700 text-xl">
          Have you raised funds in the past?
        </span>
        <div role={"radiogroup"} className="flex flex-start space-x-16">
          <label className="mt-6 flex items-center" htmlFor="raisedFundsYes">
            <input
              type="radio"
              name="raisedFundsYes"
              id="raisedFundsYes"
              checked={formik.values.earlierFunds}
              onChange={(event) => {
                formik.setFieldValue("earlierFunds", true);
              }}
              onBlur={formik.handleBlur}
            />
            <span className="text-gray-700 text-xl ml-4">Yes</span>
          </label>
          <label className="mt-6 flex items-center" htmlFor="raisedFundsNo">
            <input
              type="radio"
              name="raisedFundsNo"
              id="raisedFundsNo"
              checked={!formik.values.earlierFunds}
              onChange={(event) => {
                formik.setFieldValue("earlierFunds", false);
              }}
              onBlur={formik.handleBlur}
            />
            <span className="text-gray-700 text-xl ml-4">No</span>
          </label>
        </div>
        {formik.touched.earlierFunds && formik.errors.earlierFunds && (
          <p className="text-red-500 text-base">{formik.errors.earlierFunds}</p>
        )}
      </div>
      {formik.values.earlierFunds ? (
        <label className="block mt-6" htmlFor="totalEarlierFunds">
          <span className="text-gray-700 text-xl">Total Grant Amount</span>
          <input
            type="text"
            name="totalEarlierFunds"
            id="totalEarlierFunds"
            value={formik.values.totalEarlierFunds}
            className={`mt-1 block w-full text-xl ${
              formik.touched.totalEarlierFunds &&
              formik.errors.totalEarlierFunds &&
              "border-red-500 border-2 ring-2 ring-red-200"
            }`}
            onChange={formik.handleChange}
          />
          {formik.touched.totalEarlierFunds &&
          formik.errors.totalEarlierFunds ? (
            <span>{formik.errors.totalEarlierFunds}</span>
          ) : null}
        </label>
      ) : null}
      <div className="mt-6">
        <span className="text-gray-700 text-xl">
          Have you filed for any patent?
        </span>
        <div role={"radiogroup"} className="flex flex-start space-x-16">
          <label className="mt-6 flex items-center" htmlFor="patentFiledYes">
            <input
              type="radio"
              name="patentFiledYes"
              id="patentFiledYes"
              checked={formik.values.anyPatent}
              onChange={(event) => {
                formik.setFieldValue("anyPatent", true);
              }}
              onBlur={formik.handleBlur}
            />
            <span className="text-gray-700 text-xl ml-4">Yes</span>
          </label>
          <label className="mt-6 flex items-center" htmlFor="patentFiledNo">
            <input
              type="radio"
              name="patentFiledNo"
              id="patentFiledNo"
              checked={!formik.values.anyPatent}
              onChange={(event) => {
                formik.setFieldValue("anyPatent", false);
              }}
              onBlur={formik.handleBlur}
            />
            <span className="text-gray-700 text-xl ml-4">No</span>
          </label>
        </div>
        {formik.touched.anyPatent && formik.errors.anyPatent && (
          <p className="text-red-500 text-base">{formik.errors.anyPatent}</p>
        )}
      </div>
      {formik.values.anyPatent ? (
        <label className="block mt-6" htmlFor="aboutPatent">
          <span className="text-gray-700 text-xl">
            If yes, what is the patent for?
          </span>
          <textarea
            name="aboutPatent"
            id="aboutPatent"
            rows={3}
            value={formik.values.aboutPatent}
            className={`mt-1 block w-full text-xl ${
              formik.touched.aboutPatent &&
              formik.errors.aboutPatent &&
              "border-red-500 border-2 ring-2 ring-red-200"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.aboutPatent && formik.errors.aboutPatent ? (
            <span>{formik.errors.aboutPatent}</span>
          ) : null}
        </label>
      ) : null}
      <label className="block mt-6" htmlFor="otherDetails">
        <span className="text-gray-700 text-xl">Any other details</span>
        <textarea
          name="otherDetails"
          id="otherDetails"
          rows={3}
          value={formik.values.otherDetails}
          className={`mt-1 block w-full text-xl ${
            formik.touched.otherDetails &&
            formik.errors.otherDetails &&
            "border-red-500 border-2 ring-2 ring-red-200"
          }`}
          onChange={formik.handleChange}
        />
        {formik.touched.otherDetails && formik.errors.otherDetails ? (
          <span>{formik.errors.otherDetails}</span>
        ) : null}
      </label>
      <label className="block mt-6" htmlFor="pitchDeck">
        <span className="text-gray-700 text-xl">Upload your pitch deck</span>
        <input
          type={"file"}
          name="pitchDeck"
          id="pitchDeck"
          className={`mt-1 block w-full text-xl p-4 ${
            formik.touched.pitchDeck && formik.errors.pitchDeck
              ? "border-red-500 border-2 ring-2 ring-red-200"
              : "border border-[#6b7280]"
          }`}
          value={formik.values.pitchDeck?.filename}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            formik.setFieldValue(
              "pitchDeck",
              event.currentTarget.files ? event.currentTarget.files[0] : null
            );
          }}
          onBlur={formik.handleBlur}
        />
        {formik.touched.pitchDeck && formik.errors.pitchDeck ? (
          <span>{formik.errors.pitchDeck}</span>
        ) : null}
      </label>
      <label className="block mt-6" htmlFor="logo">
        <span className="text-gray-700 text-xl">Upload logo</span>
        <input
          type={"file"}
          name="logo"
          id="logo"
          className={`mt-1 block w-full text-xl p-4 ${
            formik.touched.logo && formik.errors.logo
              ? "border-red-500 border-2 ring-2 ring-red-200"
              : "border border-[#6b7280]"
          }`}
          value={formik.values.logo?.filename}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            formik.setFieldValue(
              "logo",
              event.currentTarget.files ? event.currentTarget.files[0] : null
            );
          }}
          onBlur={formik.handleBlur}
        />
        {formik.touched.logo && formik.errors.logo ? (
          <span>{formik.errors.logo}</span>
        ) : null}
      </label>
      <div className="mt-6">
        <span className="text-gray-700 text-xl">GDPR</span>
        <label className="mt-6 flex items-center" htmlFor="gdpr">
          <input
            type="checkbox"
            name="gdpr"
            id="gdpr"
            checked={formik.values.gdpr}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="text-gray-700 text-xl ml-4">
            Yes, I agree with the privacy policy and terms and conditions.
          </span>
        </label>
        {formik.errors.gdpr && (
          <p className="text-red-500 text-base">{formik.errors.gdpr}</p>
        )}
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <button type="submit" className="msmf__cta-btn">
          Register
        </button>
        {Object.keys(formik.errors).length > 0 ? (
          <p className="text-red-500 text-base">
            Please make sure all fields are filled correctly.
          </p>
        ) : null}
      </div>
    </form>
  );
};

export default RegistrationForm;
