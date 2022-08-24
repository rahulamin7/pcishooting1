var { database } = require("../../config/config.database");

class menuController {
  listMenu(req, res) {
    var query =
      `SELECT        id, menu_name, menu_icon ,menu_icon_value, menu_link,tournament_id
    FROM            menu_items where menuType='` +
      req.params.menuType + `' and expires = 0 or (expires = 1 and expiry_date >= '` + req.params.tdate  + `') order by expires desc`;

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

module.exports = (options) => new menuController(options);
