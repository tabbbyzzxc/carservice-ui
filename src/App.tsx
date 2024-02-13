import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from "./Components/Common/Navigation";
import ClientsList from "./Components/Clients/ClientsList";
import ClientForm from "./Components/Clients/ClientForm";
import ClientEditForm from "./Components/Clients/ClientEditForm";

const App = () => {
  return (
      <Router>
        <Navigation />
        <Routes>
          {/*<Route path="/" element={<Home />} />*/}
          <Route path="/clients" element={<ClientsList />} />
          <Route path="/clients/new" element={<ClientForm />} />
          <Route path="/clients/edit/:clientId" element={<ClientEditForm/>} />
        </Routes>
      </Router>
  );
}

export default App;
