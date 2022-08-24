var { database } = require("../../config/config.database");

class national2Controller {
  list(req, res) {
    var query = `SELECT id, comp_no, name_of_shooter, state, match_1, mqs1, total1, rank1, remark1, 
                 match_2, mqs2, total2, rank2, remark2, 
                 match_3, mqs3, total3, rank3, remark3, 
                 match_4, mqs4, total4, rank4, remark4, 
                 match_5, mqs5, total5, rank5, remark5,
                 match_6, mqs6, total6, rank6, remark6
                 FROM natioal_2 where isnull(total1,0)<>0`;

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
}

module.exports = (options) => new national2Controller(options);
