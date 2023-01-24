import React from "react";
import { Route, Routes, RedirectFunction } from "react-router";
import { Homepage } from "../pages/Home";
import { LoginPage } from "../pages/Login&SignUp/Login";
import { ProfilePage } from "../pages/Profile";
import { SignUpPage } from "../pages/Login&SignUp/SignUp";
import { EnterPage } from "../pages/Login&SignUp/FirstPage";
import { ErrorPage } from "../pages/Error";

export const AppRouter: React.FC<{}> = () => {

    const logged: boolean = false;

  return (
    <Routes>
      <Route path="/home" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/" element={<EnterPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
