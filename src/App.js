import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="py-3">
        <Outlet />
        <Footer />
        {}
      </main>
    </>
  );
};

export default App;
