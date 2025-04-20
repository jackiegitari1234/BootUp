import Content from "./components/Content";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";

// import useScript from "hooks/useScript";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="py-3">
        <Content />
        <Footer />
        <script src="script.js"></script>

        {}
      </main>
    </>
  );
};

export default App;
