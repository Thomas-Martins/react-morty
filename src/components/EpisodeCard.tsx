import Button from "./common/button";

export default function EpisodeCard() {
  return (
    <>
      <div className="mt-8 gap-30 overflow-x-auto">
        <div className="flex-shrink-0 w-full max-w-[calc(33.3333% - 60px)]">
          <div className="relative border-4 border-[#00B2CA] overflow-hidden rounded-lg h-[180px]">
            <div className="absolute w-full h-full bg-[#00B2CA] bg-opacity-40 z-10"></div>
            <div className="absolute w-full h-full">
              <img src="../public/images/thumbnail.jpg" alt="thumbnail" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-white z-10 flex items-end justify-between  w-full px-4 pb-4 mt">
              <div>
                <h2 className="text-xl font-bold">S01E01</h2>
                <p className="font-semibold">The Ricklantis Mixup</p>
                <p className="text-xs">Release: September 10, 2017</p>
              </div>
              <a href="/episode/:id">
                <Button label="See more" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
