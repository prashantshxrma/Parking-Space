const router = require('express').Router();

router.use('/users', userRoutes);
router.use('/vehicles', vehicleRoutes);

module.exports = router;