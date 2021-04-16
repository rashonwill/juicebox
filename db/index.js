const { Client } = require('pg'); 

const client = new Client('postgres://localhost:5432/juicebox-db');

// module.exports = {
//   client,
// }

// async function getAllUsers() {
//   const { rows } = await client.query(
//     `SELECT id, username 
//     FROM users;
//   `);

//   return rows;
// }

// // and export them
// module.exports = {
//   client,
//   getAllUsers,
// }
async function createUser({ username, password }) {
  try {
    const result = await client.query(`
    INSERT INTO users(username, password) 
    VALUES($1, $2) 
    ON CONFLICT (username) DO NOTHING 
    RETURNING *;
    `);

    return result;
  } catch (error) {
    throw error;
  }
}

// later
module.exports = {
  // add createUser here!
}