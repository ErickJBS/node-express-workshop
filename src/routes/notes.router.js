const { Router } = require('express')
const NotesController = require('../controllers/notes.controller')

const router = new Router();

router.get('/notes', NotesController.findAll);
router.get('/notes/:noteId', NotesController.findById);
router.post('/notes', NotesController.create);
router.put('/notes/:notesId', NotesController.update);
router.delete('/notes/:notesId', NotesController.remove);

module.exports = router;