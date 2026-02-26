const {Pool} = require("pg");
const envData = require("../utils/envData");

module.exports = new Pool({
    host:envData.config.DATABASE.db_host,
    user:envData.config.DATABASE.db_user,
    database:envData.config.DATABASE.db_database,
    password:envData.config.DATABASE.db_password,
    port:envData.config.DATABASE.port
});