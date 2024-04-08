import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader } from "./components/Loader";

const HomePages = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./pages/HomePages")), 2000);
    }) as Promise<{ default: React.ComponentType<any> }>
);

function BrowserRouter() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePages />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default BrowserRouter;
