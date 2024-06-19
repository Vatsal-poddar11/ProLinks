import { toast } from "react-hot-toast"
import { apiConnector } from "../apiconnector"
import { settingsEndpoints } from "../apis"
import { setLoading, setUser } from "../../slices/profileSlice"
import { profileEndpoints } from "../apis"
import { logout } from "./authAPI"

const {UPDATE_PROFILE_API, DELETE_PROFILE_API, UPDATE_LINKS_API} = settingsEndpoints
const { GET_USER_DETAILS_API } = profileEndpoints

export function updateProfile(token, formData) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      try {
        const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
          Authorization: `Bearer ${token}`,
        })
        console.log("UPDATE_PROFILE_API API RESPONSE : ", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Profile Updated Successfully")
      } catch (error) {
        console.log("UPDATE_PROFILE_API API ERROR : ", error)
        toast.error("Could Not Update Profile")
      }
      toast.dismiss(toastId)
    }
}

export function deleteProfile(token, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      try {
        const response = await apiConnector("DELETE", DELETE_PROFILE_API, null, {
          Authorization: `Bearer ${token}`,
        })
        console.log("DELETE_PROFILE_API API RESPONSE : ", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Profile Deleted Successfully")
        dispatch(logout(navigate))
      } catch (error) {
        console.log("DELETE_PROFILE_API API ERROR : ", error)
        toast.error("Could Not Delete Profile")
      }
      toast.dismiss(toastId)
    }
}

export function updateLinks(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    console.log("Form Data in Update Links : ", formData);
    try {
      const response = await apiConnector("PUT", UPDATE_LINKS_API, formData, {
        Authorization: `Bearer ${token}`,
      })
      console.log("UPDATE_LINKS_API API RESPONSE : ", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Links Updated Successfully")
    } catch (error) {
      console.log("UPDATE_LINKS_API API ERROR : ", error)
      toast.error("Could Not Update Links")
    }
    toast.dismiss(toastId)
  }
}

export function getUserDetails(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("GET_USER_DETAILS API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage = response.data.data.image
        ? response.data.data.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
      dispatch(setUser({ ...response.data.data, image: userImage }))
    } catch (error) {
      dispatch(logout(navigate))
      console.log("GET_USER_DETAILS API ERROR............", error)
      toast.error("Could Not Get User Details")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}