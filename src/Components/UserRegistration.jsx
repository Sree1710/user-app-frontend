import axios from 'axios'
import React, { useState } from 'react'

const UserRegistration = () => {
    const [inputField,setInputField]=useState(
        {name:"",dob:"",age:"",address:"",email:"",username:"",password:"",confirmpass:""}
    )

    const apiLink="http://localhost:3001/regu"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
        if (inputField.password!=inputField.confirmpass) {
            alert("Password and Confirm Password do not match!!")
        } else {
            axios.post(apiLink,inputField).then(
                (Response)=>{
                    if (Response.data.status=="success") {
                        alert("User Registered Successfully")
                    } else {
                        alert("Something Went Wrong!!")
                    }
                    
                }
            )
        }
    }


  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1>User Registartion</h1>
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Name</label>
                        <input onChange={inputHandler} type="text" className="form-control" name="name" value={inputField.name} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">DOB</label>
                        <input onChange={inputHandler} type="date" name="dob" id="" className="form-control" value={inputField.dob} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Age</label>
                        <input onChange={inputHandler} type="text" className="form-control" name="age" value={inputField.age} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Address</label>
                        <textarea onChange={inputHandler} name="address" id="" cols="30" rows="10" className="form-control" value={inputField.address}></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="email" onChange={inputHandler} name="email" id="" className="form-control" value={inputField.email} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Username</label>
                        <input onChange={inputHandler} type="text" className="form-control" name="username" value={inputField.username} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Password</label>
                        <input onChange={inputHandler} type="password" name="password" id="" className="form-control" value={inputField.password} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Confirm Password</label>
                        <input onChange={inputHandler} type="password" name="confirmpass" id="" className="form-control" value={inputField.confirmpass} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} className="btn btn-primary">Sign Up</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <a href="/">Already Registered? Go to Login page </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserRegistration