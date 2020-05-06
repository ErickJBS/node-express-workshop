const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const RequestException = require('../errors/request.exception')

class UserService {

    async findUserById(id) {
        const user = await User.findById(id).select('-password');
        if (!user) {
            throw new RequestException(404, 'User does not exists');
        }

        return user;
    }

    async signIn(email, password) {
        let user = await User.findOne({ email });
        if (!user) {
            throw new RequestException(404, 'User does not exists');
        }

        const credentialsMatch = await bcrypt.compare(password, user.password);
        if (!credentialsMatch) {
            throw new RequestException(401, 'Invalid credentials');
        }

        const payload = {
            user: {
                id: user._id
            }
        }

        const jwtSecret = process.env.JWT_SECRET;
        const token = jwt.sign(payload, jwtSecret, { expiresIn: 36000 });
        return {
            token: token
        };
    }

    async signUp(name, email, password) {
        let user = await User.findOne({ email });

        if (user) {
            throw new RequestException(403, 'User already exists');
        }

        user = new User({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        user = await user.save();
        delete user.password;
        
        return user;
    }
}
module.exports = new UserService();