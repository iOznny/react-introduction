// Funciones
const greet = function(name) {
    return `Hola, ${ name }`;
}

// Funciones de flecha o lamba.
const arrow = (name) => {
    return `Hola, ${ name }`;
}

const arrowReturn = (name) => `Hola, ${ name }`;
const helloWorld = () => `Hola Mundo`;

console.log(greet);
console.log(arrow('Arrow'));
console.log(arrowReturn('arrowReturn'));
console.log(helloWorld());

// Examples
const getUser = () => {
    return {
        uid: 'abc123',
        name: 'Chupapimuñaño'
    }
}

const getUserArror = () => ({
    uid: 'abc123',
    name: 'Chupapimuñaño'
});

const user = getUser();
console.log(user);

function getUserActive(name) {
    return {
        uid: 'ABC567',
        username: name
    }
};

const userActive = getUserActive('Demo');
console.log(userActive);

// Homework
// 1. Tranformar a arrow function.
// 2. Retornar un objeto implicito.
// 3. Pruebas.
const getUserActive2 = (name) => ({
    uid: 'ABC567',
    username: name
});

const userActive2 = getUserActive2('Demo');
console.log(userActive2);