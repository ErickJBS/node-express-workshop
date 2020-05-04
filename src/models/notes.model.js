const { model, Schema } = require('mongoose')

const NoteSchema = new Schema({
    content: {
        type: String,
        required: true,
        maxlength: 500
    }
    // ,
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // }
}, {
    timestamps: true,
    toJSON: {
        versionKey: false
    }
})

module.exports = model('Note', NoteSchema);