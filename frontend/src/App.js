import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Student from './Components/Student';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';

function App() {
  return(<>
    <NavBar/>
    <SideBar/>
  </>);
}

export default App;
