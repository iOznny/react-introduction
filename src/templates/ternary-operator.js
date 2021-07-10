// Ternary Operator
const active = true;
//let message = '';

// if (active) {
//     message = 'Activo';
// } else {
//     message = 'Inactivo';
// }

const message = (active) ? 'Active' : 'Inactive';
console.log(message);

const message2 = active && 'Active';
console.log(message2);