import Content from "./components/Content";
import Prerequisites from "./components/Prerequisites";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import NewApp from "./components/NewApp";
import Testing from "./components/Testing";

function App() {
  return (
    <div className="App">
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/app" element={<Prerequisites />} />
          <Route path="/new-app" element={<NewApp />} />
          <Route path="/new-testing" element={<Testing />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
