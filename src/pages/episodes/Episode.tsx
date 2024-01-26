import { IoMdMale } from "react-icons/io";

export default function Episode() {
  return (
    <main className="relative h-full flex-1 bg-[#4F4F4F] text-white ">
      <div className="px-8 md:px-16 max-w-screen-xl mx-auto">
        {/* div informations episode */}
        <div className="mt-24">
          <h1 className="underline underline-offset-2 decoration-[#00B2CA] font-bold text-2xl">The Ricklantis Mixup</h1>
          <div className="md:grid md:grid-cols-3 md:gap-10 ">
            <img src="../public/images/test.jpg" alt="thumbnail" className="mt-6 md:h-[270px] object-cover" />
            <div className="grid gap-5 mt-6 md:gap-2 md:grid-rows-6">
              <p className="border-b border-[#00B2CA] ">Episode : S03E07</p>
              <p className="border-b border-[#00B2CA] ">Release date : September 10, 2017</p>
              <p className="border-b border-[#00B2CA] ">Characters: 12</p>
            </div>
          </div>
        </div>
        {/* div characters in episode */}
        <div className="mt-14">
          <h1 className="text-center underline underline-offset-2 decoration-[#00B2CA] font-bold text-2xl lg:text-left">
            5 Characters in the episode
          </h1>
          <div className="mt-8">
            <img src="../public/images/test.jpg" alt="characters" />
            <div className="flex items-center">
              <p className="mr-5">Morty Smith </p>
              <IoMdMale />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
