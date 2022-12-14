import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './components/landing/Landing'
import RoomInfo from './components/roominfo/RoomInfo'
import './index.css';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={< Landing />} />
      <Route path="/room">
        <Route path=':id' element={<RoomInfo />} />
      </Route>
    </Routes>
  </HashRouter>

);
