import React from 'react'
import employee from "./employee.jpg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { display } from '@mui/system';
import Marquee from "react-fast-marquee";
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
     const Navigate=useNavigate();
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100vw", height: "100vh" }}>
            <div style={{ display: "flex", justifyContent: "center", backgroundColor: 'black', color: "white" }}>
                <h1>Employee Portal</h1></div>
            <Marquee style={{ marginTop: "20px" }}>
                An employee database should record and track a variety of employee data, including: Name, birth date, address, and contact information. Job position, hire date, and employment contract. Salary, bonuses, annual pay reviews, and bank account information.
            </Marquee>
            <div style={{
                width: "100vw", height: "100vh", display: 'flex', justifyContent:
                    "center", alignItems: "center"
            }}>

                <Card style={{ width: '18em' }}>
                    <Card.Img variant="top" src={employee} style={{ borderRadius: "10px" }} />
                    <Card.Body>
                        {/* <Card.Title style={{ margin: "20px" }}> Want to Add Employee Details....</Card.Title> */}

                        <Button style={{ width: "200px", height: "40px", margin: "50px", backgroundColor: "grey" }} onClick={()=>{Navigate("employeedetails")}}
                        >Add Employee Details</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
}

export default Homepage