export default function Footer() {
  return (
    <footer className="w-full h-60 px-10 py-8 bg-[#363636]">
      <div className="max-w-screen-xl mx-auto">
        <div className="h-24 border-b-2 border-[#0090A3]">
          <img src="../public/images/logo.png" alt="logo" className="w-[185px] h-[65px] mx-auto lg:mx-0" />
        </div>
        <div className="text-white text-xs mt-7 font-bold lg:flex lg:justify-between">
          <p className="text-center">RICK AND MORTY DB | ALL RIGHTS RESERVED</p>
          <div className="flex justify-around mt-6 lg:mt-0 lg:gap-8">
            <a href="/">HOME</a>
            <a href="/episodes">EPISODES</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
