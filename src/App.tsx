import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from "./Components/Common/Navigation";
import ClientsList from "./Components/Clients/ClientsList";
import EmployeesList from "./Components/Employees/EmployeesList";
import SpecsList from "./Components/Specializations/SpecsList";
import AdminControlledTab from "./Components/Admin/TabControl";

import { library } from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faLocationArrow, faPhone, faAt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import AppointmentsList from "./Components/Appointments/AppointmentsList";

library.add(fab, faCheckSquare, faCoffee, faLocationArrow, faPhone, faAt, faPaperPlane)

const App = () => {
  return (
      <Router>
        <Navigation />
        <Routes>
          {/*<Route path="/" element={<Home />} />*/}
          <Route path="/clients" element={<ClientsList />} />
          <Route path="/employees" element={<EmployeesList />} />
          <Route path="/specs" element={<SpecsList />} />
          <Route path="/admin" element={<AdminControlledTab />} />
          <Route path="/appointments" element={<AppointmentsList />} />
        </Routes>
      </Router>
  );
}

export default App;
