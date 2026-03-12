import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PromoPanel from "../components/PromoPanel";
import ExitIntentPopup from "../components/ExitIntentPopup";

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
      <PromoPanel />
      <ExitIntentPopup />
    </div>
  );
}
