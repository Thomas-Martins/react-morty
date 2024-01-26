import EpisodeCard from "../../components/EpisodeCard";

export default function Episodes() {
  return (
    <main className="relative h-full flex-1 bg-[#4F4F4F]">
      <div className="h-full w-full overflow-hidden">
        <div className="relative">
          <div className="absolute w-full max-h-[291px] bg-[#00B2CA] bg-opacity-45 z-10"></div>
          <img src="../public/images/episodes_background.jpg" alt="logo" className="brightness-[0.85] object-cover w-full max-h-[291px]" />
          <div className="absolute bottom-0 left-0 p-8 text-white z-10">
            <p className="text-xl font-bold underline underline-offset-4 decoration-[#00B2CA]">ALL EPISODES</p>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="relative px-8 max-w-screen-xl mx-auto xl:px-14 xl:py-10 ">
        {/* div cards */}
        <div className=" mb-10 grid  md:grid-cols-2 md:gap-5 lg:gap-7 xl:grid-cols-3">
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
        </div>
      </div>
    </main>
  );
}
