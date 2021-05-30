const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    nombre: {
        alias: 'n',
        desc: 'Nombre ciudad de la que se quiere obtener informacion',
        demand: true
    }
}).argv;

// lugar.getCiudad(argv.nombre)
//     .then(console.log);

// clima.getClima(-31.4, -64.18)
//     .then(console.log)
//     .catch(console.log);

// Como yo hice la funcion
// const getInfo = async(nombre) => {
//     lugar.getCiudad(nombre)
//         .then(ciudad => {
//             clima.getClima(ciudad.lat, ciudad.lng)
//                 .then(temp => { console.log(`La temperatura en la ciudad: ${ciudad.name}
//                 es de: ${temp} grados`); 
//             })
//         })
//         .catch(console.log);
// }

const getInfo = async(nombre) => {

    try {
        const coords = await lugar.getCiudad(nombre);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.name} es de ${temp}`
    } catch (error) {
        return `No se pudo determinar el clima de ${ nombre }`
    }
}

getInfo(argv.nombre)
    .then(console.log)
    .catch(console.log);