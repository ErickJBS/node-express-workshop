const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    toJSON: {
        versionKey: false
    }
})

module.exports = model('User', UserSchema);