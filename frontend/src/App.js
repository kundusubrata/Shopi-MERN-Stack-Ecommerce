import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./components/Home.jsx";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/ProductDetails.jsx";
import Login from "./components/auth/login.jsx";
import Register from "./components/auth/Register.jsx";
import Profile from "./components/user/Profile.jsx";
import UpdateUser from "./components/user/UpdateUser.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import UploadAvatar from "./components/user/UploadAvatar.jsx";
import UpdatePassword from "./components/user/UpdatePassword.jsx";
import ForgotPassword from "./components/auth/ForgotPassword.jsx";
import ResetPassword from "./components/auth/ResetPassword.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<ResetPassword />} />

            <Route
              path="/me/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/me/update_profile"
              element={
                <ProtectedRoute>
                  <UpdateUser />
                </ProtectedRoute>
              }
            />
            <Route
              path="/me/upload_avatar"
              element={
                <ProtectedRoute>
                  <UploadAvatar />
                </ProtectedRoute>
              }
            />
            <Route
              path="/me/update_password"
              element={
                <ProtectedRoute>
                  <UpdatePassword />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
