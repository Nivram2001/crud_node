const client = require("../config/DB");

class Team {

     // Create a new team in the database
     static async create(id, name, fundationDate) {
          try {
               const query = 'INSERT INTO team(id, name, fundation_date) VALUES($1, $2, $3) RETURNING *';
               const values = [id, name,fundationDate];
               const result = await client.query(query, values);
               return result.rows[0];
          } catch (error) {
               console.error('Error executing query', error);
          }
     }

     static async getAll(){
          try {
               const query = 'SELECT * FROM team'

               const result = await client.query(query);

               return result.rows

          }catch (error){
               console.error("Error executing query", error);
          }
     }

     static async getById(id){
          try {
               const query = 'SELECT * FROM team WHERE id = $1'
               const values = [id]

               const result = await client.query(query,values);

               return result.rows[0]
          } catch (error) {
               console.error("Error executing query", error);
          }
     }

     static async update(id, name, fundationDate){
          try{
          const query = 'UPDATE team SET name = $1, fundation_date = $2 WHERE id = $3 RETURNING *'
          const values = [name,fundationDate,id]
          const result = await client.query(query,values);
          return result.rows[0]
          }
          catch (error){
               console.log("error executing query ", error)
          }
          
     }


}

module.exports = Team