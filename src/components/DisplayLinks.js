import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RiEditBoxLine } from 'react-icons/ri';
import CopyableLink from './CopyableLink';

const DisplayLinks = () => {
    const { user } = useSelector((state) => state.profile);
    console.log("User Response in Display Links : " , user);
    console.log("User Response in Display Links (GitHub) : " , user?.additionalDetails?.profileLinks?.GitHub);

    return (
        <div className="w-full max-w-4xl mx-auto mt-10 p-6 bg-richblack-800 rounded-lg shadow-md">
            <div className="grid grid-cols-1 gap-6">
                <CopyableLink name="LinkedIn" url={user?.additionalDetails?.profileLinks?.LinkedIn} />
                <CopyableLink name="GitHub" url={user?.additionalDetails?.profileLinks?.GitHub || 'N/A'} />
                <CopyableLink name="GeeksForGeeks" url={user?.additionalDetails?.profileLinks?.GeeksForGeeks || 'N/A'} />
                <CopyableLink name="Leetcode" url={user?.additionalDetails?.profileLinks?.Leetcode || 'N/A'} />
                <CopyableLink name="CodeChef" url={user?.additionalDetails?.profileLinks?.CodeChef || 'N/A'} />
                <CopyableLink name="CodeForces" url={user?.additionalDetails?.profileLinks?.CodeForces || 'N/A'} />
                <CopyableLink name="AtCoder" url={user?.additionalDetails?.profileLinks?.AtCoder || 'N/A'} />
                <CopyableLink name="CodeStudio" url={user?.additionalDetails?.profileLinks?.CodeStudio || 'N/A'} />
                <CopyableLink name="Medium" url={user?.additionalDetails?.profileLinks?.Medium || 'N/A'} />
                <CopyableLink name="Other" url={user?.additionalDetails?.profileLinks?.Other || 'N/A'} />
            </div>
            <div className="mt-6 flex justify-center">
                <NavLink to="/edit-links">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium text-black bg-yellow-50 ">
                        Edit
                        <RiEditBoxLine />
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default DisplayLinks;
