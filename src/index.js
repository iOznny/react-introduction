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


console.log(getUser());