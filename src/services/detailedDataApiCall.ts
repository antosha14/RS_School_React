const detailedDataApiCall = async (searchedUid: string) => {
  try {
    const uid = searchedUid ? searchedUid : "";
    const urlSearchParams = new URLSearchParams({
      uid: uid,
    });
    const URL = `https://stapi.co/api/v1/rest/character?${urlSearchParams}`;
    const response = await fetch(URL, {
      cache: "force-cache",
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const character = await response.json();
    return character;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};

export { detailedDataApiCall };
