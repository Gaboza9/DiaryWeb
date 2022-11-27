
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import Daily from "./pages/daily";
import WeeklyPage from "./pages/weekly/WeeklyPage";
import Monthly from './pages/Monthly';

function App() {
  return (
    <div className="App">
      <Title />
      <BrowserRouter>
        <Routes>
          <Route path="/daily" element={<Daily />} />
          <Route path="/monthly" element={<Monthly/>}/>
          <Route path="/weekly" element={<WeeklyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
