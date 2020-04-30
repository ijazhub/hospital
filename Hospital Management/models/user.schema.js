const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
var userSchema = new mongoose.Schema({
    username: {
        type: 'String'
    },
    password: {
        type: 'String'
    },
    role: {
        type: 'String'
    },
    document_id: {
        type: 'String'
    },
    tokens: [{
        token: {
            type: 'String'
        }
    }]
})

userSchema.pre('save', async function (next) {

    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()

})
var userModel = mongoose.model('user', userSchema)
module.exports = userModel