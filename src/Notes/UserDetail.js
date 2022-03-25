import React from 'react'

const UserDetail=()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    return(
        <div style={{padding:"20px"}}>
        <h5>Organization:{user.Organization.name}</h5>
        <h5>Name: {`${user.firstName} ${user.lastName}`}</h5>
        <h5>Email: {user.email}</h5>
        <h5>Mobile Number: {user.mobileNumber}</h5>
        </div>
    )
}
export default UserDetail