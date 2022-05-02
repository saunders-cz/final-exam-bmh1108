import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.js";
import { HomePage } from "./pages/HomePage.js";
import { ManagePage } from "./pages/ManagePage.js";
import { MenuPage } from "./pages/MenuPage.js";
import { OrderPage } from "./pages/OrderPage.js";
import { RegistrationPage } from "./pages/RegistrationPage.js";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
          <Route index element={<HomePage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="order" element={<OrderPage />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="manage" element={<ManagePage />} />
      </Routes>
    </BrowserRouter>
  );
};
