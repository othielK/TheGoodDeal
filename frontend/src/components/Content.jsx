import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import MessagePage from "../pages/MessagePage";
import LoginPage from "../pages/LoginPage";
import AnnouncePage from "../pages/AnnouncePage";
import ResultPage from "../pages/ResultPage";

export default function Content() {
  return (
    <section className="content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/messagepage" element={<MessagePage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/announcepage" element={<AnnouncePage />} />
        <Route path="/resultpage" element={<ResultPage />} />
      </Routes>
    </section>
  );
}
