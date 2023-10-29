import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewPost = () => {
    const [postData,setPostData]=useState(
        []
    )
    
    const [deleteField,setDeleteField]=useState(
        {userID:"",postTitle:"",postDesc:"",postCreateDate:""}
    )

    const deleteHandler=(event)=>{
        setDeleteField({...deleteField,[event.target.name]:event.target.value})
    }

    const apiLink="http://localhost:3001/viewp"
    const apiLink2="http://localhost:3001/deletep"

    const getData=()=>{
       axios.get(apiLink).then(
        (Response)=>{
            setPostData(Response.data)
            setDeleteField(Response.data[0])
            console.log(Response.data)
        }
       )
    }

    const deleteValue=()=>{
        console.log(deleteField)
        axios.post(apiLink2,deleteField).then(
            (Response)=>{
                if (Response.data.status=="success") {
                    alert("Post Deleted Successfully!!!")
                } else {
                    alert("Something Went Wrong!!!")
                }
            }
        )
    }

    useEffect(()=>{getData()},[])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>View Post</h1>
                            </div>
                            {postData.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex align-items-stretch">
                                    <div className="card">
                                            <div className="card-body">
                                                <h5 onChange={deleteHandler} className="card-title" name="userID" value={deleteField.userID}>User ID: {value.userID}</h5>
                                                <p onChange={deleteHandler} className="card-text" name="postTitle" value={deleteField.postTitle} >Title: {value.postTitle}</p>
                                                <p onChange={deleteHandler} className="card-text" name="postDesc" value={deleteField.postDesc} >Description: {value.postDesc}</p>
                                                <p onChange={deleteHandler} className="card-text" name="postCreateDate" value={deleteField.postCreateDate} >Created Date: {value.postCreateDate}</p>
                                                <a onClick={deleteValue} className="btn btn-danger">Delete</a>
                                            </div>
                                    </div>
                                </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPost