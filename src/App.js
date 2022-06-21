import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';//nhớ (npm i react-router-dom)
import DefaultLayout from './containers/DefaultLayout';
function App() {
  return (
    <div>
      {/* b4. gọi defaultlayout qua để điều hướng */}
      <BrowserRouter>
        <Routes>
          {/* <Route path='/login' element={<Login/>}/> */}
          <Route path='/*' element={<DefaultLayout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
