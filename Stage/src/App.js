import React, {Component,useState} from 'react';
/*import './App.css';*/
/*import './css/Nav_bar.css'*/

import logo from './image/FP_Gr_Tr.png'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Nav from './Composants/Nav_bar';
import Home from './Composants/Home.js';

import AnimeRoutes from './Composants/AnimeRoutes';
 
function App() {
  return (
    <>
      
      <Router>
      
        
        
       <AnimeRoutes />
        
      </Router>
    </>
  );
}

export default App;
