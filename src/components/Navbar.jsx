import React from 'react'
import { NavLink, useLocation, matchPath, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from "../assets/logo.png"
import { FaLink } from "react-icons/fa";
import {logout} from "../services/operations/authAPI"
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log("Printing base url: ",process.env.REACT_APP_BASE_URL);
    const {token} = useSelector( (state) => state.auth );
    // const {user} = useSelector( (state) => state.profile );
    const location = useLocation();

    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
        <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
            {/* Image */}
            <NavLink to="/">
                <div className="flex flex-row items-center rounded-md shadow-lg mix-blend-screen">
                    <FaLink className="text-white h-48"/>
                    <img src={logo} width={130} height={36} loading='lazy'/>
                </div>
            </NavLink>
            <div className='flex gap-x-5 items-center'>
                <NavLink to="/">
                    <p className={`${ matchRoute("/") ? "text-yellow-25" : "text-richblack-25"}`}>
                        Home
                    </p>
                </NavLink>
                {/* <NavLink to="/about">
                    <p className={`${ matchRoute("/about") ? "text-yellow-25" : "text-richblack-25"}`}>
                        About
                    </p>
                </NavLink>
                <NavLink to="/contact">
                    <p className={`${ matchRoute("/contact") ? "text-yellow-25" : "text-richblack-25"}`}>
                        Contact
                    </p>
                </NavLink> */}
            </div>
            
            <div className='flex gap-x-4 items-center'>
                {
                    token === null && (
                        <NavLink to="/login">
                            <button className='border border-richblack-700 bg-richblack-800 hover:bg-[#1414140b] px-[12px] py-[8px] text-richblack-100 rounded-md'>
                                Log in
                            </button>
                        </NavLink>
                    )
                }
                {
                    token === null && (
                        <NavLink to="/signup">
                            <button  className='border border-richblack-700 bg-richblack-800 hover:bg-[#1414140b] px-[12px] py-[8px] text-richblack-100 rounded-md'>
                                Sign Up
                            </button>
                        </NavLink>
                    )
                }
                {
                    token !== null && (
                        <NavLink to="/dashboard">
                            <CgProfile className={`${ matchRoute("/dashboard") ? "text-yellow-25" : "text-richblack-25"} text-richblack-25 h-24 w-6 font-bold`}/>
                        </NavLink>
                    )
                }
                {
                    token !== null && (
                        <NavLink to="/">
                            <button onClick={() => {dispatch(logout(navigate))}}
                                    className='border border-richblack-500 bg-richblack-700 hover:bg-[#1414140b] px-[12px] py-[8px] text-richblack-100 rounded-md'>
                                Log out
                            </button>
                        </NavLink>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar