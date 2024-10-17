const jwt = require('jsonwebtoken')

const { Users } = require('../models')

const isAuthenticated = (req, res, next) => {

    const { user } = req.body

    Users.findOne({ user })
        .exec()
        .then(user => {
            if (!user){
                return res.sendStatus(403)
            }

            const token = req.headers.authorization
             

            if(!token){
                return res.sendStatus(403)
            }

            jwt.verify(token, user.saltToken, (err, decodedTkn) => {
                
                const { _id } = decodedTkn

                Users.findOne({ _id }).exec()
                    .then(user => {
                        req.user = user
                        next()
                    })
            })
        })
}


// const hasRole = role = (req, res, next) => {
//     if(req.user.role === role){
//         return next()
//     }
//     return res.sendStatus(403)
// }


// const hasRole = roles = (req, res, next) => {
//     if(roles.indexOf(req.user.role) > -1){
//         //role se encuntra en el arreglo
//         return next()
//     }
//     return res.sendStatus(403)
// }


// module.exports = {
//     isAuthenticated,
//     hasRole
// }

module.exports = {
    isAuthenticated,
}