const express = require('express')
const router = express.Router()
const { getPlayerData, getAllPlayerData } = require('./get')

// GET
// GET 'api/player_data/'
router.get('/player_data', getAllPlayerData);

// GET 'api/player_data/:id
router.get('/player_data/:id', getPlayerData);

// POST
router.post('/player_data', require('./post'));

// PUT
router.put('/player_data/:id', require('./put'));

// PATCH
router.patch('/player_data/:id', require('./patch'));

// DELETE
router.delete('/player_data/:id', require('./delete'));

module.exports = router;
