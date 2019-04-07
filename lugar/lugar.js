const axios = require('axios')
const { BaseUrl, APIKey } = require('../config/yargs')

const getLocalizacion = async(dir) => {

    const instance = axios.create({
        baseURL: BaseUrl + dir,
        headers: { 'X-RapidAPI-Key': APIKey }
    })

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para la dirección ${dir}`)
    }
    const data = resp.data.Results[0]

    const direccion = data.name
    const lat = data.lat
    const lng = data.lon
    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLocalizacion
}