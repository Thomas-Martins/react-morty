import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import EpisodeCard from "../../components/EpisodeCard";
import PaginationButtons from "../../components/PaginationButtons";
import { useEpisodes } from "../../service/queries";

export default function Episodes() {
  // Requête pour obtenir la liste des épisodes
  const episodesQuery = useEpisodes();

  // Gestion de l'état de la page courante pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const episodesPerPage = 6;
  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;

  // Obtention des épisodes actuels en fonction de la page courante
  const currentEpisodes = episodesQuery?.data?.slice(indexOfFirstEpisode, indexOfLastEpisode);
  const pageCount = Math.ceil(episodesQuery?.data?.length / episodesPerPage);

  // Défilement vers le haut de la page lors du changement de page, uniquement sur mobile ou tablette
  useEffect(() => {
    if (window.innerWidth < 1280) {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-full flex-1 bg-[#4F4F4F]"
    >
      {/* En-tête avec une image de fond et un titre */}
      <div className="h-full w-full overflow-hidden">
        <div className="relative">
          <div className="absolute w-full h-full z-10 bg-[#00B2CA] bg-opacity-45"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-8 text-white z-50 w-full max-w-screen-xl ">
            <p className="text-xl font-bold underline underline-offset-4 decoration-[#00B2CA]">ALL EPISODES</p>
          </div>
          <img src="../public/images/episodes_background.jpg" alt="logo" className="brightness-[0.85] object-cover w-full max-h-[291px]" />
        </div>
      </div>
      {/* Contenu principal */}
      <div className="relative px-8 max-w-screen-xl mx-auto xl:px-14 xl:py-10">
        {/* Affichage d'un Loader pendant le chargement des données */}
        {episodesQuery.isLoading && (
          <div className="flex justify-center items-center">
            <MoonLoader color="#00B2CA" size={100} />
          </div>
        )}
        {/* Affichage d'un message d'erreur en cas d'échec de la requête */}
        {episodesQuery.isError && <div className="text-white mt-4 text-2xl">"Un problème est survenu"</div>}
        {/* Affichage des cartes d'épisodes si la requête réussit */}
        {episodesQuery.isSuccess && (
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-7 xl:grid-cols-3">
            {currentEpisodes?.map((episode: any) => (
              <motion.div
                initial={{ scaleX: 0, scaleY: 0 }}
                animate={{ scaleX: 1, scaleY: 1 }}
                exit={{ scaleX: 0, scaleY: 0 }}
                transition={{ duration: 0.3 }}
                key={episode.id}
              >
                {/* Composant EpisodeCard pour chaque épisode */}
                <div className="transition-transform duration-500 transform hover:scale-105">
                  <EpisodeCard key={episode.id} title={episode.name} episode={episode.episode} release={episode.air_date} episodeId={episode.id} />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      {/* Pagination avec affichage dynamique en fonction du nombre de pages */}
      <div className="flex justify-center my-4">
        <PaginationButtons currentPage={currentPage} pageCount={pageCount} setCurrentPage={setCurrentPage} />
      </div>
    </motion.div>
  );
}
