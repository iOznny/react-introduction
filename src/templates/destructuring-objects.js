// Destructuring of Objects
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
    range: 'Soldier'
};

// Asignación desestructurante.
const { name: realname, age, key } = person;
console.log(realname, age, key);


const useContext = ({ name, age, key, range = 'Capitan' }) => {
    //console.log(name, range);
    return {
        nameKey: key,
        ages: age,
        latlog: {
            lat: 14.22424,
            log: 46.35523
        }
    }
}

const { nameKey, ages, latlog: { lat, log }} = useContext(person);
console.log(nameKey, ages);
console.log(lat, log);