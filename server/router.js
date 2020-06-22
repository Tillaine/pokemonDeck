const express = require('express');
const router = express.Router();
const { sendAll } = require('./controller.js')
const { sendFiltered } = require('./controller.js')

router.get('/', sendAll);

router.get('/pokemon', sendFiltered)

module.exports = router;