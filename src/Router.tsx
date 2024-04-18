import { Routes, Route } from 'react-router-dom';

import { List } from './pages/List';
import Login from './pages/Login';
import Register from './pages/Register';

export function Router() {
  return (
    <Routes>
      <Route path="/list-web-ts/" element={<List />} />
      <Route path="/list-web-ts/login" element={<Login />} />
      <Route path="/list-web-ts/register" element={<Register />} />
    </Routes>
  );
}
