import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import "../src/index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#363636]">
      <Navbar />
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
      <Footer />
    </div>
  );
}
