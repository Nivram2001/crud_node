const express = require('express');

const router = express.Router();

// Controller
const { 
     createPlayer,
     getAllPlayers,
     getPlayerById,
     updatePlayerById} = require("../../controllers/playerController");

router.get('/', getAllPlayers);

router.get('/:id', getPlayerById);

router.post('', createPlayer);

router.put('/:id', updatePlayerById)

module.exports = router;