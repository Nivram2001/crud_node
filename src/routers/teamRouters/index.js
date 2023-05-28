const express = require('express');

const router = express.Router();

// Controller
const { 
     createTeam,
     getAllTeams,
     getTeamById,
     updateTeamById } = require("../../controllers/teamController");

router.get('/', getAllTeams);

router.get('/:id', getTeamById);

router.post('/', createTeam);

router.put('/:id', updateTeamById)

module.exports = router;