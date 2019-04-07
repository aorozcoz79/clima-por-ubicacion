const args = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    })
    .help()
    .argv


const APIKey = 'eefedde494mshee4ac1fcd588b3fp1ff7dcjsn9d386a87cad6'
const BaseUrl = 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location='
module.exports = {
    args,
    APIKey,
    BaseUrl
}