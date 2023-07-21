import React from 'react'
import ContactInfo from './ContactInfo'
import Homepage from './Homepage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import EmployeeBasicDetails from './EmployeeBasicDetails'
import HolidayInfo from './HolidayInfo'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/employeedetails" element={<EmployeeBasicDetails/>}/>
     <Route path="/contactinfo" element={<ContactInfo/>}/>
     <Route path="/holidayinfo" element={<HolidayInfo/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App