const express = require('express');
const router = express.Router({ mergeParams: true });
const { sendAll } = require('./controller.js')
const { sendFiltered } = require('./controller.js')

router.get('/', sendAll);

// ************************
// Backend filtering
// ************************
// router.get('/', sendFiltered)

module.exports = router;