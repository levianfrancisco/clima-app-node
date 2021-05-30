const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=b1793e79f31fdb8392ea033a28033148&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}