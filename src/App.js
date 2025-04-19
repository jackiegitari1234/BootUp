import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <Header />
      <NavBar></NavBar>
      <main className="py-3">
        <Content />
        <Footer />
        <script src="script.js"></script>

        {/* <Container>
          <Outlet />
        </Container> */}
      </main>
    </>
  );
};

export default App;
