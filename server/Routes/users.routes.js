const router = require('express').Router();

router.post('/register', authController.register());
router.get('/:id',authMiddleware , authController.getUserById());


const authMiddleware = (req, res, next) => {
    if (!req.user) { res.sendStatus(401)};
    next();


}