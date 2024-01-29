import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import "../src/index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
      <Footer />
    </div>
  );
}
