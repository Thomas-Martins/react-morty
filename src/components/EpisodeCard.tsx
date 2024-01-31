import { Link } from "react-router-dom";
import Button from "./common/button";

interface EpisodeCardProps {
  title: string;
  episode: string;
  release: string;
  episodeId: string;
}
const EpisodeCard: React.FC<EpisodeCardProps> = ({ title, episode, release, episodeId }) => {
  return (
    <Link to={`/episodes/${episodeId}`}>
      <div className="mt-8 gap-30 overflow-x-auto">
        <div className="flex-shrink-0 w-full max-w-[calc(33.3333% - 60px)]">
          <div className="relative border-4 border-[#00B2CA] overflow-hidden rounded-lg h-[180px]">
            <div className="absolute w-full h-full bg-[#00B2CA] bg-opacity-40 z-10"></div>
            <div className="absolute w-full h-full">
              <img src="../public/images/thumbnail.jpg" alt="thumbnail" className="w-full h-full object-cover brightness-75" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-white z-10 flex items-end justify-between w-full px-4 pb-4 mt">
              <div className="">
                <h2 className="text-xl font-bold">{episode}</h2>
                <p className="font-semibold w-[200px]">{title}</p>
                <p className="text-xs">{release}</p>
              </div>
              <div>
                <Button label="See more" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
