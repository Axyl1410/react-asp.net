import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MasterLayout from "./components/MasterLayout";

const Home = lazy(() => import("./pages/Home"));
const Nopage = lazy(() => import("./pages/Nopage"));

export default function App() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  }, [location.pathname]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route index path="/" element={<MasterLayout child={<Home />} />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </Suspense>
    </>
  );
}
