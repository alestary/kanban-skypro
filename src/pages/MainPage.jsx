import { Outlet } from "react-router-dom";
import Main from "../components/Main-file";
import Header from "../components/Header"

const MainPage = () => {
   return (
      <>
         <Header/>
         <Main />
         <Outlet />
      </>
   );
};

export default MainPage;
