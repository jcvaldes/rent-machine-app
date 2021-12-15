import { useEffect } from "react";
import Home from "./pages/Home";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import data from "./assets/data";

function App() {
  const [, setDb] = useLocalStorage("productsDb", "{}");
  useEffect(() => {
    setDb(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return <Home />;
}

export default App;
