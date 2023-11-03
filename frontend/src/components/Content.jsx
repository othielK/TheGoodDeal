import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import MessagePage from "../pages/MessagePage";
import AnnouncePage from "../pages/AnnouncePage";
import ResultPage from "../pages/ResultPage";

export default function Content() {
  return (
    <section className="content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/announce" element={<AnnouncePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </section>
  );
}
