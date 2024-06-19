import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosSave } from "react-icons/io";
import {updateLinks} from "../services/operations/profileAPI";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { getUserDetails } from "../services/operations/profileAPI";

const AddLinks = () => {
    const { token } = useSelector((state) => state.auth);
    const {user} = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        LinkedIn: "",
        GitHub: "",
        GeeksForGeeks: "",
        Leetcode: "",
        CodeChef: "",
        CodeForces: "",
        AtCoder: "",
        CodeStudio: "",
        Medium: "",
        Other: "",
    });

    // useEffect(() => {
    //     if (token) {
    //         dispatch(getUserDetails(token, navigate));
    //     }
    // }, [token, dispatch, navigate]);

    useEffect(() => {
        if (user && user.additionalDetails && user.additionalDetails.profileLinks) {
            setFormData({
                LinkedIn: user.additionalDetails.profileLinks.LinkedIn || "",
                GitHub: user.additionalDetails.profileLinks.GitHub || "",
                GeeksForGeeks: user.additionalDetails.profileLinks.GeeksForGeeks || "",
                Leetcode: user.additionalDetails.profileLinks.Leetcode || "",
                CodeChef: user.additionalDetails.profileLinks.CodeChef || "",
                CodeForces: user.additionalDetails.profileLinks.CodeForces || "",
                AtCoder: user.additionalDetails.profileLinks.AtCoder || "",
                CodeStudio: user.additionalDetails.profileLinks.CodeStudio || "",
                Medium: user.additionalDetails.profileLinks.Medium || "",
                Other: user.additionalDetails.profileLinks.Other || "",
            });
        }
    }, [user]);

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    console.log("Links Form Data : ", formData);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(updateLinks(token, formData));
    };

    return (
        <form
            onSubmit={handleOnSubmit}
            className="mt-6 flex w-full flex-col gap-y-4"
        >
            <h2 className="text-3xl mb-5 font-semibold text-richblack-5">
                Store All Your Links 
            </h2>

            <label className="w-full">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">LinkedIn</p>
                <input
                    type="text"
                    name="LinkedIn"
                    id="LinkedIn"
                    placeholder="Enter Your LinkedIn Profile"
                    value={formData.LinkedIn}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    onChange={handleOnChange}
                />
            </label>

            <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">GitHub</p>
                <input
                    type="text"
                    name="GitHub"
                    id="GitHub"
                    placeholder="Enter Your GitHub Profile"
                    value={formData.GitHub}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    onChange={handleOnChange}
                >
                </input>
            </label>

            <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">GeeksForGeeks</p>
                <input
                    type="text"
                    name="GeeksForGeeks"
                    id="GeeksForGeeks"
                    placeholder="Enter Your GeeksForGeeks Profile"
                    value={formData.GeeksForGeeks}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    onChange={handleOnChange}
                >
                </input>
            </label>

            <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Leetcode</p>
                <input
                    type="text"
                    name="Leetcode"
                    id="Leetcode"
                    placeholder="Enter Your Leetcode Profile"
                    value={formData.Leetcode}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    onChange={handleOnChange}
                >
                </input>
            </label>

            <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">CodeChef</p>
                <input
                    type="text"
                    name="CodeChef"
                    id="CodeChef"
                    placeholder="Enter Your CodeChef Profile"
                    value={formData.CodeChef}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    onChange={handleOnChange}
                >
                </input>
            </label>

            <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">CodeForces</p>
                <input
                    type="text"
                    name="CodeForces"
                    id="CodeForces"
                    placeholder="Enter Your CodeForces Profile"
                    value={formData.CodeForces}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    onChange={handleOnChange}
                >
                </input>
            </label>

            <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">AtCoder</p>
                <input
                    type="text"
                    name="AtCoder"
                    id="AtCoder"
                    placeholder="Enter Your AtCoder Profile"
                    value={formData.AtCoder}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    onChange={handleOnChange}
                >
                </input>
            </label>

            <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">CodeStudio</p>
                <input
                    type="text"
                    name="CodeStudio"
                    id="CodeStudio"
                    placeholder="Enter Your CodeStudio Profile"
                    value={formData.CodeStudio}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    onChange={handleOnChange}
                >
                </input>
            </label>

            <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Medium</p>
                <input
                    type="text"
                    name="Medium"
                    id="Medium"
                    placeholder="Enter Your Medium Profile"
                    value={formData.Medium}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    onChange={handleOnChange}
                >
                </input>
            </label>

            <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Other</p>
                <input
                    type="text"
                    name="Other"
                    id="Other"
                    placeholder="Enter Any Other Profile"
                    value={formData.Other}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    onChange={handleOnChange}
                >
                </input>
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

export default AddLinks;
