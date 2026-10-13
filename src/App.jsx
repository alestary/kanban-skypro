import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main-file";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper">
      <Header />

      {isLoading ? (
        <div className="loading">
          Данные загружаются
        </div>
      ) : (
        <Main />
      )}
    </div>
  );
}

export default App;