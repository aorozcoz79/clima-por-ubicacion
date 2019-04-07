const { getLocalizacion } = require('./lugar/lugar')
const { getClima } = require('./clima/clima')
const { args } = require('./config/yargs')



const obtenerClima = async(dir) => {

    try {

        const coords = await getLocalizacion(dir)

        const clima = await getClima(coords.lat, coords.lng)

        return clima

    } catch (error) {
        return error
    }



}

// getLocalizacion(args.direccion)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

obtenerClima(args.direccion)
    .then(res => console.log(`El clima de ${args.direccion} es de ${res}`))
    .catch(err => console.log(`No se pudo determinar el clima de ${args.direccion}`))

// getClima(10.87, -74.77)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))s