import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = lazy(() => import("./Components/Navbar/Navabr"));
const LandingPage = lazy(() => import("./Pages/LandingPage/LandingPage"));
const Cart = lazy(() => import("./Pages/Cart/Cart.jsx"));
const LoginForm = lazy(() => import("./Pages/Login/LoginForm"));

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Suspense
        fallback={
          <div className="spinner"></div> // Show spinner while loading
        }
      >
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<LoginForm />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
