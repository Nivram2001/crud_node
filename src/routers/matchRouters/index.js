const express = require('express');

const router = express.Router();

// Controller
const { 
     createMatch,
     getAllMatchs,
     getMatchById,
     deleteMatchById } = require("../../controllers/matchController");

router.get('/', getAllMatchs);

router.get('/:id', getMatchById);

router.post('/', createMatch);

router.delete('/:id',  deleteMatchById)

module.exports = router;