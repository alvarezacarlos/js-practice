// jsonwebtoken: npm i -S jsonwebtoken
const express = require('express')
const router = express.Router()
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const { Users } = require('../models')

const { isAuthenticated } = require('../auth')

const signToken = ({ _id, saltToken }) => {
    return jwt.sign({ _id }, saltToken, {
        expiresIn: 60 * 60 * 24 * 365,
    })
}

router.post('/register', (req, res) => {
    const { email, password } = req.body

    Users.findOne({ user: email })
        .exec()
        .then(user => {
            if(user){
                return res.send('existe')
            }

            crypto.randomBytes(16, (err, pwSaltBuf) => {
                const pwSaltStr = pwSaltBuf.toString('base64')
               

                crypto.pbkdf2(password, pwSaltStr, 10000, 64, 'sha1', (err, pwBuf) => {
                    const pwStr = pwBuf.toString('base64')
                   
                    crypto.randomBytes(16, (err, tknSaltBuf) => {
                        const tknSaltStr = tknSaltBuf.toString('base64')
                        Users.create({
                            user: email,
                            password: pwStr,
                            saltPassword: pwSaltStr,
                            saltToken: tknSaltStr
                        })
                            .then(() => {
                                res.send('ok')
                            })
                    })
                })
            })
        })
})


router.post('/login', (req, res) => {
    const { email, password } = req.body
    // return res.send({ email, password })
    Users.findOne({ user: email })
        .exec()
        .then(user => {
            if (!user){
                return res.send('Usuario y/o contraseña incorrecta')
            }
            crypto.pbkdf2(password, user.saltPassword, 10000, 64, 'sha1', (err, pwBuf) => {
                const pwStr = pwBuf.toString('base64')
              
                if (user.password === pwStr){
                    const token = signToken({ _id: user._id, saltToken: user.saltToken })

                    return res.send({ token })
                }
                return res.send('Usuario y/o contraseña incorrecta')
            })
        })
})

router.get('/me', isAuthenticated, (req, res) => {
    return res.send(req.user)
})

module.exports = router