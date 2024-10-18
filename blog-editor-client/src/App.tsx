import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddBlog, Home, SignIn, SignUp, EditBlog } from "./pages";
import { Header, ProtectRoute, PublicRoute } from "./components";
import React from "react";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path="/add/blog"
          element={
            <ProtectRoute>
              <AddBlog />
            </ProtectRoute>
          }
        />
        <Route
          path="/edit/blog"
          element={
            <ProtectRoute>
              <EditBlog />
            </ProtectRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
