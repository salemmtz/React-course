const apiKey = "FWErnoS0blI4p1c4GnLa72s5TDuqDtjJ";

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

request
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    // console.log(url);

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
