import axios from 'axios'
import React, { useState } from 'react'
import NavBar2 from './NavBar2'

const AddPost = () => {
    const [inputField,setInputField]=useState(
    {userID:"",postTitle:"",postDesc:"",postCreateDate:""}
    )

    const apiLink="http://localhost:3001/addp"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
        axios.post(apiLink,inputField).then(
            (Response)=>{
              if (Response.data.status=="success") {
                alert("Post Added Successfully!!")
                setInputField({userID:"",postTitle:"",postDesc:"",postCreateDate:""})
              } else {
                alert("Something Went Wrong!!")
              }
            }
        )

    }
  
  return (
    <div>
        <NavBar2/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Add Post</h1>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">User ID</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="userID" value={inputField.userID} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Post Title</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="postTitle" value={inputField.postTitle} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <textarea onChange={inputHandler} name="postDesc" id="" cols="30" rows="10" className="form-control" value={inputField.postDesc}></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Created Date</label>
                            <input onChange={inputHandler} type="date" name="postCreateDate" id="" className="form-control" value={inputField.postCreateDate} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost