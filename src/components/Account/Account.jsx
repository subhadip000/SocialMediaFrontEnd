import React from 'react'
import Deactivation from './Deactivation/Deactivation'
import DeleteAccount from './Deletion/DeleteAccount'

const Account = () => {
  return (
    <>
        <div className="delete">
            <DeleteAccount />
        </div>
        <div className="deactivation">
            <Deactivation />
        </div>
    </>
  )
}

export default Account