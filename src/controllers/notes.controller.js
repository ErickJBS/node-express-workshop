const NotesService = require('../services/notes.service')

const create = async (request, response) => {
    const note = request.body;
    try {
        const savedNote = await NotesService.create(note);
        return response.send(savedNote);
    } catch(e) {
        console.log(e);
        return response.status(400).send();
    }
}

const findAll = async (request, response) => {
    const { startDate, endDate, userId } = request.query;
    try {
        const notes = await NotesService.findAll({ startDate, endDate, userId });
        return response.send(notes);
    } catch (e) {
        console.log(e);
        return response.status(500).send();
    }
}

const findById = async (request, response) => {
    const noteId = request.params.noteId;
    try {
        const note = await NotesService.findById(noteId);
        return response.send(note);
    } catch (e) {
        console.log(e);
        return response.status(500).send();
    }
}

const update = async (request, response) => {
    const note = request.body;
    const noteId = request.params.noteId;
    try {
        const updatedNote = await NotesService.update(noteId, note);
        return response.send(updatedNote);
    } catch (e) {
        console.log(e);
        return response.status(500).send();
    }
}

const remove = async (request, response) => {
    const noteId = request.params.noteId;
    try {
        await NotesService.remove(noteId);
        return response.send();
    } catch (e) {
        console.log(e);
        return response.status(500).send();
    }
}

module.exports = {
    findAll, findById, create, remove, update
}