// Async & Await
const getImage = async () => {
    try {
        const apiKey = 'wVPinMHaw1TK9d0hmQgZ6CTLl8Q3w1jH';
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await res.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // Manejo del error.
        console.error(error);
    }
}

getImage();