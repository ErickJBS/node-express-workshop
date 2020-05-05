const UsersService = require('../services/users.service')
const { validationResult } = require('express-validator')

const signIn = async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() })
    }

    const { email, password } = request.body;
    try {
        const token = await UsersService.signIn(email, password);
        return response.send(token);
    } catch (e) {
        const code = e.errorCode || 500;
        console.log(e);
        return response.status(code).json({ errors: [{ msg: e.message }] });
    }
}

const signUp = async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = request.body;
    try {
        const user = await UsersService.signUp(name, email, password);
        return user;
    } catch (e) {
        const code = e.errorCode || 500;
        console.log(e);
        return response.status(code).json({ errors: [{ msg: e.message }] });
    }
}

module.exports = {
    signIn, signUp
}