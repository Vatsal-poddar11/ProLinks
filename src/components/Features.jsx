import React from 'react';

const Features = () => {
  return (
    <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      text-white justify-between mt-10 select-none">
        <div className="flex flex-wrap justify-center mt-6">
            <div className="bg-richblack-800 p-6 m-4 rounded-lg shadow-lg max-w-xs hover:scale-95 transition duration-200">
                <h3 className="text-2xl font-semibold mb-6 text-white text-center">Easy Management</h3>
                <p className="text-base text-center text-richblack-100">Store all your professional links in one place.</p>
            </div>
            <div className="bg-richblack-800 p-6 m-4 rounded-lg shadow-lg max-w-xs hover:scale-95 transition duration-200">
                <h3 className="text-2xl font-semibold mb-6 text-white text-center">Secure Storage</h3>
                <p className="text-base text-center text-richblack-100">Keep your information safe with our secure storage solutions.</p>
            </div>
            <div className="bg-richblack-800 p-6 m-4 rounded-lg shadow-lg max-w-xs hover:scale-95 transition duration-200">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">Quick Access</h3>
                <p className="text-base text-center text-richblack-100">Access your links quickly and easily when you need them.</p>
            </div>
        </div>
    </div>
  )
}

export default Features;
