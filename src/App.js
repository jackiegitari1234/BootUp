import Content from "./components/Content";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <Header />
      <NavBar></NavBar>
      <Content />
      <main className="py-3">
        <h1>Welcome</h1>
        <script src="script.js"></script>

        {/* <Container>
          <Outlet />
        </Container> */}
      </main>
    </>
  );
};

export default App;
