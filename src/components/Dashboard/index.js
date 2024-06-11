import React from "react"
import "./index.css"

const Dashboard = () =>{
    return(
       <div className="dash-container">
        <h1 className="blog-heading">Add Blog</h1>
        <form className="form-container">
            <input type="text" placeholder="Title" className="input"/> 
            <textarea rows={6} cols={40} placeholder="Description"/>
            <input type="file" className="file"/>
            <div  className="select">
            <select>
                <option> 
                    Please select category
                </option>
            </select>
            </div>
            <div className="btn-container">
                <button className="add-btn">Add</button>
                <button className="go-btn">Go Back</button>
            </div>
        </form>
       </div>
    )
}

export default Dashboard