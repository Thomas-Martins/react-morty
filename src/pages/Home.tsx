import { motion } from "framer-motion";
import { MoonLoader } from "react-spinners";
import EpisodeCard from "../components/EpisodeCard";
import { useEpisodes } from "../service/queries";

export default function Home() {
  const episodesQuery = useEpisodes();
  const latestEpisodes = episodesQuery?.data?.slice(-3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-full flex-1 "
    >
      <div className="absolute h-full w-full brightness-[0.25]">
        <img src="../public/images/home_bg.jpg" alt="background" className="w-full h-full object-cover" />
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
          {/* Loader */}
          {episodesQuery.isLoading && (
            <div className="flex justify-center items-center h-[500px]">
              <MoonLoader color="#00B2CA" size={100} />
            </div>
          )}
          {/* div cards */}
          {episodesQuery.isError ? (
            <div className="text-white mt-4 text-2xl">"Un problème est survenu"</div>
          ) : (
            <div className="grid md:grid-cols-2 md:gap-5 lg:gap-7 xl:grid-cols-3">
              {latestEpisodes?.map((episode: any) => (
                <motion.div
                  initial={{ scaleX: 0, scaleY: 0 }}
                  animate={{ scaleX: 1, scaleY: 1 }}
                  exit={{ scaleX: 0, scaleY: 0 }}
                  transition={{ duration: 0.3 }}
                  className="transition-transform duration-500 transform hover:scale-105"
                >
                  <EpisodeCard key={episode.id} title={episode.name} episode={episode.episode} release={episode.air_date} episodeId={episode.id} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
