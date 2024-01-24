export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full">
      <div className="bg-[#363636] h-56 px-20 py-8">
        <div className=" h-24 border-b-2 border-[#0090A3]">
          <img src="../public/images/logo.png" alt="logo" className="w-[185px] h-[65px]" />
        </div>

        <div className="text-white flex justify-between text-xs mt-7 font-bold">
          <div>
            <p>RICK AND MORTY DB | ALL RIGHTS RESERVED</p>
          </div>
          <div className="flex justify-between">
            <a href="" className="mr-8">
              HOME
            </a>
            <a href="">EPISODES</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
