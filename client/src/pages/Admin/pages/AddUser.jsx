import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { createDentistAccount } from "../../../features/dentist/dentistSlice";
import { createStaffAccount } from "../../../features/staff/staffSlice";

export default function AddUser() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      dateOfBirth: "",
      password: "",
      introduction: "",
      gender: "Male",
    },

    validationSchema: Yup.object({
      name: Yup.string().max(50, "Must be less than 50").required("Required"),
      phoneNumber: Yup.number().required("Required"),
      password: Yup.string()
        .min(10, "Must be greater than 10")
        .required("Required"),
      dateOfBirth: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      let data = {
        name: values.name,
        phoneNumber: values.phoneNumber,
        dateOfBirth: values.dateOfBirth,
        password: values.password,
        introduction: values.introduction,
        gender: values.gender,
      };
      alert(JSON.stringify(values, null, 2));
      if (selectedOption === "doctor") {
        dispatch(createDentistAccount(data));
      } else {
        dispatch(createStaffAccount(data));
      }

      formik.resetForm();
    },
  });

  const [value, setValue] = useState();
  const [selectedOption, setSelectedOption] = useState("doctor");
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="pl-20 pr-24 py-14 w-full">
          <h1 className=" text-2xl font-semibold pb-5">ADD USER</h1>
          <div className="flex lex-grow mt-5 w-full">
            <div className="w-[14%]">
              <h1 className="font-mono ">Type</h1>
            </div>
            <div className="w-full flex">
              <div>
                <label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="role"
                    value="doctor"
                    onChange={handleRadioChange}
                    defaultChecked={true}
                  />
                  Doctor
                </label>
              </div>
              <div className="ml-4">
                <label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="role"
                    value="staff"
                    onChange={handleRadioChange}
                  />
                  Staff
                </label>
              </div>
            </div>
          </div>
          <div className="flex mt-10 ">
            <div className="flex w-1/2 items-center">
              <div className="w-1/4 flex items-center">
                <label className="font-mono rounded-md text-center mt-[-18px]">
                  Phone
                </label>
              </div>
              <div className="w-3/4 flex flex-col h-16 justify-between">
                <PhoneInput
                  inputClass="!w-full !h-10"
                  placeholder="Enter phone number"
                  country="vn"
                  regions={"asia"}
                  value={formik.values.phoneNumber}
                  onChange={(value) =>
                    formik.setFieldValue("phoneNumber", value)
                  }
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className=" text-red-400 text-xs ml-4">
                    {formik.errors.phoneNumber}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex w-1/2 items-center ml-7">
              <div className="w-1/4 flex items-center">
                <label className="font-mono rounded-md text-center mt-[-18px]">
                  Birthday
                </label>
              </div>
              <div className=" w-5/6 flex flex-col h-16 justify-between">
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dateOfBirth}
                  className={` w-full px-3 py-2 rounded-md border border-gray-300	`}
                ></input>
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                  <div className=" text-red-400 text-xs ml-4">
                    {formik.errors.dateOfBirth}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="flex flex-grow mt-3">
            <div className="flex w-1/2 items-center">
              <div className="w-1/4 flex items-center">
                <label className="font-mono rounded-md text-center mt-[-18px]">
                  Fullname
                </label>
              </div>
              <div className=" w-3/4 flex flex-col h-16 justify-between">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className={` w-full px-3 py-2 rounded-md border border-gray-300	`}
                ></input>
                {formik.touched.name && formik.errors.name ? (
                  <div className=" text-red-400 text-xs ml-4">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex w-1/2 items-center ml-7">
              <div className="w-1/4 flex items-center">
                <label className="font-mono rounded-md text-center mt-[-18px]">
                  Password
                </label>
              </div>
              <div className=" w-3/4 flex flex-col h-16 justify-between">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={` w-full  px-3 py-2 rounded-md border border-gray-300	`}
                ></input>
                {formik.touched.password && formik.errors.password ? (
                  <div className=" text-red-400 text-xs ml-4">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {selectedOption === "doctor" && (
            <div className="flex items-center flex-grow mt-3">
              <div className="w-[14%]">
                <label className="font-mono rounded-md text-center	">
                  Introduction
                </label>
              </div>
              <div className=" w-full">
                <textarea
                  id="introduction"
                  name="introduction"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.introduction}
                  className={` w-full px-3 py-2 rounded-md border border-gray-300 resize-none`}
                ></textarea>
              </div>
            </div>
          )}
          <div className="flex lex-grow mt-5 w-full">
            <div className="w-[14%]">
              <h1 className="font-mono ">Gender</h1>
            </div>
            <div className="w-full flex">
              <div>
                <label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formik.values.gender === "Male"}
                    onChange={() => formik.setFieldValue("gender", "Male")}
                  />
                  Male
                </label>
              </div>
              <div className="ml-4">
                <label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formik.values.gender === "Female"}
                    onChange={() => formik.setFieldValue("gender", "Female")}
                  />
                  Female
                </label>
              </div>
            </div>
          </div>

          <div className="text-right text-white mt-5 ">
            <button
              className="bg-ebony-clay rounded-md px-3 py-2"
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
