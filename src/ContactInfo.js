import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./EmployeeDetails.css"
const ContactInfo = () => {
  const navigate=useNavigate()
  const [inputData, setInputData] = useState({
    EmployeeId:'',
    Employeename: '',
    Email: '',
    EmployeePhoneNumber: '',
    EmployeeAddress:''
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
        // console.log(setInputData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputData({
      EmployeeId:'',
        Employeename: '',
        Email: '',
         EmployeePhoneNumber: '',
        
         EmployeeAddress:''
    });
    console.log(inputData)
  };
  return (
    <div className='Employee-Container'>
        <div className='Employee-Form'>
    <form onSubmit={handleSubmit}>
      <h1>ContactInfo</h1>
    <label>EmployeeId:</label>
          <input type="text" name="name" value={inputData.EmployeeId} onChange={handleChange} required />
      <label>Name:</label>
      <input type="text" name="name" value={inputData.Employeename} onChange={handleChange} required />
      <label>Email:</label>
      <input type="email" name="email" value={inputData.Email} onChange={handleChange} required />
      <label>Phone:</label>
      <input type="text" name="phone" value={inputData.EmployeePhoneNumber} onChange={handleChange} required />
    
      <label>Address:</label>
      <input type="textArea" name="phone" value={inputData.EmployeeAddress} onChange={handleChange} required />
      
    
      <button type="submit"style={{margin:"30px"}}onClick={()=>{navigate("/holidayinfo")}}>Add</button>
    </form>
    </div>
    </div>
  );
};


export default ContactInfo