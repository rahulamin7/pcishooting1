var { database } = require("../../config/config.database");
const jwtAuthclass = require("../../lib/jwtauth.class");
const firebasenotif = require("../../lib/firebaseadmin.class")();
require("dotenv").config({ path: ".env" });

class authController {
  login(req, res) {
    var query =
      `EXEC	 [rahulaminhissaab].[USP_LOGIN_PLAYER]
		@classification_id_no = '` +
      req.body.classification_id_no +
      `',
        @password = '` +
      req.body.password +
      `'`;
    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: data.recordset,
        });
      }
    });
  }

  //check only login vie api request if needed
  checklogin(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        loggedin: true,
        message: "You Are logged in",
        user: req.session.user,
      })
    );
  }

  // login Functions   -------------------------------------------

  adminLogin(req, res) {
    var query =
      `SELECT        id, user_name, user_email, user_phone, designation, password, CAST(GETDATE() AS Date) as date
  FROM            admin_user where user_email = '` +
      req.params.usr +
      `' and password = '` +
      req.params.pwd +
      `'`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: data.recordset,
        });
      }
    });
  }

  // route for user logout
  logout(req, res) {
    res.end(
      JSON.stringify({ loggedin: false, message: "logged out successfully" })
    );
    //if (req.session.user && req.cookies.user_sid) {
    //    //res.clearCookie('user_sid');
    //    //req.session.destroy((err) => { });
    //    res.end(JSON.stringify({ 'loggedin': false, 'message': 'logged out successfully' }));
    //} else {
    //    res.end(JSON.stringify({ 'loggedin': true, 'message': 'Loggedout error' }));
    //}
  }
}
module.exports = (options) => new authController(options);
