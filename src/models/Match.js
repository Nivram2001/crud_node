const client = require("../config/DB");

class Match {

     // Create a new match in the database
     static async create(id, date, awayTeam,homeTeam, goalsAwayTeam, goalsHomeTeam) {
          try {
               const query = 'INSERT INTO match(id, date_created, away_team, home_team, goals_away_team, goals_home_team) VALUES($1, $2, $3, $4, $5, $6) RETURNING *';
               const values = [id, date, awayTeam, homeTeam, goalsAwayTeam, goalsHomeTeam];
               const result = await client.query(query, values);
               return result.rows[0];
          } catch (error) {
               console.error('Error executing query', error);
          }
     }

     static async getAll() {
          try {
               const query = 'SELECT * FROM match ';
               const result = await client.query(query);
               console.log(result)
               return result.rows;
          } catch (error) {
               console.error('Error executing query', error);
          }
     }

     static async getById(id){
          try {
               const query = 'SELECT * FROM match WHERE id = $1'
               const values = [id]

               const result = await client.query(query,values);

               return result.rows[0]
          } catch (error) {
               console.error("Error executing query", error);
          }
     }

     static async delete(id){
          try {
               const query = 'DELETE FROM match WHERE id = $1'
               const values = [id]

               const result = await client.query(query,values);

               return result.rows[0]
          } catch (error) {
               console.error("Error executing query", error);
          }
     }
}

module.exports = Match