import React from 'react';
import { useSelector } from 'react-redux';
import { RiEditBoxLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import DisplayLinks from '../components/DisplayLinks';

const Dashboard = () => {
  const { user } = useSelector((state) => state.profile);

  const formattedDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="flex flex-col items-center p-5 bg-richblack-900 min-h-screen">
      <h1 className="mb-10 text-3xl mt-5 font-bold text-richblack-5">My Profile</h1>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 w-full max-w-6xl">
        <div className="w-full mt-[2.4rem] lg:w-1/2">
          <div className="flex items-center justify-between rounded-md border border-richblack-700 bg-richblack-800 p-8 mb-10 shadow-md">
            <div className="flex items-center gap-x-4">
              <img
                src={user?.image}
                alt={`profile-${user?.firstName}`}
                className="aspect-square w-20 rounded-full object-cover"
              />
              <div className="space-y-1">
                <p className="text-lg font-semibold text-richblack-5">
                  {user?.firstName + ' ' + user?.lastName}
                </p>
                <p className="text-sm text-richblack-300">{user?.email}</p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-richblack-700 bg-richblack-800 p-8 mb-10 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <p className="text-lg font-semibold text-richblack-5">About</p>
              <NavLink to="/edit">
                <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-md font-medium bg-yellow-50 text-black">
                  Edit
                  <RiEditBoxLine />
                </button>
              </NavLink>
            </div>
            <p
              className={`${
                user?.additionalDetails?.about ? 'text-richblack-5' : 'text-richblack-400'
              } text-sm font-medium`}
            >
              {user?.additionalDetails?.about ?? 'Write Something About Yourself'}
            </p>
          </div>

          <div className="rounded-md border border-richblack-700 bg-richblack-800 p-8 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <p className="text-lg font-semibold text-richblack-5">Personal Details</p>
              <NavLink to="/edit">
                <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-md font-medium bg-yellow-50 text-black">
                  Edit
                  <RiEditBoxLine />
                </button>
              </NavLink>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="mb-1 text-sm text-richblack-600">First Name</p>
                  <p className="text-sm font-medium text-richblack-5">{user?.firstName}</p>
                </div>
                <div>
                  <p className="mb-1 text-sm text-richblack-600">Email</p>
                  <p className="text-sm font-medium text-richblack-5">{user?.email}</p>
                </div>
                <div>
                  <p className="mb-1 text-sm text-richblack-600">Gender</p>
                  <p className="text-sm font-medium text-richblack-5">
                    {user?.additionalDetails?.gender ?? 'Add Gender'}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="mb-1 text-sm text-richblack-600">Last Name</p>
                  <p className="text-sm font-medium text-richblack-5">{user?.lastName}</p>
                </div>
                <div>
                  <p className="mb-1 text-sm text-richblack-600">Phone Number</p>
                  <p className="text-sm font-medium text-richblack-5">
                    {user?.additionalDetails?.contactNumber ?? 'Add Contact Number'}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-sm text-richblack-600">Date Of Birth</p>
                  <p className="text-sm font-medium text-richblack-5">
                    {formattedDate(user?.additionalDetails?.dateOfBirth) ?? 'Add Date Of Birth'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <DisplayLinks />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
