// imports react
import { BrowserRouter, Routes, Route } from "react-router-dom";

// imports de container
import Header from "./components/Header";
import FooterContainer from "./components/Footer";

import { GlobalStyle } from "./styles/global";

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
        <FooterContainer />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
