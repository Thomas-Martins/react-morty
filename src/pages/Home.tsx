export default function Home() {
  return (
    <main className="relative min-h-screen max-w-screen bg-cover bg-center">
      <div className=" brightness-[0.25] absolute z-0 inset-0">
        <img src="../public/images/pxfuel.jpg" alt="background" className="w-full h-full object-cover" />
      </div>
      <div className="relative top-[173px] ml-14">
        <div className="w-[404px]">
          <img src="../public/images/logo.png" alt="logo" />
        </div>
        <div className="mt-10">
          <h1 className="text-white text-2xl underline underline-offset-4	decoration-[#00B2CA] font-bold">LASTS EPISODES</h1>
          <div className="mt-8">
            <div className="bg-red-600 w-[368px] h-[180px] absolute border-4 border-[#00B2CA] overflow-hidden rounded-lg">
              <div className="absolute">
                <img src="../public/images/thumbnail.jpg" alt="thumbnail" />
              </div>
              <div className="relative text-white z-10 flex justify-between items-end w-full px-4 top-24">
                <div className="">
                  <h2 className="text-xl font-bold">S01E01</h2>
                  <p className="font-semibold">The Ricklantis Mixup</p>
                  <p className="text-xs">Release: September 10, 2017</p>
                </div>
                <div>
                  <button className="bg-[#00B2CA] px-5 py-1 rounded-lg border-2 border-[#0090A3]">See more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
