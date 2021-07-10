// Promises
import { getHeroeById } from "./templates/import-export-functions";

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {    
        const heroe = getHeroeById(2);        
        resolve(heroe);
    }, 2000);
});

promise.then((heroe) => {
    console.log('Heroe', heroe);
});
