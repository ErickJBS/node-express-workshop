const NoteModel = require('../models/notes.model')
const RequestException = require('../errors/request.exception')

class NotesService {

    async create(note) {
        const newNote = new NoteModel(note);
        return newNote.save();
    }

    async findAll({ startDate, endDate, userId }) {
        const filter = {};
        if (userId) {
            filter['userId'] =  userId;
        }
        if (startDate || endDate) {
            filter['createdAt'] = {};
        }
        if (startDate) {
            filter['createdAt']['$gte'] = startDate;
        }
        if (endDate) {
            filter['createdAt']['$lte'] = endDate
        }

        return NoteModel.find(filter).populate('userId', 'name email')
    }

    async findById(id) {
        const note = await NoteModel.findById(id);
        if (!note) {
            throw new RequestException(404, 'Note not found')
        }
        return note;
    }

    async update(id, note) {
        const exists = await NoteModel.findById(id);
        if (!exists) {
            throw new RequestException(404, 'Note not found')
        }

        const { content } = note;

        const fields = {
            content
        }
        
        return NoteModel.findByIdAndUpdate(
            id, fields, {
                new: true,
                useFindAndModify: false
            }
        );
    }

    async remove(id) {
        const exists = await NoteModel.findById(id);
        if (!exists) {
            throw new RequestException(404, 'Note not found')
        }
        return NoteModel.deleteOne({ _id: id });
    }
}
module.exports = new NotesService();