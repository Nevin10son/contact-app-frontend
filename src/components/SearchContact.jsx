import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const SearchContact = () => {
    const [con,setcon] =useState(
        {
            "fname":""
        }
    )
    const deleteFunction =(id) =>{
        let input = {"_id":id}
        axios.post("http://localhost:8001/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.Status=="success") {
                    alert("Successfully Deleted")
                } else {
                    alert("error")
                }
            }
        )
    }
    const [result,changedata] = useState([])

    const inputHandler = (event)=>{
        setcon({...con,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(con)
        axios.post("http://localhost:8001/search",con).then(
            (response)=>{
                console.log(response.data)
                changedata(response.data)
            }
        )
    }
  return (
    <div>
        <NavBar/>
      <h1>Search Contact</h1>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Search Contact by name:</label>
                        <input type="text" className="form-control" name='fname' value={con.fname} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>Search</button>
                    </div>
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Address</th>
      <th scope="col">Mobile No</th>
      <th></th>
    </tr>
  </thead>
    {
        (result.map(
            (value,index)=>{
                return  <tbody>
                <tr>
                  <td>{value.fname}</td>
                  <td>{value.lname}</td>
                  <td>{value.address}</td>
                  <td>{value.mobileno}</td>
                  <td><button className="btn btn-danger" onClick={()=>deleteFunction(value._id)}>Delete</button></td>
                </tr>
                
              </tbody>
            }
        ))
    }
</table>
                </div>
            </div>
        </div>
      </div>
    </div>

    
  )
}

export default SearchContact
