import { FiTrash2 } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { deleteProfile } from "../services/operations/profileAPI";

export default function DeleteAccount() {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleDeleteAccount() {
    try {
      dispatch(deleteProfile(token, navigate))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <>
      <div className="my-10 flex flex-row gap-x-5 rounded-md border-[1px] border-[#ee4d52a2] bg-[#ea010534] p-8 px-12">
        <div className="flex aspect-square h-8 w-10 items-center justify-center rounded-full bg-[#ee49498a]">
          <FiTrash2 className="text-xl text-[#f08888]" />
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-semibold text-richblack-5">
            Delete Account
          </h2>
          <div className="w-3/5 text-[#f08888]">
            <p>Would you like to delete account?</p>
            <p>
              Deleting your account is permanent and will remove all the contents associated with it.
            </p>
          </div>
          <button
            type="button"
            className="w-fit cursor-pointer italic text-[#d81515bc]"
            onClick={handleDeleteAccount}
          >
            I want to delete my account.
          </button>
        </div>
      </div>
    </>
  )
}