const { Client } = require('pg'); 

const client = new Client('postgres://localhost:5432/juicebox-db');

module.exports = {
  client,
}

//cHANGES