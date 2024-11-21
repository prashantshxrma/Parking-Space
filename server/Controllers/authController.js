const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User Registration
exports.signup = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser  = new User({ username, password: hashedPassword, email });
        await newUser .save();
        res.status(201).send('User  registered successfully');
    } catch (error) {
        res.status(400).send('Error registering user');
    }
};

// User Login
exports.signin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).send('User  not found');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).send('Invalid credentials');

        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(400).send('Error logging in');
    }
};