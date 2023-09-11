const validation = require('../utils/user')

const login = (req, res) => {
   const {email, password} =req.query
   if( email === validation.email && password === validation.password) {
    return res.status(200).send({access:true})
   } else {
    return res.status(200).send({access:false})
   }
}
module.exports = login;