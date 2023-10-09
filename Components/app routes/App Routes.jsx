import { Route, Routes } from "react-router-dom";

import { Suspense, lazy } from "react";
const Home = lazy(() => import("../pages/home/Home"));
const Loginpage = lazy(() => import("../pages/loginpage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/register/Register"));
const Moviepage = lazy(() => import("../pages/movie page/Movie page"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<h1>loading...</h1>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/loginpage"
        element={
          <Suspense fallback={<h1>loading...</h1>}>
            <Loginpage />
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<h1>loading...</h1>}>
            <RegisterPage />
          </Suspense>
        }
      />

      <Route
        path="/moviepage"
        element={
          <Suspense fallback={<h1>page Loading...</h1>}>
            <Moviepage />
          </Suspense>
        }
      />
    </Routes>
  );
};
export default AppRoutes;
