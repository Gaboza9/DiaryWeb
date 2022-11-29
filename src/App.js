
import "./App.css";
import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import Daily from "./pages/DailyPage";
import WeeklyPage from "./pages/weekly/WeeklyPage";
import Monthly from './pages/Monthly';
import MovieReviewPage from './pages/MovieReviewPage';
import BookReviewPage from "./pages/BookReviewPage";

function App() {
  return (
    <div className="App">
      <Title />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Monthly/>} />  
          <Route path="/daily" element={<RecoilRoot><Daily /></RecoilRoot>} />
          <Route path="/monthly" element={<Monthly/>}/>
          <Route path="/weekly" element={<WeeklyPage />} />
          <Route path="/movieReview" element={<MovieReviewPage/>}/>
          <Route path="/bookReview" element={<BookReviewPage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
