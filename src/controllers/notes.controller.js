const NotesService = require('../services/notes.service')

const create = async (request, response) => {
    const note = request.body;
    try {
        const savedNote = await NotesService.create(note);
        return response.send(savedNote);
    } catch(e) {
        const code = e.errorCode || 500;
        console.log(e);
        return response.status(code).json({ errors: [{ msg: e.message }] });
    }
}

const findAll = async (request, response) => {
    const { startDate, endDate, userId } = request.query;
    try {
        const notes = await NotesService.findAll({ startDate, endDate, userId });
        return response.send(notes);
    } catch (e) {
        const code = e.errorCode || 500;
        console.log(e);
        return response.status(code).json({ errors: [{ msg: e.message }] });
    }
}

const findById = async (request, response) => {
    const noteId = request.params.noteId;
    try {
        const note = await NotesService.findById(noteId);
        return response.send(note);
    } catch (e) {
        const code = e.errorCode || 500;
        console.log(e);
        return response.status(code).json({ errors: [{ msg: e.message }] });
    }
}

const update = async (request, response) => {
    const note = request.body;
    const noteId = request.params.noteId;
    try {
        const updatedNote = await NotesService.update(noteId, note);
        return response.send(updatedNote);
    } catch (e) {
        const code = e.errorCode || 500;
        console.log(e);
        return response.status(code).json({ errors: [{ msg: e.message }] });
    }
}

const remove = async (request, response) => {
    const noteId = request.params.noteId;
    try {
        await NotesService.remove(noteId);
        return response.send();
    } catch (e) {
        const code = e.errorCode || 500;
        console.log(e);
        return response.status(code).json({ errors: [{ msg: e.message }] });
    }
}

module.exports = {
    findAll, findById, create, remove, update
}