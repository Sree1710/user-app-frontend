import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewPost = () => {
    const [postData,setPostData]=useState(
        []
    )

    const apiLink="http://localhost:3001/viewp"

    const getData=()=>{
       axios.get(apiLink).then(
        (Response)=>{
            setPostData(Response.data)
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
                                                <h5 className="card-title">User ID: {value.userID}</h5>
                                                <p className="card-text">Title: {value.postTitle}</p>
                                                <p className="card-text">Description: {value.postDesc}</p>
                                                <p className="card-text">Description: {value.postCreateDate}</p>
                                                <a href="#" className="btn btn-danger">Delete</a>
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