// const axios = require('axios');

// const getCharById = (res, id) => {
//     axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data)
//     .then(({name, gender, species, origin, image, status}) =>{
//     const character ={
//         id,
//         name,
//         gender,
//         species,
//         image,
//         origin: origin.name,
//         status
//      }
//      return res
//                 .writeHead(200, {"content-type": "application/json"})
//                 .end(JSON.stringify(character))
//     })
//     .catch(error =>{
//         return res
//          .writeHead(500, {"content-type": "text/plain"})
//         .end(error.message)
//     })
// }

// module.exports = {
//     getCharById
// };
const axios = require('axios')

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    const {id} = req.params;
    axios
    .get(`${URL}${id}`)
    .then((response) => response.data)
    .then(({name, gender, species, origin, image, status}) =>{
            const character ={
                id,
                name,
                gender,
                species,
                image,
                origin: origin.name,
                status
             } 
             return res.status(200).send(character)
    })
    .catch(error =>{
        res.status(500).send(error.message)
    } )
}
module.exports = getCharById;