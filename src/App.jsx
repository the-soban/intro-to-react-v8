import { createRoot } from "react-dom/client";
import SearchParas from "./SearchParas";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParas />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
