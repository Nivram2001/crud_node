const Match = require("../../models/Match")

// Create a new match
const createMatch = async (req, res) => {

    const {
        id, 
        date, 
        awayTeam, 
        homeTeam, 
        goalsAwayTeam, 
        goalsHomeTeam
    } = req.body

    try {
        const result = await Match.create(
            id,
            date,
            awayTeam,
            homeTeam,
            goalsAwayTeam,
            goalsHomeTeam,
        )
        
        return res.status(201).json(result);
    }catch(error){
        return res.status(500).json({error: "Problem to connect"})
    }
   
}

// Get all match
const getAllMatchs = async (req, res) => {

    try {
        const matchs = await Match.getAll();
    
        return res.status(200).json(matchs);
    } catch (error) {
        return res.status(500).json({Error: "Fail to get all match"})
    }
    
}

// Get match by id
const getMatchById = async(req, res) => {
    const id = req.params.id;

    try {
        const match = await Match.getById(id);

        if(!match){
            return res.status(404).json({error:"Match not found"})
        }
    
        return res.status(200).json(match);
    } catch (error) {
        return res.status(500).json({error: "Problem to connect"})
    }
}
// Delete match by id
const deleteMatchById = async(req, res) => {
    const id = req.params.id;
    try {
        await Match.delete(id);

        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({error: "Problem to connect"})
    }
    
} 

module.exports = {
    createMatch,
    getAllMatchs,
    getMatchById,
    deleteMatchById
}