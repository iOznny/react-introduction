//import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log(heroes);
// console.log(owners);

// Get heroe by id.
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
//console.log(getHeroeById(1));

// Get heroe by owner.
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
//console.log(getHeroesByOwner('DC'));