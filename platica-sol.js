// como se conecta todo lo que hemos visto
const data = [
    { name: 'Fido', age: 13, type: 'dog'},
    { name: 'Mark', age: 24, type: 'human'},
    { name: 'Bobby', age: 3, type: 'dog'},
    { name: 'Juan', age: 55, type: 'human'},
    { name: 'Daniel', age: 25, type: 'human'}
]

// conseguir la edad promedio de los humanos
const total = data.filter((curr) => curr.type === 'human').length;
const edades = data.reduce((accum, curr) => curr?.type === 'human' ? accum += curr.age : accum, 0);
console.log(edades / total)



const names = [
    'Esteban Torres',
    'Johnny Bravo',
    'Jon Snow',
    'Cosmo Kramer',
    'George costanza',
    'Mark'
]
// ordenar por apellido sin modificar el arreglo original
names.sort((a,b) => {
    const nameA = a.toLowerCase();
    const nameB = b.toLowerCase();
    const lastNameA = nameA.split(' ')[1] ?? '';
    const lastNameB = nameB.split(' ')[1] ?? '';
    if(lastNameA < lastNameB) return -1;
    if(lastNameA > lastNameB) return 1;

    return 0;
})
console.log(names);