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

const getCharById = async(req, res) => {
    const {id} = req.params;
    try{
     const response = await axios.get(`${URL}${id}`);
    const {name, gender, species, origin, image, status} = response.data;
            const character ={
                id,
                name,
                gender,
                species,
                image,
                origin: origin.name,
                status
             };
             return res.status(200).send(character)
    } catch{(error => {
        res.status(500).send(error.message)
    })}
}
module.exports = getCharById;