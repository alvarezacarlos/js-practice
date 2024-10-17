const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = mongoose.model('User', new Schema({
    user: String,
    password: String,
    role: { type: String, default: 'user' }, //admin
    saltPassword: String,
    saltToken: String,
}))

module.exports = Users