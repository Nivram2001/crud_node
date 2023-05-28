const Team = require("../../models/Team")

// Create a new team
const createTeam = async (req, res) => {

try {
    const {id, name, fundationDate} = req.body

    const result = Team.create(id,name,fundationDate)


    return res.status(201).json(result)
} catch (error) {
    return res.status(500).json({error: "Fail to connect"})
}

}

// Get all teams
const getAllTeams = async(req, res) => {
    try {
        const teams = await Team.getAll();
        return res.status(201).json(teams);
    } catch (error) {
        return res.status(500).json({error: "Problem to connect"})
    }
}

// Get team by id
const getTeamById = async(req, res) => {
    const id = req.params.id;
    
    try {

        const team = await Team.getById(id);

        if(!team){
            return res.status(404).json({error:"Team not found"})
        }
    
        return res.status(200).json(team);
        
    } catch (error) {
        return res.status(500).json({error: "Problem to connect"})
    }
}

// Update team by id
const updateTeamById = async (req, res) => {
    const id = req.params.id;
    const {name, fundationDate} = req.body;
    try {

        const team = await Team.update(id, name, fundationDate);
        
        if(!team){
            return res.status(404).json({error:"Team not found"})
        }
        
        return res.status(200).json(team)
    } catch (error) {
        return res.status(500).json({error: "Problem to connect"})
    }
}

module.exports = {
    createTeam,
    getAllTeams,
    getTeamById,
    updateTeamById
}