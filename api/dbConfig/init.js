const { Pool } = require("pg");

let config;

// if(process.env.DATABASE_URL){
//    config = {
//     connectionString: process.env.DATABASE_URL,
//         ssl: {
//             rejectUnauthorized: false
//         }
//     } 
// }

    config = {
     connectionString: "postgres://qrzsbdbigleumg:32d36b8f042bbfdc5d6071c8b6b8ecbe67c4be9710af1533d6563e96c163ef93@ec2-52-73-184-24.compute-1.amazonaws.com:5432/d1vjv7p0pff32e",
         ssl: {
             rejectUnauthorized: false
         }
     } 



const pool = new Pool(config);

module.exports = pool;