import './App.css';
import Sidebar from './components/Sidebar';
import MyCalendar from './components/MyCalendar';

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Title from './components/Title';
import Daily from './components/daily';

function App() {
  return (
    <div className='App'>
      <Title/>
      <BrowserRouter>
        <Routes>
          <Route path="/daily" element={<Daily />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;