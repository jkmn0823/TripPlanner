import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './views/Main';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import Register from './views/Register'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/main' element={<Main></Main>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/Register' element={<Register/>}></Route>
  </Routes>
  </BrowserRouter>    
  
  
);