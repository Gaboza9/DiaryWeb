import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import Daily from "./components/daily";
import WeeklyPage from "./pages/weekly/WeeklyPage";

function App() {
  return (
    <div className="App">
      <Title />
      <BrowserRouter>
        <Routes>
          <Route path="/daily" element={<Daily />} />
          <Route path="/weekly" element={<WeeklyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
