// imports react
import { BrowserRouter } from "react-router-dom";

// imports de estilo
import { GlobalStyle } from "./styles/global";

// imports de container
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Router } from "./Router";
import { AddListProvider } from "./hooks/useAddList";

function App() {
  return (
    <div className="App">
      <AddListProvider>
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </AddListProvider>
      <GlobalStyle />
    </div>
  );
}

export default App;
