const router = require('express').Router();

const apiRoutes = require('./api/apiSneaker');

router.use('/api', apiRoutes);

module.exports = router;