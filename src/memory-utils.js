async function collectGiphyData() {
  const url =
    "https://api.giphy.com/v1/gifs/search?api_key=gIr5EZQhAHQYgbHXln73tQgh7QevcjKf&q=friends+cast&limit=6&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    return result.data; //.map((imageData) => imageData.images.fixed_width.webp);
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

function buildImageMap(imagesData) {
  let imageMap = [];

  imagesData.forEach((imageData) => {
    const imageId = imageData.id;
    const imageIdDup = imageData.id + "_dup";
    const imageUrl = imageData.images.fixed_width.webp;
    const imageAlt = imageData.title;

    imageMap.push({
      id: imageId,
      src: imageUrl,
      className: "card flip",
      alt: imageAlt,
    });
    imageMap.push({
      id: imageIdDup,
      src: imageUrl,
      className: "card flip",
      alt: imageAlt,
    });
  });

  return shuffle(imageMap);
}

function shuffle(array) {
  let retArray = array;

  for (let i = retArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [retArray[i], retArray[j]] = [retArray[j], retArray[i]];
  }

  return retArray;
}

export { collectGiphyData, buildImageMap };
