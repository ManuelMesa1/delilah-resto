const dbHost = "localhost";
const dbName = "delilah";
const dbPort = "3306";
const dbUser = "root";
const password = "@#JB48e6.^[#w]~F";

const dbPath = `mysql://${dbUser}:${password}@${dbHost}:${dbPort}/`;

module.exports = { dbName, dbPath };