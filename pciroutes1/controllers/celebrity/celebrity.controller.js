var { database } = require("../../config/config.database");

class celebController {
  list(req, res) {
    var query = `SELECT       ID as id,ID as albumId , isnull(MENU_NAME,'') as title , 'https://aaryainfoline.com/images/KS/' + IMAGE_NAME AS url, 'https://aaryainfoline.com/images/KS/' + IMAGE_NAME AS thumbnailUrl
    FROM            Y_MENU_MAST
    WHERE        (PARENT_ID = ${req.params.id}) ORDER BY SR_NO`;

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
module.exports = (options) => new celebController(options);
