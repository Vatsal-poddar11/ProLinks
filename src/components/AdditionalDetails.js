import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosSave } from "react-icons/io";
import { updateProfile } from "../services/operations/profileAPI";
// import { getUserDetails } from "../services/operations/profileAPI";
import { useNavigate } from "react-router-dom";

const AdditionalDetails = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("User DOB: ", user?.additionalDetails?.dateOfBirth);

  const [formData, setFormData] = useState({
    dateOfBirth: "",
    gender: "",
    contactNumber: "",
    about: "",
  });

  // useEffect(() => {
  //     if (token) {
  //         dispatch(getUserDetails(token, navigate));
  //     }
  // }, [token, dispatch, navigate]);

  useEffect(() => {
    if (user && user.additionalDetails) {
      setFormData({
        dateOfBirth: user.additionalDetails.dateOfBirth || "",
        gender: user.additionalDetails.gender || "",
        contactNumber: user.additionalDetails.contactNumber || "",
        about: user.additionalDetails.about || "",
      });
    }
  }, [user]);

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  console.log("Profile Form Data : ", formData);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(token, formData));
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-full flex-col gap-y-4"
    >
      <h2 className="text-3xl mb-5 font-semibold text-richblack-5">
        Profile Information
      </h2>

      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Date of Birth</p>
        <input
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          value={formData.dateOfBirth}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          onChange={handleOnChange}
        />
      </label>

      <label>
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Gender</p>
        <input
          type="text"
          name="gender"
          id="gender"
          placeholder="Male/Female/Other"
          value={formData.gender}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          onChange={handleOnChange}
        />
      </label>

      <label>
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Contact Number</p>
        <input
          type="tel"
          name="contactNumber"
          id="contactNumber"
          value={formData.contactNumber}
          placeholder="Enter Contact Number"
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          onChange={handleOnChange}
        />
      </label>

      <label>
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">About</p>
        <input
          type="text"
          name="about"
          id="about"
          value={formData.about}
          placeholder="Enter Bio Details"
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          onChange={handleOnChange}
        />
      </label>

      <button
        type="submit"
        className="mt-3 w-fit flex gap-x-4 items-center rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Save
        <IoIosSave />
      </button>
    </form>
  );
};

export default AdditionalDetails;
