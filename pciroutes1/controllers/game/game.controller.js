var { database } = require("../../config/config.database");

class gameController {
  showgame(req, res) {
    var query =
      `SELECT        A.game_id, A.game_code, A.game_code1, 
      A.player_type_id, A.SH_Class_id, A.SH_Class, 
      A.game_name,A.game_code1 + ' ' + A.game_name as gamefullname, A.max_score, A.is_decimal, A.gender,  B.fees, C.id
      FROM            game_master AS A INNER JOIN
                               tournament_game_fees AS B ON A.game_id = B.game_id INNER JOIN
                               tournament_master AS C ON B.tournament_id = C.id
      WHERE        (A.player_type_id = ` + req.params.ptid + `) 
      AND (A.SH_Class_id =  ` + req.params.shcid + `) 
      AND (A.gender = '` + req.params.gender + `' OR
                               A.gender = 'Mixed') AND A.APPFILTER <> '` + req.params.appfil + `'
      ORDER BY A.game_id`;

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

module.exports = (options) => new gameController(options);
