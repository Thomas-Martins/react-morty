import { RiHomeLine } from "react-icons/ri";
import { TfiLayersAlt } from "react-icons/tfi";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center relative">
      <div className="absolute z-50 bg-[#00B2CA] h-[57px] w-[168px] flex justify-evenly items-center m-auto rounded-full top-[20px]">
        <a href="/" className="text-[#0090A3] hover:text-white transition-colors duration-300">
          <RiHomeLine size={35} />
        </a>
        <a href="/all-episodes" className="text-[#0090A3] hover:text-white transition-colors duration-300">
          <TfiLayersAlt size={35} />
        </a>
      </div>
    </div>
  );
}
