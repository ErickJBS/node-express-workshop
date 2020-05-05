const { Router } = require('express')
const { check } = require('express-validator')
const UsersController = require('../controllers/users.controller')

const router = new Router();

router.post('/signin', [
    check('email', 'Email must be a valid email').exists().isEmail(),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
], UsersController.signIn)
router.post('/signup', [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Email must be a valid email').isEmail(),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
], UsersController.signUp)

module.exports = router;