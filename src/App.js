import "./App.css";
import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import Daily from "./pages/DailyPage";
import WeeklyPage from "./pages/weekly/WeeklyPage";

function App() {
  return (
    <div className="App">
      <Title />
      <BrowserRouter>
        <Routes>
<<<<<<< Updated upstream
          <Route path="/daily" element={<Daily />} />
=======
          <Route path="/daily" element={<RecoilRoot><Daily /></RecoilRoot>} />
          <Route path="/monthly" element={<Monthly/>}/>
>>>>>>> Stashed changes
          <Route path="/weekly" element={<WeeklyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
