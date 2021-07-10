// Promises
import { getHeroeById } from "./templates/import-export-functions";

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {    
        const heroe = getHeroeById(2);
        console.log(heroe);
        //resolve();
    }, 2000);
});

promise.then(() => {
    console.log('then promise');
})
