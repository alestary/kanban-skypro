import { useState, useEffect } from "react";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import AppRoutes from "./AppRoutes"
import Header from "./components/Header";
import Main from "./components/Main-file";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(
    () => Boolean(localStorage.getItem("token"))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper">
      <GlobalStyle />
      {isLoading ? (
        <div className="loading">
          Данные загружаются...
        </div>
      ) : (
        <AppRoutes 
          isAuth = {isAuth}
          setIsAuth={setIsAuth}
        />
      )}
    </div>
  );
}

export default App;