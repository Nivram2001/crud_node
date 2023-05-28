const Player = require("../../models/Player")

// Create a new player
const createPlayer = async (req, res) => {
    try {
        const { id , name, dateOfBirth} = req.body
        const result = await Player.create(id, name, dateOfBirth)

        return res.status(201).json(result)
    } catch (error) {
        return res.status(500).json({error:"Problem to connect"})
    }

}

// Get all players
const getAllPlayers = async(req, res) => {
    try {
        const players = await Player.getAll();

       return  res.status(201).json(players);
    } catch (error) {
        return res.status(500).json({error:"Problem to connect"})
    }

}

// Get player by id
const getPlayerById = async(req, res) => {
    const id = req.params.id;

    try {
        const player = await Player.getById(id);

        if(!player){
            return res.status(404).json({error:"Player not found"})
        }
    
        return res.status(200).json(player);
    } catch (error) {
        return res.status(500).json({error: "Problem to connect"})
    }
}

// Update player by id
const updatePlayerById = async (req, res) => {
    const id = req.params.id;
    const {name, dateOfBirth} = req.body;

    try {
        const player = await Player.update(id, name, dateOfBirth);
        
        if(!player){
            return res.status(404).json({error:"Player not found"})
        }

        return res.status(200).json(player)
    } catch (error) {
        return res.status(500).json({error: "Problem to connect"})
    }
}


module.exports = {
    createPlayer,
    getAllPlayers,
    getPlayerById,
    updatePlayerById
}