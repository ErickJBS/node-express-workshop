const { Router } = require('express')
const { check } = require('express-validator')
const auth = require('../middlewares/auth.middleware')
const NotesController = require('../controllers/notes.controller')

const router = new Router();

router.get('/notes', [
    auth,
    // check('content', 'Content is required').notEmpty().isLength({ max: 500 })
], NotesController.findAll);
router.get('/notes/:noteId', [
    auth,
    check('noteId').isMongoId().withMessage('Invalid ID')
], NotesController.findById);
router.post('/notes', auth, NotesController.create);
router.put('/notes/:noteId', auth, NotesController.update);
router.delete('/notes/:noteId', auth, NotesController.remove);

module.exports = router;