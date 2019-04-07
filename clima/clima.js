const axios = require('axios')


const getClima = async(lat, lng) => {

    const appid = '6ef13536300556f68209821dd12e29b9'

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appid}&units=metric`)


    const data = resp.data.main.temp

    return data
        // console.log(data);
        // const direccion = data.name
        // const lat = data.lat
        // const lng = data.lon
        // return {
        //     direccion,
        //     lat,
        //     lng
        // }

}

module.exports = {
    getClima
}