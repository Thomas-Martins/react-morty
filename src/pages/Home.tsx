export default function Home() {
  return (
    <main className="relative h-full flex-1 ">
      <div className="absolute h-full w-full brightness-[0.25]">
        <img src="../public/images/pxfuel.jpg" alt="background" className="w-full h-full object-cover" />
      </div>
      {/* content */}
      <div className="relative px-8 py-28 max-w-screen-xl mx-auto xl:px-14 xl:py-44 ">
        {/* DIv logo */}
        <div className="w-[280px] mx-auto md:mx-0 md:w-[404px]">
          <img src="../public/images/logo.png" alt="logo" />
        </div>
        {/* div Section */}
        <div>
          {/* div title */}
          <div className="mt-7 text-center md:text-left lg:mt-12">
            <h1 className="text-white text-2xl underline underline-offset-4 decoration-[#00B2CA] font-bold">LASTS EPISODES</h1>
          </div>
          {/* div cards */}
          <div className="grid md:grid-cols-2 md:gap-5 lg:gap-7 xl:grid-cols-3">CARDS</div>
        </div>
      </div>
    </main>
  );
}
