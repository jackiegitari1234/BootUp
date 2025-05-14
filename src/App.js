import Content from "./components/Content";
import Prerequisites from "./components/Prerequisites";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import NewApp from "./components/NewApp";
import Testing from "./components/Testing";
import Sequence from "./components/Sequence";
import Filters from "./components/Filters";
import Threads from "./components/Threads";
import usePageTracking from "./hooks/usePageTracking";
import Actuator from "./components/Actuator";
import SpringSecurity from "./components/SpringSecurity";
import MavenPom from "./components/MavenPom";

function App() {
  usePageTracking();
  return (
    <div className="App">
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/app" element={<Prerequisites />} />
          <Route path="/new-app" element={<NewApp />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/sequence" element={<Sequence />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/threads" element={<Threads />} />
          <Route path="/actuator" element={<Actuator />} />
          <Route path="/spring-security" element={<SpringSecurity />} />
          <Route path="/maven-pom" element={<MavenPom />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
