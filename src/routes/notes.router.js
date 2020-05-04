const { Router } = require('express')
const NotesController = require('../controllers/notes.controller')

const router = new Router();

router.get('/notes', NotesController.findAll);
router.get('/notes/:noteId', NotesController.findById);
router.post('/notes', NotesController.create);
router.put('/notes/:noteId', NotesController.update);
router.delete('/notes/:noteId', NotesController.remove);

module.exports = router;