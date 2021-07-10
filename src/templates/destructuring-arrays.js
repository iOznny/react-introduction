const characters = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = characters;

console.log(p3);
console.log(characters);

const returnArray = () => {
    return ['ABC', 123];
}

const [words, numbers] = returnArray();
console.log(words, numbers);

// Homework
const useState = (value) => {
    return [value, () => {
        console.log('Hola Mundo');
    }];
}

const [name, setName] = useState('Goku');
console.log(name);
setName();