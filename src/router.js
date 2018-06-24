const express = require('express');
const sampleRoutes = require('./sample_feature/controller');

const router = express.Router();

router.use('/sample', sampleRoutes);

module.exports = router;
