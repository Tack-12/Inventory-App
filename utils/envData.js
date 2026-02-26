require("dotenv").config();

exports.config= {
    PORT: process.env.PORT,
    DATABASE:{
        db_port:process.env.PG_PORT,
        db_host:process.env.PG_HOST,
        db_database:process.env.PG_DATABASE,
        db_user:process.env.PG_USER,
        db_password:process.env.PG_PASSWORD
    },
}