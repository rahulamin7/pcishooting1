var { database } = require("../../config/config.database");

class financialYearController {
  list(req, res) {
    var query = `select year_id, rtrim(convert(char(16), YEAR_FROM, 103)) +' To '+ rtrim(convert(char(16), YEAR_TO, 103)) as  YEAR  FROM GEN_COMP_YEAR ORDER BY YEAR_ID DESC`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }
  listMod(req, res) {
    var query =
      `SELECT MOD_ID, SR_NO, HEADING, 'https://aaryainfoline.com/images/KS/' + IMAGEURL as IMAGEURL, UTUBEURL, DETAIL, PARAG
    FROM Y_MODULE_DTL where MOD_ID = ` + req.params.id;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }
  token(req, res) {
    var query =
      `USP_INSERT_TOKEN 
    @token  = '` +
      req.body.token +
      `'`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      console.log(data);
      if (err) {
        res.json({
          success: false,
          message: "success",
          data: err,
        });
      } else {
        res.json({
          success: true,
          message: "success",
          data: data.recordset,
        });
      }
    });
  }
}
module.exports = (options) => new financialYearController(options);
