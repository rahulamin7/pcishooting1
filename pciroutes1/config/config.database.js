const sql = require("mssql");

//Initiallising connection string
var config = {
  user: "rahulaminhissaab",
  password: "Chanakya@7571",
  server: "184.168.194.64",
  database: "pcishooting",
  options: {
    encrypt: false,
    enableArithAbort: true,
  },
};

//Function to connect to database and execute query
sql.connect(config, function (err) {
  if (err) {
    console.log(err);
  }
});

module.exports = {
  database: sql,
};
