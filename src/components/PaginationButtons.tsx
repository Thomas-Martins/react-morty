// Interface pour le composant de pagination
interface PaginationProps {
  currentPage: number; // Page actuelle
  pageCount: number; // Nombre total de pages
  setCurrentPage: (value: number) => void; // Fonction pour définir la page actuelle
}

// Fonction pour rendre les boutons de pagination en fonction des propriétés passées
const renderPaginationButtons = ({ currentPage, pageCount, setCurrentPage }: PaginationProps) => {
  // Fonction pour générer les boutons de page
  const renderPageButtons = () => {
    const buttons = [];
    const maxButtonsToShow = 4;

    let startPage;

    // Calcul du point de départ en fonction de la page actuelle
    if (currentPage < 5) {
      startPage = 1;
    } else {
      startPage = currentPage - 1;
    }

    // Génération des boutons en fonction du nombre total de pages et du point de départ
    for (let i = startPage; i < Math.min(startPage + maxButtonsToShow, pageCount + 1); i++) {
      buttons.push(
        // Création du bouton avec le numero de la page et un style différent si la page est active
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

  // Rendu du composant de pagination
  return (
    <div>
      {currentPage > 1 && (
        // Bouton pour aller à la page précédente
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="w-10 h-10 mx-2 rounded-full bg-[#00B2CA] border-2 border-[#0090A3] text-white transition-opacity transform translate-x-0 opacity-100 ease-in-out"
        >
          {"<"}
        </button>
      )}
      {renderPageButtons()} {/* Appel de la fonction pour générer les boutons de page */}
      {currentPage < pageCount && (
        // Bouton pour aller à la page suivante
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="w-10 h-10 mx-2 rounded-full bg-[#00B2CA] border-2 border-[#0090A3] text-white focus:outline-none transition-opacity animate-fade-in duration-700"
        >
          {">"}
        </button>
      )}
    </div>
  );
};

export default renderPaginationButtons;
