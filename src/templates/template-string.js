// Templates de Strings
const name = 'Demo';
const lastname = 'Demo';

// Full name print 2
//const fullname = name + ' ' + lastname;
const fullname = `${ name } ${ lastname } ${ 1 + 1 }`;

console.log(fullname);

function getGreetings(name) {
    return 'Hello ' + name;
}

console.log(`Text: ${ getGreetings(name) }`);