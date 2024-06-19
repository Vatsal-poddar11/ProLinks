import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaArrowRight} from "react-icons/fa"
import Banner from "../assets/boxoffice.png";
import Features from '../components/Features';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      text-white justify-between select-none">

        <div className='mx-3 my-16 shadow-[0_20px_50px_rgba(8,_112,_174,_0.7)]'>
            <img src={Banner} className="w-fit h-80 hover:scale-105 transition duration-700"/>
        </div>
        
        <div className="flex flex-col w-[50%]">
            <div className='text-white text-center text-4xl font-semibold mt-3'>Manage All Your Professional Links <span className='text-[#4ee0f4]'>Easily </span> </div>
            <p className='text-richblack-50 text-center text-md font-medium mt-6'>Store and access all your professional links in one place</p>
        </div>

        <div className="flex justify-center mt-6 hover:scale-95 transition-all duration-200">
            <NavLink to="/signup">
                    <button className="text-center gap-3 flex justify-center items-center text-[13px] px-6 py-3 rounded-md font-bold bg-yellow-50 text-black">
                        Get Started
                        <FaArrowRight/>
                    </button>
            </NavLink>
        </div>

        <Features/>

        <Footer/>
    </div>
  )
}

export default Home