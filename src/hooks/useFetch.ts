// Fonction asynchrone pour effectuer une requête GET à une URL spécifiée
const useFetch = async (url: string) => {
  try {
    // Utilisation de Fetch pour effectuer une requête GET
    const response = await fetch(`${url}`, {
      method: "GET",
    })
      .then((response) => {
        // Vérification de la réponse HTTP
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Conversion de la réponse en JSON et renvoi du résultat
        return response.json();
      })
      .catch(() => {
        // Gestion des erreurs
        throw new Error("Erreur lors de la requête");
      });

    // Renvoi de la réponse (qui est généralement un objet JSON)
    return response;
  } catch (error) {
    // Gestion des erreurs
    throw new Error("Erreur lors de la requête");
  }
};

export default useFetch;
