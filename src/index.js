import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Routes ,Route, BrowserRouter as Router } from 'react-router-dom';

import Nav from './Components/Nav';
import Create from './Pages/Create';
import About from './Pages/About';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
