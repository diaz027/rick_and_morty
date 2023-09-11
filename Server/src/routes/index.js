const getCharById =  require('../controllers/getCharById');
const {postFav, deleteFav} = require ('../controllers/handlefavorites');
const login = require ('../controllers/login')
const {Router} = require('express');

const mainRouter = Router() 

mainRouter.get("/character/:id",getCharById)
mainRouter.get("/login",login)
mainRouter.post("/fav",postFav)
mainRouter.delete("/fav/:id",deleteFav)

module.exports= mainRouter;