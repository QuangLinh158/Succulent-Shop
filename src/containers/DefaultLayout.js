import React from 'react';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Routers from '../router/Routers';

const DefaultLayout = () => {
  return (
    <div>
      {/* đây là gọi từ file header qua để show navbar */}
        <Header/>

        {/* mảng routers map để chuyển từ mảng này sang mảng router khác  */}
        <Routes>
            {Routers.map((route, idx) => (
            <Route key={idx} path={route.path} element={route.component}/>
            ))}
        </Routes>
    </div>
  )
}

export default DefaultLayout;
