import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import TopPopular from "./pages/TopPopular";
import { Routes, Route } from "react-router-dom";
import Suggestions from "./pages/Suggestions";

function App() {
  return (
    <>
      <main className="bg-gray-300 h-max min-h-screen">
        <Navbar />

        <div className="flex">
          <Sidebar />

          <Routes>
          <Route path="/" element={<TopPopular />} />
          <Route path="/suggestions" element={<Suggestions />} />

          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
