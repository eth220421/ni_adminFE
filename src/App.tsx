import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import TalentPage from "./pages/TalentPage";
import Popup from "./pages/Popup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"statistics/"} element={<TalentPage />} />
        <Route path={"statistics/popup"} element={<Popup />} />
      </Routes>
    </Router>
  );
}

export default App;
