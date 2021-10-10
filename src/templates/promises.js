// Promises
import { getHeroeById } from "./templates/import-export-functions";

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {    
//         const heroe = getHeroeById(2);        
//         resolve(heroe);
//         //reject('No se pudo encontrar el heroe.');
//     }, 2000);
// });

// promise.then((heroe) => {
//     console.log('Heroe', heroe);
// }).catch(e => console.warn(e));

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {    
            const heroe = getHeroeById(id);            
            (heroe) ? resolve(heroe) : reject('No se pudo encontrar el heroe');
        }, 2000);
    });
};

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);