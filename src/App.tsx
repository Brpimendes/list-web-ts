// imports react
import { BrowserRouter, Routes, Route } from "react-router-dom";

// imports de estilo
import { GlobalStyle } from "./styles/global";

// imports de container
import Header from "./components/Header";
import Footer from "./components/Footer";

// imports de pages
import List from "./pages/List";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
