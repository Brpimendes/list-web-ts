import { Routes, Route } from "react-router-dom";

import { List } from "./pages/List";
import Login from "./pages/Login";
import Register from "./pages/Register";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
