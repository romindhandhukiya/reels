import React, { Component }  from 'react';
import './App.css';
import Signup from './Components/Signup';
import { BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import Login from './Components/Login';
// import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    // <BrowserRouter>
    //     {/* <Route path='/login' element={<Login/>}></Route>
    //     <Route path='/signup' element={<Signup/>}></Route> */}
    //   {/* <Signup/>
    //   <Login/> */}
    // </BrowserRouter>
    
    <Router>
      {/* <AuthProvider> */}
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default App;
