import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAll = () => {
    
        const [data,changedata]=useState([])
        const fetchData=()=>{
            axios.get("http://localhost:8001/view").then(
                (response)=>{
                    changedata(response.data)
                }
            )
        }
        useEffect(()=>(fetchData()),[])
  return (
    <div>
       <h1>View Contacts</h1>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    {
                        (data.map(
                            (value,index)=>{
                                return <div className="col-col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
              
              <div class="card-body">
                <h5 class="card-title">First Name: {value.fname}</h5>
                <p class="card-text">Last Name: {value.lname}</p>
                <p class="card-text">Address: {value.address}</p>
                <p class="card-text">Mobile NO: {value.mobileno}</p>
                
              </div>
            </div>
                                </div>
                            }
                        ))
                        
                    }
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAll
