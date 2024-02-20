import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from "./Components/Common/Navigation";
import ClientsList from "./Components/Clients/ClientsList";
import EmployeesList from "./Components/Employees/EmployeesList";

const App = () => {
  return (
      <Router>
        <Navigation />
        <Routes>
          {/*<Route path="/" element={<Home />} />*/}
          <Route path="/clients" element={<ClientsList />} />
          <Route path="/employees" element={<EmployeesList />} />
        </Routes>
      </Router>
  );
}

export default App;
