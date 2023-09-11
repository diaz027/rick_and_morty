let myFavorites = [];

const postFav = (req, res) => {
const {body} = req
    myFavorites.push(body)
    return res.status(200).send(myFavorites)
}

const deleteFav = (req, res) => {
const {id} = req.params;
    myFavorites = myFavorites.filter(fav => fav.id !== id)
    return res.status(200).send(myFavorites)
}

module.exports={postFav, deleteFav}