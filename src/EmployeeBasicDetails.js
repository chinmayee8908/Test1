import React from 'react'
import { useState } from 'react';
import "./EmployeeDetails.css"
import { useNavigate } from 'react-router-dom';
const EmployeeBasicDetails = () => {
  const navigate=useNavigate();
    const [inputData, setInputData] = useState({
      EmployeeId:'',
        Employeename: '',
        Email: '',
        EmployeePhoneNumber: '',
        EmployeeDOB:'',
        EmployeeCity:'',
        Gender:'',
        EmployeeAddress:''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData((prevData) => ({
          ...prevData,
          [name]: value,
              // console.log(setInputData)
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setInputData({
          EmployeeId:'',
            Employeename: '',
            Email: '',
             EmployeePhoneNumber: '',
             EmployeeDOB:'',
             EmployeeCity:'',
             Gender:'',
             EmployeeAddress:''
        });
        console.log(inputData)
      };
      return (
        <div className='Employee-Container'>
            <div className='Employee-Form'>
        <form onSubmit={handleSubmit}>
        <h1>EmployeeDetails</h1>
        <label>EmployeeId:</label>
          <input type="text" name="name" value={inputData.EmployeeId} onChange={handleChange} required />
          <label>Name:</label>
          <input type="text" name="name" value={inputData.Employeename} onChange={handleChange} required />
          <label>Email:</label>
          <input type="email" name="email" value={inputData.Email} onChange={handleChange} required />
          <label>Phone:</label>
          <input type="text" name="phone" value={inputData.EmployeePhoneNumber} onChange={handleChange} required />
        <label>DateOfBirth:</label>
          <input type="date" name="phone" value={inputData.EmployeeDOB} onChange={handleChange} required />
          <label>City:</label>
          <input type="text" name="phone" value={inputData.EmployeeCity} onChange={handleChange} required />
          <label>Address:</label>
          <input type="textArea" name="phone" value={inputData.EmployeeAddress} onChange={handleChange} required />
          <label >Gender</label>
        <input type="radio" name="phone" value={inputData.Gender} onChange={handleChange} required />Male
        <input type="radio" name="phone" value={inputData.Gender} onChange={handleChange} required />Female
          <button type="submit" onClick={()=>{navigate("/contactinfo")}}>Add</button>
        </form>
        </div>
        </div>
      );
    };
  
export default EmployeeBasicDetails