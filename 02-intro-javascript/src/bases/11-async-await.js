const getImage = async () => {
  try {
    const apiKey = 'FWErnoS0blI4p1c4GnLa72s5TDuqDtjJ';
    // await waits for this line of code to finish executing (in this case the promise) before executing the next line of code. So instead of resp being a promise<response>, now is just a resp
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    // console.log(url);
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

// console.log(getImage());
getImage();
