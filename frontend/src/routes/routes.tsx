// src/routes/AppRouter.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Loginogin";
import Dashboard from "../pages/Dashboard";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Login />} />
        <Route path="/users" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}