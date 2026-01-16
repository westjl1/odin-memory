async function collectGiphyData() {
  const url =
    "https://api.giphy.com/v1/gifs/search?api_key=gIr5EZQhAHQYgbHXln73tQgh7QevcjKf&q=friends+cast&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    return result.data.map((imageData) => imageData.images.fixed_width.webp);
  } catch (error) {
    console.error(error.message);
    return null; // Return a fallback value in case of error
  }
}

export { collectGiphyData };
