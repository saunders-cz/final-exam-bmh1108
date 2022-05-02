import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.js";
import { HomePage } from "./pages/HomePage.js";
import { AdminPage } from "./pages/AdminPage.js";
import { MenuPage } from "./pages/MenuPage.js";
import { OrderPage } from "./pages/OrderPage.js";
import { RegistrationPage } from "./pages/RegistrationPage.js";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Layout />} />
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
        </Route>
        <Route>
          <Route path="menu" element={<MenuPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
