import React from 'react'
import frameImg from "../assets/frame.png"
import SignUpForm from '../components/SignUpForm'
import image from "../assets/signup.webp"

const SignUp = () => {
  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
            <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
                <h1 className="text-5xl font-bold leading-[2.375rem] text-richblack-25 mb-3">Welcome</h1>
                <p className="text-[#4ee0f4] text-base italic mb-6">Please Sign Up to continue</p>
                <SignUpForm/>
            </div>
            <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
                <img
                src={frameImg}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"
                />
                <img
                src={image}
                alt="Students"
                width={558}
                height={504}
                loading="lazy"
                className="absolute -top-4 right-4 z-10"
                />
            </div>
        </div>
    </div>
  )
}

export default SignUp