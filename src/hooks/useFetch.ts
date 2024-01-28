const useFetch = async (url: string) => {
  try {
    const response = await fetch(`${url}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    return response;
  } catch (error) {}
};

export default useFetch;
