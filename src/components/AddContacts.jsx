import axios from 'axios'
import React, { useState } from 'react'

const AddContacts = () => {
    const [con,setcon] = useState(
        {
            "fname":"",
            "lname":"",
            "address":"",
            "mobileno":""
        }
    )
    const inputHandler = (event)=>{
        setcon({...con,[event.target.name]:event.target.value})
    }
    const readValue =()=>{
        console.log(con)
        axios.post("http://localhost:8001/add",con).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=='success'){
                    alert("Added Successfully")
                }else{
                    alert("Something's wrong")
                }
            }
        ).catch().finally()
    }
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">First Name:</label>
                        <input type="text" className="form-control" name='fname' value={con.fname} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Last Name:</label>
                       <input type="text" className="form-control" name='lname' value={con.lname} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Address:</label>
                        <input type="text" className="form-control" name='address' value={con.address} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Mobile No:</label>
                        <input type="text" className="form-control" name='mobileno' value={con.mobileno} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-primary" onClick={readValue}>Add Contacts</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddContacts
