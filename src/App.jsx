import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Navbar = React.lazy(() => import("./Components/Navbar/Navabr"));
const LandingPage = React.lazy(() => import("./Pages/LandingPage/LandingPage"));

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Suspense fallback={<div>Loading...</div>}>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
