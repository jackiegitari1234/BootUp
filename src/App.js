import Content from "./components/Content";
import CreateApp from "./components/CreateApp";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

// const App = () => {
//   return (
//     <>
//       <NavBar />
//       <main className="py-3">
//         <Content />
//         <Footer />
//         <script src="script.js"></script>

//         {}
//       </main>
//     </>
//   );
// };

function App() {
  return (
    <div className="App">
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/app" element={<CreateApp />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
