export const getGifs = async (categoria) => {
   const url = `https://api.giphy.com/v1/gifs/search?limit=9&api_key=LFaDq0C7YeR6GZzX0fpaSUZQhprUFh0w&q=${encodeURI(
      categoria
   )}`;
   const resp = await fetch(url);
   const { data } = await resp.json();
   const obj = data.map((img) => {
      return {
         id: img.id,
         titulo: img.title,
         url: img.images?.downsized_medium.url,
      };
   });
   return obj;
};
