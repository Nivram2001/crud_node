const client = require("../config/DB");

class Player {


     // Create a new player in the database
     static async create(id,name,dataOfBirth) {
          try {
               const query = 'INSERT INTO player(id, name, date_of_birth) VALUES($1, $2, $3) RETURNING *';
               const values = [id, name, dataOfBirth];
               const result = await client.query(query, values);
               return result.rows[0];
          } catch (error) {
               console.error('Error executing query', error);
          }
     }


     static async getAll(){
          try {
               const query = 'SELECT * FROM player'

               const result = await client.query(query);

               return result.rows

          }catch (error){
               console.error("Error executing query", error);
          }
     }


     static async getById(id){
          try {
               const query = 'SELECT * FROM player WHERE id = $1'
               const values = [id]

               const result = await client.query(query,values);

               return result.rows[0]
          } catch (error) {
               console.error("Error executing query", error);
          }
     }

     static async update(id, name, dataOfBirth){
          try{
          const query = 'UPDATE player SET name = $1, date_of_birth = $2 WHERE id = $3 RETURNING *'
          const values = [name,dataOfBirth,id]
          const result = await client.query(query,values);
          return result.rows[0]
          }
          catch (error){
               console.log("error executing query ", error)
          }
          
     }

}

module.exports = Player