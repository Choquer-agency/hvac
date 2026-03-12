import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function BaseLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
