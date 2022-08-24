var { database } = require("../../config/config.database");

class tournamentController {
  showtour(req, res) {
    var query =
      `SELECT tounament_name
      FROM   tournament_master
      WHERE (id = ` + req.params.id + `)`;

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
  addParticipation(req, res) {
    var query =
      `EXEC	 [rahulaminhissaab].[USP_INSERT_TOURNAMENT_COMPITITION_NO]
		@tournament_id = ` +
      req.body.tournament_id +
      `,
    @game_id = ` +
      req.body.game_id +
      `,
    @player_id = ` +
      req.body.player_id +
      `,
    @money_to_be_paid = ` +
      req.body.money_to_be_paid +
      `,
    @paid = ` +
      req.body.paid ;
    console.log(query);
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
}

module.exports = (options) => new tournamentController(options);
