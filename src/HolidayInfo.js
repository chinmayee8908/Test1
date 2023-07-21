import React from 'react'
import { useState } from 'react';
import "./EmployeeDetails.css"
const HolidayInfo = () => {
    const [inputData, setInputData] = useState({
      EmployeeId:'',
        Employeename: '',
        HolidayDate:''
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
          HolidayDate:''
        });
        console.log(inputData)
      };
      return (
        <div className='Employee-Container'>
            <div className='Employee-Form'>
        <form onSubmit={handleSubmit}>
        <h1>HolidayInfo</h1>
        <label>EmployeeId:</label>
          <input type="text" name="name" value={inputData.EmployeeId} onChange={handleChange} required />
          <label>Name:</label>
          <input type="text" name="name" value={inputData.Employeename} onChange={handleChange} required />
          <label>HolidayDate:</label>
          <input type="date" name="name" value={inputData.HolidayDate} onChange={handleChange} required />
          <button type="submit" style={{margin:"30px"}}>Add</button>
         
        </form>
        </div>
        </div>
      );
    };
  
export default HolidayInfo