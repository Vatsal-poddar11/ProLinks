import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="flex w-11/12 max-w-maxContent h-16 mt-10 items-center justify-between px-4">
            <div>
                <p className="text-richblack-400">© 2024 ProLinks. All rights reserved.</p>
            </div>
            <div className="flex items-center">
                <a href="https://www.linkedin.com/in/vatsal-poddar-493813211/" target="_blank" className="text-white">
                    <FaLinkedin className="text-2xl ml-4 text-richblack-400 hover:text-richblack-5 transition duration-200" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
