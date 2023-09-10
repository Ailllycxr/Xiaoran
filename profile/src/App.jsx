import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
