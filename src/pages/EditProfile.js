import React from 'react'
import AdditionalDetails from '../components/AdditionalDetails'
import DeleteAccount from '../components/DeleteAccount'

const EditProfile = () => {
  return (
    <div className="w-[50%] mx-auto">
        <AdditionalDetails/>
        <div>
          <DeleteAccount/>
        </div>
    </div>
  )
}

export default EditProfile