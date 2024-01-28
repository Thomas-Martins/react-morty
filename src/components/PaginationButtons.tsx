interface PaginationProps {
  currentPage: number;
  pageCount: number;
  setCurrentPage: (value: number) => void;
}

const renderPaginationButtons = ({ currentPage, pageCount, setCurrentPage }: PaginationProps) => {
  const renderPageButtons = () => {
    const buttons = [];
    const maxButtonsToShow = 4;

    let startPage;

    if (currentPage < 5) {
      startPage = 1;
    } else {
      startPage = currentPage - 1;
    }

    for (let i = startPage; i < Math.min(startPage + maxButtonsToShow, pageCount + 1); i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-10 h-10 rounded-full mx-2 bg-[#0090A3] border-2 border-[#00B2CA] text-white ${
            currentPage === i ? "bg-[#00B2CA] border-[#0090A3]" : ""
          }`}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="flex items-center">
      {currentPage > 1 && (
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="w-10 h-10 mx-2 rounded-full bg-[#00B2CA] border-2 border-[#0090A3] text-white transition-opacity transform translate-x-0 opacity-100 ease-in-out"
        >
          &lt;
        </button>
      )}

      {renderPageButtons()}

      {currentPage < pageCount && (
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="w-10 h-10 mx-2 rounded-full bg-[#00B2CA] border-2 border-[#0090A3] text-white focus:outline-none transition-opacity animate-fade-in duration-700"
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default renderPaginationButtons;
