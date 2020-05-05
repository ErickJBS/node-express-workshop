const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

    // Check if auth header exists
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ errors: [{ msg: 'No token, authorization denied' }] });
    }

    //check if valid token format (Authorization: Bearer Afgo....kij)
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ errors: [{ msg: 'Wrong token format, authorization denied' }] });
    }

    try {
        const jwtSecret = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded.user; // <-- Optional
        next();
    } catch (err) {
        return res.status(401).json({ errors: [{ msg: 'Invalid token, authorization denied' }] })
    }
}
