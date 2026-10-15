import { Outlet } from "react-router-dom";
import Main from "../components/Main-file";

const MainPage = () => {
   return (
      <>
         <Main />
         {/* Здесь будут отображаться вложенные маршруты */}
         <Outlet />
      </>
   );
};

export default MainPage;
