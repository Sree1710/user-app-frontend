import axios from 'axios'
import React, { useState } from 'react'

const SearchPost = () => {
  const [inputField,setInputField]=useState(
    {userID:""}
  )

  const [deleteField,setDeleteField]=useState(
    {postTitle:"",postDesc:"",postCreateDate:""}
  )

  const apiLink="http://localhost:3001/searchp"
  const apiLink2="http://localhost:3001/deletep"

  const inputHandler=(event)=>{
    setInputField({...inputField,[event.target.name]:event.target.value})
  }

  const deleteHandler=(event)=>{
    setDeleteField({...deleteField,[event.target.name]:event.target.value})
  }

  const deleteValue=()=>{
    console.log(deleteField)
    axios.post(apiLink2,deleteField).then(
      (Response)=>{
        if (Response.data.status=="success") {
          alert("Post Deleted Successfully!!!")
          setInputField({userID:""})
          setDeleteField({postTitle:"",postDesc:"",postCreateDate:""})
        } else {
          alert("Something Went Wrong!!!")
        }
      }
    )
  }

  const readValue=()=>{
    console.log(inputField)
    axios.post(apiLink,inputField).then(
      (Response)=>{
        setDeleteField(Response.data[0])
      }
    )
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h1>Search Post</h1>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">User ID</label>
                <input onChange={inputHandler} type="text" className="form-control" name="userID" value={inputField.userID} />
                </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readValue} className="btn btn-warning">Search</button>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
            </div>
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Post Title</label>
                <input onChange={deleteHandler} type="text" className="form-control" name="postTitle" value={deleteField.postTitle} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Description</label>
                <textarea onChange={deleteHandler} name="postDesc" id="" cols="30" rows="10" className="form-control" value={deleteField.postDesc}></textarea>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Created Date</label>
                <input onChange={deleteHandler} type="date" name="postCreateDate" id="" className="form-control" value={deleteField.postCreateDate} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={deleteValue} className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPost