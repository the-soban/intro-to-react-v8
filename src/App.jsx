import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParas from "./SearchParas";
import Details from "./Details";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/"></Link>
      </header>
      {/* <h1>Adopt Me!</h1> */}
      <Routes>
        <Route path="/details/:id" element={<Details />} />{" "}
        {/* the :id means that id is a varibale  */}
        <Route path="/" element={<SearchParas />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
