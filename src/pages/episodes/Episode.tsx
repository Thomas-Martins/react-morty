import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoMdMale } from "react-icons/io";
import { IoFemale } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { useEpisode } from "../../service/queries";

export default function Episode() {
  // Obtention de l'ID de l'épisode à partir des paramètres d'URL
  const { id } = useParams();

  // Obtenir les informations de l'épisode
  const episodeQuery = useEpisode(id);
  const episodeInfo = episodeQuery.data;
  const [charactersInfo, setCharactersInfo] = useState<any[]>([]);

  // Chargement des informations des personnages lorsqu'il y a des changements dans les données de l'épisode
  useEffect(() => {
    fetchCharactersInfo();
  }, [episodeQuery.data]);

  // Fonction asynchrone pour obtenir les informations des personnages associés à l'épisode
  const fetchCharactersInfo = async () => {
    if (episodeQuery.data && episodeQuery.data.characters) {
      const charactersUrls = episodeQuery.data.characters;

      // Requêtes pour obtenir les détails de chaque personnage
      const characters = charactersUrls.map(async (characterUrl: string) => {
        const response = await fetch(characterUrl, {
          method: "GET",
        });
        const data = await response.json();
        return data;
      });

      // Attendre que toutes les requêtes soient terminées avant de traiter les données
      const charactersData: any = await Promise.all(characters);

      // Obtenir une sélection aléatoire de 5 personnages
      const randomCharacters = getRandomCharacters(charactersData);

      setCharactersInfo(randomCharacters);
    }
  };

  // Fonction pour mélanger aléatoirement un tableau et obtenir un sous-ensemble de 5 éléments
  const getRandomCharacters = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray.slice(0, 5);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative h-full flex-1 bg-[#4F4F4F] text-white">
      {episodeQuery.isLoading && (
        // Affichage d'un spinner de chargement en cas de chargement en cours
        <div className="flex justify-center items-center h-[500px]">
          <MoonLoader color="#00B2CA" size={100} />
        </div>
      )}
      {episodeQuery.isError && (
        // Affichage d'un message d'erreur en cas d'échec de la requête
        <div className="flex justify-center items-center h-[500px]">"Un problème est survenu"</div>
      )}
      {episodeQuery.isSuccess && (
        // Affichage des détails de l'épisode et des personnages une fois la requête réussie
        <div className="px-8 md:px-16 max-w-screen-xl mx-auto">
          {/* Section des informations sur l'épisode */}
          <div className="mt-24">
            <h1 className="underline underline-offset-8 decoration-[#00B2CA] font-bold text-2xl">{episodeInfo?.name}</h1>
            <div className="md:grid md:grid-cols-3 md:gap-10 ">
              <img src="../public/images/thumbnail2.jpg" alt="thumbnail" className="mt-6 md:h-[270px] object-cover" />
              <div className="grid gap-5 mt-6 md:gap-2 md:grid-rows-6">
                <p className="border-b border-[#00B2CA] ">Episode : {episodeInfo?.episode}</p>
                <p className="border-b border-[#00B2CA] ">Release date : {episodeInfo?.air_date}</p>
                <p className="border-b border-[#00B2CA] ">Characters: {episodeInfo?.characters.length}</p>
              </div>
            </div>
          </div>
          {/* Section des personnages de l'épisode */}
          <div className="mt-14 mb-10">
            <h1 className="text-center underline underline-offset-8 decoration-[#00B2CA] font-bold text-2xl lg:text-left">
              5 Characters in the episode
            </h1>
            <div className="sm:flex-wrap md:flex md:justify-between">
              {charactersInfo.map((character: any) => (
                // Affichage des détails de chaque personnage
                <div className="mt-8" key={character.id}>
                  <img src={character.image} alt="character" className=" w-[187px] h-[194px] mx-auto rounded-md " />
                  <div className="flex items-center justify-center">
                    <p className="mr-5">{character.name}</p>
                    {character.gender === "Male" ? <IoMdMale /> : <IoFemale />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
