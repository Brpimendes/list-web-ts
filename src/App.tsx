// imports react
import { BrowserRouter, Routes, Route } from "react-router-dom";

// imports de estilo
import "./App.css";

// imports de container
import Footer from "./components/Footer";

// imports de pages
import List from "./pages/List";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <div className="logo">
            <img src="#" alt="logo" />
          </div>
        </header>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
