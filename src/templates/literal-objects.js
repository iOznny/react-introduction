// Objetos Literales
const person = {
    name: 'Tony',
    lastname: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 5535972,
        lat: 14.23283,
        log: 45.23424
    }
};

// Clonar objeto con el operador spread
const person2 = { ...person };
person2.name = 'Demo';

// Imprimir en formato table.
console.table(person);
console.log(person2);