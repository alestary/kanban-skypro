import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import CardPage from "./pages/CardPage";
import AddCardPage from "./pages/AddCardPage";
import ExitPage from "./pages/ExitPage";
import NotFoundPage from "./pages/NotFoundPage";

function AppRoutes({ isAuth, setIsAuth }) {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          isAuth ? (
            <Navigate to="/" replace />
          ) : (
            <SignInPage setIsAuth={setIsAuth} />
          )
        }
      />
      <Route
        path="/register"
        element={
          isAuth ? <Navigate to="/" replace /> : <SignUpPage />
        }
      />
      <Route element={<ProtectedRoute isAuth={isAuth} />}>
         <Route path="/" element={<MainPage />} />
         <Route path="/card/:id" element={<CardPage />} />
         <Route path="/edit-card/:id" element={<AddCardPage />} />
         <Route path="/add-card" element={<AddCardPage />} />
         <Route
            path="/exit"
            element={<ExitPage setIsAuth={setIsAuth} />}
         />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;