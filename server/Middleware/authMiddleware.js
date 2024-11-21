const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send('Access denied.');
    }

    try {
        const verified = jwt.verify(token, 'your_jwt_secret');
        req.user = await User.findById(verified.id);
        next();
    } catch (err) {
        return res.status(400).send('Invalid token.');
    }
};

module.exports = authMiddleware;