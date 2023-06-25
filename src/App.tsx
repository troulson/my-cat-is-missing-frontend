import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ViewReport from "./Pages/ViewReport/ViewReport";
import CreateReport from "./Pages/CreateReport/CreateReport";
import Home from "./Pages/Home/Home";

function App() {
  return (
      <>
          <Header/>
          <Router>
            <Routes>
              <Route path='/view' element={<ViewReport />} />
              <Route path='/create' element={<CreateReport />} />
              <Route path='/' element={<Home />} />
            </Routes>
          </Router>
      </>
  );
}

export default App;
