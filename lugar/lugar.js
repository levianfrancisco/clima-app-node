const axios = require('axios');

const getCiudad = async(nombre) => {

    const encodedUrl = encodeURI(nombre);

    const instance = axios.create({
        baseURL: `https://weatherapi-com.p.rapidapi.com/search.json?q=${encodedUrl}`,
        headers: {
            'x-rapidapi-key': 'b378a6e54emsh3ee50271339c4fep1add59jsn9975d2853539',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
            'useQueryString': true
        }
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para: ${nombre}`);
    }

    const data = resp.data[0];
    const name = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        name,
        lat,
        lng
    }

}

module.exports = {
    getCiudad
}