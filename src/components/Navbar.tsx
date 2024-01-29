import { RiHomeLine } from "react-icons/ri";
import { TfiLayersAlt } from "react-icons/tfi";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex items-center justify-center relative">
      <div className="absolute z-50 bg-[#00B2CA] h-[57px] w-[168px] flex justify-evenly items-center m-auto rounded-full top-[20px]">
        <NavLink to="/" className={`text-[#0090A3] hover:text-white transition-colors duration-300 ${isActive("/") ? "text-white" : ""}`}>
          <RiHomeLine size={35} />
        </NavLink>
        <NavLink
          to="/episodes"
          className={`text-[#0090A3] hover:text-white transition-colors duration-300 ${isActive("/episodes") ? "text-white" : ""}`}
        >
          <TfiLayersAlt size={35} />
        </NavLink>
      </div>
    </div>
  );
}
