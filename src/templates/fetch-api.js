// Fetch API
const apiKey = 'wVPinMHaw1TK9d0hmQgZ6CTLl8Q3w1jH';
const httpPet = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

httpPet.then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    })
    .catch(console.warn);