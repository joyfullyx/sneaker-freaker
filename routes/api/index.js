const router = require('express').Router();

const userRoutes = require('./apiSneaker');

router.use('/sneakers', userRoutes);

module.exports = router;