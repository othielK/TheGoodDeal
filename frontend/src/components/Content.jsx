import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import AnnouncePage from "../pages/AnnouncePage";
import ResultPage from "../pages/ResultPage";
import Backoffice from "../pages/Backoffice";
import CarbrandmodelResult from "../pages/CarbrandmodelResult";
import Messages from "../pages/Messages";
import MessageDetails from "../pages/MessageDetails";
import UpdateUser from "../pages/UpdateUser";
import CarDetailPage from "../pages/CarDetailPage";
import MyAnnouncePage from "../pages/MyAnnouncePage";
import UpdateAnnounce from "../pages/UpdateAnnounce";

export default function Content() {
  return (
    <section className="content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/messages" element={<Messages />} />
        <Route
          path="/messages/:sender/:receiver"
          element={<MessageDetails />}
        />
        <Route path="/announce" element={<AnnouncePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/backoffice" element={<Backoffice />} />
        <Route path="/result/:userResearch" element={<CarbrandmodelResult />} />
        <Route path="/result/type/:type" element={<ResultPage />} />
        <Route path="/updateUser" element={<UpdateUser />} />
        <Route path="/search/:userSearch" element={<CarbrandmodelResult />} />
        <Route path="/cardetails/:id" element={<CarDetailPage />} />
        <Route path="/myannounce/:id" element={<MyAnnouncePage />} />
        <Route
          path="/updateAnnounce/:id/:announceId"
          element={<UpdateAnnounce />}
        />
      </Routes>
    </section>
  );
}
