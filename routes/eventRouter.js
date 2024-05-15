const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/:eventId', eventController.getEventDetails);

module.exports = { router };